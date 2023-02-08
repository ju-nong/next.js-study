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
