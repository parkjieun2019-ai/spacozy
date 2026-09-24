// public 폴더 파일 경로 앞에 배포 경로(GitHub Pages의 /저장소이름)를 붙입니다.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path: string) => `${basePath}${path}`;
