"use client"; // Error components must be Client components

import { useEffect } from "react";

type Error = {
	error: Error;
	reset: () => void;
};

export default function Error({ error, reset }: Error) {
	useEffect(() => {
		console.error(error);
		// 에러가 발생하면 콘솔에 에러를 알려주고
		// 클라이언트 컴포넌트이므로 브라우저에서 확인 가능 합니다.
	}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
			<button onClick={() => reset()}>Try again</button>
		</div>
	);
}
