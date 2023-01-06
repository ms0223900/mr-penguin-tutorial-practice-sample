interface BasicSegment {
	id: string;
	uri: string;
	page: number;
}

interface MemberSegment {
	phone: string;
	address: string;
	user_type: string;
}

// 改寫這個
interface GuestSegment {
	id: string;
	uri: string;
	user_type: string;
}

// 改寫之後變成...
interface GuestSegment {
	//...
}
