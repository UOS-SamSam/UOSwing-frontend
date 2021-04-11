import React, { useState, useContext, createContext, Dispatch } from 'react';
import axios from 'axios';
import { API_URL } from '../../CommonVariable';
import { userType, childrenObj } from '../Type';

const userContext = createContext<userType>({
	auth: "user"
});
const headerContext = createContext<{"X-AUTH-TOKEN": string}>({"X-AUTH-TOKEN": ""}); // 관리자 api 호출 시 사용할 header
const loginContext = createContext<(key: string) => boolean>((key: string) => { return true });
const userLoginContext = createContext<() => void>(() => { });

export const UserContextProvider = ({ children }: childrenObj) => {
	const [user, setUser] = useState<userType>({
		auth: "user"
	});
	const [header, setHeader] = useState<{ "X-AUTH-TOKEN": string }>({ "X-AUTH-TOKEN": "" });

	const login = (key: string): boolean => {
		axios.post("/api/v1/admin/login", {
			"email": "samsam-uos@gmail.com",
			"password": key
		})
			.then(res => {
				const resKey: string = res.data;
				setHeader({
					"X-AUTH-TOKEN" : resKey
				});
			})
			.catch(e => {
				if (e.response) {
					// 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
					console.log(e.response.data);
					console.log(e.response.status);
					console.log(e.response.headers);
				}
				else if (e.request) {
					// 요청이 이루어 졌으나 응답을 받지 못했습니다.
					// `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
					// Node.js의 http.ClientRequest 인스턴스입니다.
					console.log(e.request);
				}
				else {
					// 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
					console.log('Error', e.message);
				}
				console.log(e.config);
				return false;
			});
		return true;
	};

	const userLogin = () => {
		setUser({
			...user,
			auth: "user"
		});
		setHeader({ "X-AUTH-TOKEN": "" });
	};

	return (
		<userContext.Provider value={user}>
			<loginContext.Provider value={login}>
				<userLoginContext.Provider value={userLogin}>
					{children}
				</userLoginContext.Provider>
			</loginContext.Provider>
		</userContext.Provider>
	);
};

export function useUserState() {
	const context = useContext(userContext);
	return context;
}

export function useLogin() {
	const context = useContext(loginContext);
	return context;
}

export function useUserLogin() {
	const context = useContext(userLoginContext);
	return context;
}

