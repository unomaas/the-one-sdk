import fetch from 'isomorphic-unfetch';

interface Config {
	apiKey: string;
	baseUrl?: string;
}; // End interface Config


export abstract class Base {

	private apiKey: string;
	private baseUrl: string;


	constructor(config: Config) {
		this.apiKey = config.apiKey;
		this.baseUrl = config.baseUrl || 'https://the-one-api.dev/v2';
	}; // End constructor


	public async invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
		const url = `${this.baseUrl}${endpoint}`;

		const headers = {
			"Content-Type": "application/json",
			'Authorization': `Bearer ${this.apiKey}`
		}; // End headers

		const config = {
			...options,
			headers
		}; // End config

		const response = await fetch(url, config);
		if (!response.ok) throw new Error(`Error invoking ${url}: ${response.statusText}`);
		const data = await response.json();
		return data;
	}; // End invoke

}; // End class Base