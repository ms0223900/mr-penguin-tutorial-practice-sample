interface BasicSegment {
	id: string;
	uri: string;
	page: number;
}

interface MemberSegment {
	phone: string;
	address: string;
}

// 改寫這個
interface UserSegment {
	id: string;
	uri: string;
	page: number;
	phone: string;
	address: string;
}

// 改寫完之後變成...
interface UserSegment {
	//...?
}
