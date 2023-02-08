## 프로젝트 생성

npx create-next-app [프로젝트 명] --typescript

## app 폴더

Layouts, 공통으로 사용되는 UI 컴포넌트 정의
리렌더링 방지된다네

## pages 폴더

파일 이름을 기반으로 자동으로 router 정의

```bash
pages
└about.js
└info.js

/about
/info
```

와 정말 좋다

## public 폴더

이미지, 글꼴 등과 같은 정적 자산

```bash
public
└images
 └banner.png
 └background.png
└fonts
 └나눔고딕.ttf
 └맑은고딕.ttf

/images/banner.png
/fonts/나눔고딕.ttf
```

와 정말 간편하다

## styled-components 적용

참조: [Next.js + styled-components](https://taenami.tistory.com/69)

근데 여기 프로젝트에서는, 연습해볼겸 emotion 채택

## pages/api 폴더 구조

```bash
fetch("/api/cat") => api/cat/index.ts
fetch("/api/type") => api/cat/type.ts
fetch("/api/type/cute") => api/cat/[...slug].ts
fetch("/api/category/gif") => api/cat/[...slug].ts
파일명이 진짜 [...slug].ts 인거임

api
└cat
 └index.ts
 └type.ts
 └[...slug].ts
```

```typescript
// [..slug].ts <= 다시 한 번 말하지만, 진짜 파일명이 이거 그 자체임
import type { NextApiRequest, NextApiResponse } from "next";

function type(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;
    console.log(slug);
    // /api/type/cute => ["type", "cute"]
    // /api/category/gif => ["category", "gif"]
    res.status(200).json({});
}

export { type as default };
```
