export type noticeType = {
	id: number,
	title: string,
	createdDate: String,
	content: string
};

export type padBoxType = {
	id: number,
	boxId: number,
	latitude: number,
	longitude: number,
	name: string,
	address: string,
	padAmount: number,
	temperature: number,
	humidity: number,
	updatedStateDate: Date,
	// 희은 : isReported 속성 추가 되어야합니다!
};

export type statisticsType = {
	padBoxId: number,
	padBoxName: string,
	amount: number
}

export type reportType = {
	id: number,
	tag: string, // 추후 수정
	content: string,
	isResolved: boolean,
	createdDate: Date,
	box_id: number
}

type authArray = ["admin", "user"]

export type userType = {
	auth: authArray[number] 
	// todo : 속성 더 있을 지 생각
}

export type childrenObj = {
	children : React.ReactChild
}