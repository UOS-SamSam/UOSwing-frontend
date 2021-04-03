export type noticeType = {
	id: number,
	title: string,
	createdDate: Date,
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
	updatedStateDate: Date
};

type authArray = ["admin", "user"]

export type userType = {
	auth: authArray[number] 
	// todo : 속성 더 있을 지 생각
}

export type childrenObj = {
	children : React.ReactChild
}