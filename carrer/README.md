# 박종성 이력서·포트폴리오 검토본

## 열어 보기

- [웹 홈페이지](./index.html)
- [간단 이력서](./index.html?view=resume)
- [실무 프로젝트 7개의 상세 사례](./index.html?view=portfolio)
- [16:9 포트폴리오 슬라이드](./index.html?view=slides)
- [이력서 PDF](../knowledge/이력서.pdf) 2페이지
- [포트폴리오 PDF](../knowledge/포트폴리오.pdf) 23페이지

문구는 [static/js/content.js](./static/js/content.js)에서 관리합니다. 반복되는 화면 요소는 `templates/`의 HTML `<template>`에 두고, 화면 스크립트는 로컬 jQuery로 데이터를 채웁니다. [이전 웹 페이지](./index.html?view=archive)도 같은 진입점으로 엽니다.

로컬에서는 MPQM 루트에서 다음 명령을 실행한 뒤 `http://127.0.0.1:8000/`을 엽니다. 템플릿은 접속 시 불러옵니다.

```powershell
node carrer/static/lib/serve.mjs
```

## PDF 다시 생성

MPQM 루트에서 다음 명령을 실행합니다. Node.js 22와 Chrome 또는 Edge가 필요합니다. 브라우저 실행 파일이 다른 위치에 있으면 `PORTFOLIO_BROWSER`에 경로를 지정합니다.

```powershell
node carrer/static/lib/export-pdfs.mjs
```

명령을 실행하면 로컬 서버가 자동으로 열리고, 같은 이력서와 슬라이드 화면에서 `knowledge/이력서.pdf`와 `knowledge/포트폴리오.pdf`를 갱신합니다.

## 구성

경력 2년 차 풀스택 개발자로 배치했습니다. 이력서는 최근 실무 성과를 우선하고, 상세 포트폴리오는 KSTV6 → AI Data Pipeline → CXL → SCG → SVT → IDPP → KSTV5 순서로 문제·접근·개인 기여·검증 결과를 제시합니다. 과거 IRS·ZIPPOP·SSI는 이전 작업으로 분리했습니다. 시각 구성은 기존 Figma의 넓은 여백, 큰 제목, 녹색 강조와 16:9 슬라이드 흐름을 참고했습니다.

## 근거와 표현 범위

통합 지원 자료에서 산출물별 원고를 찾고, 문장을 최종 반영하기 전에 프로젝트별 상세 근거에서 역할과 시험 조건을 확인합니다. [대시보드](../knowledge/지원%20자료.md#dashboard) · [이력서](../knowledge/지원%20자료.md#resume) · [포트폴리오 구성](../knowledge/지원%20자료.md#portfolio) · [프로젝트별 근거](../knowledge/README.md)

약 10만 건/초는 특정 Kafka–Fluent Bit–OpenSearch 시험 구성의 전 구간 측정치입니다. 60억 건은 누적 조회 측정 구간이고, IDPP의 초당 10만 Tag는 설계 목표입니다.

## 제출 전 확인

1. 정확한 입사일·재직 기간, 프로젝트 수행 기간
2. 회사 및 고객명, 내부 구조와 기술 상세의 외부 공개 가능 범위
3. 연락처와 학력·자격증 표기
4. 성능시험 장비 사양과 측정 조건을 공개할지 여부

현재는 로컬 검토본이며 외부에 게시하지 않았습니다. PDF는 데이터 수정 후 다시 생성해야 합니다.
