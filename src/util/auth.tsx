import { NextResponse } from "next/server";

export async function auth(token: string, path = '/api/authenticate') {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
	console.log(apiUrl);
	const response = await fetch(`${apiUrl}${path}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ token })
	});

	if (response.ok) {
		const data = await response.json() as { login?: boolean, isAdmin?: boolean, message?: string };
		return data;
	} else {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
}
