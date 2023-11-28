## 프로젝트 실행방법

```
git clone https://github.com/seungyeonchoo/wheretogo.git
cd wheretogo

- 프로젝트 시작
npm run dev

```

<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)
- [기능별 설명](#기능별-설명)

<br>

> ## 프로젝트 개요

- Next AppRouter 학습을 위한 위치 기반 장소 추천 서비스
- Google Maps Api를 활용한 지도 및 주소 검색 자동완성, 장소 데이터 fetch 구현
- 모바일 전용 서비스

<br>

> ## 기술 Stack

- Next
- Typescript
- tailwindcss
- redux-toolkit

<br>

> ## 폴더 구조

```
src
├── app
│   ├── globals.css
│   ├── layout.tsx
│   ├── location
│   │   └── page.tsx
│   ├── page.tsx
│   └── place
│       └── page.tsx
├── components
│   └── ReduxProvider
├── containers
│   ├── location
│   ├── main
│   └── place
├── store
└── utils



```

> ## 기능별 설명

  <details>
    <summary>1. 랜딩페이지</summary>
    <p align="center">
    <img src="https://github.com/seungyeonchoo/react_ts_administrator_page/assets/100207630/104bbe65-67cc-4a91-aa58-47b875c763aa"/>
    </p>
    
    1. 서비스 랜딩 페이지 - 프로젝트에 대한 간략한 소개
    2. 장소검색하기 버튼 클릭 시 '/location' 경로 (장소 검색 페이지)로 이동하도록 구현

  </details>

  <details>
    <summary>2. 장소 검색 페이지 </summary>
    <p align="center">
    <img src="https://github.com/seungyeonchoo/makemyhabits/assets/100207630/34da3188-c53a-4371-8114-66cbfa4140ae"/>
    </p>

    1. Google Map 구현
        - react-google-maps/api 라이브러리 활용한 구글 지도 출력
        - default location : 종로구청
        - 검색된 위치 마커 및 원 반경 표시 구현
    2. AutoComplete 구현
        - react-google-maps/api 라이브러리 활용한 장소검색 자동완성 구현
        - 자동완성 주소 선택 시 redux store에 저장된 location({lat, lng}) 값 변경 구현
        - 주소 검색 시 검색된 위치로 지도 이동 후 [시작하기] 버튼 UI 출력
    3. 시작하기 버튼
        - 버튼을 클릭하면 장소 추천 페이지로 이동하도록 구현

  </details>
    <details>
    <summary>3. 장소 추천 페이지 </summary>
    <p align="center">
    <img src="https://github.com/seungyeonchoo/react_ts_administrator_page/assets/100207630/3e0f0bb1-043a-4dab-a927-b303e75ea3d5"/>
    </p>

    1. 장소 추천
      - Google Place Search API를 활용해 검색한 장소 주변 20개의 음식점을 추천
      - 장소의 특징을 Badge 형태로 보여줄 수 있도록 구현
      - radio 를 활용해 about/영업시간/리뷰 버튼이 클릭 되었을 때 해당 내용을 보여주도록 구현
      - 리뷰 클릭 시 전체 텍스트 보기 구현

  </details>

<br>
