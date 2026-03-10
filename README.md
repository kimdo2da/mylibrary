# MyLibrary

React와 Vite를 기반으로 제작한 도서 검색 웹앱입니다.  
알라딘 API를 활용해 책을 검색하고, 관심 있는 책을 책갈피에 저장한 뒤  
독후감을 작성하고 관리할 수 있도록 구현했습니다.

## 프로젝트 소개

이 프로젝트는 단순한 도서 검색 기능에서 끝나는 것이 아니라,  
사용자가 관심 있는 책을 저장하고 직접 독후감을 작성할 수 있도록 만든 웹 애플리케이션입니다.

메인 화면에서는 베스트셀러 도서를 보여주고,  
검색 페이지에서는 알라딘 API를 통해 실제 도서 데이터를 불러옵니다.  
또한 책갈피와 독후감 기능은 LocalStorage를 활용하여 브라우저에서 저장하고 관리할 수 있도록 구성했습니다.

## 주요 기능

- 알라딘 API 기반 도서 검색
- 메인 화면 베스트셀러 목록 표시
- 검색 결과 책갈피 추가 / 삭제
- 책갈피 목록 확인
- 책갈피한 도서를 기반으로 독후감 작성
- 독후감 수정
- 독후감 목록 조회
- 독후감 선택 삭제
- LocalStorage를 활용한 데이터 저장
- 공통 헤더 및 페이지 이동 메뉴 제공

## 사용 기술

- React
- JavaScript
- Vite
- React Router DOM
- CSS / CSS Modules
- LocalStorage
- Aladin Open API
- Vercel Serverless Function

## 폴더 구조

```text
src
 ├─ assets
 │   ├─ api.js
 │   ├─ book.jpg
 │   └─ react.svg
 ├─ components
 │   ├─ BookList.jsx
 │   ├─ BookmarkPage.jsx
 │   ├─ Header.jsx
 │   ├─ ReviewContentEditor.jsx
 │   ├─ ReviewList.jsx
 │   └─ SearchForm.jsx
 ├─ hooks
 │   └─ usePageTitle.jsx
 ├─ App.jsx
 ├─ App.css
 ├─ index.css
 └─ main.jsx

api
 └─ aladin.js
