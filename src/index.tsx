import { showHUD } from "@raycast/api";

export default async function Command() {
	await showHUD("Hello World!");
}