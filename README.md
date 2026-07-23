# 김지연 포트폴리오

복잡한 요구사항과 데이터를 사용자가 쉽게 선택하고 이해할 수 있는 화면과 흐름으로 구현하는 프론트엔드 개발자 김지연의 포트폴리오 사이트입니다.

🔗 **배포 링크** : https://jiyeon-portfolio-six.vercel.app  
🔗 **GitHub** : https://github.com/k65860

<br>

## 소개

이 사이트는 단순히 프로젝트 목록을 나열하지 않고 "어떤 문제를 어떻게 풀었는지"를 중심으로 구성했습니다. CareBuddy와 PlayMap 두 프로젝트를 대표작으로 선정해 각 프로젝트에서 맡은 역할과 문제 해결 과정을 API 데이터 흐름 단위로 정리했고 기술 검증(Technical PoC), 트러블슈팅, 설계 판단(Design Challenge)을 성격에 따라 구분해 보여줍니다.

<br>

## 제작 기간

2026.05 ~ 2026.07 (개인 프로젝트)

<br>

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| 프레임워크 | Next.js 16 (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS 4 |
| 애니메이션 | Framer Motion |
| 기능 | html2canvas, jspdf (화면 캡처 및 PDF 저장) |
| 배포 | Vercel |

<br>

## 폴더 구조

```
.
├── app
│   ├── layout.tsx      # 전역 레이아웃, 메타데이터, 폰트 설정
│   ├── page.tsx         # 전체 페이지 콘텐츠
│   └── globals.css      # 전역 스타일 및 Tailwind 설정
└── public
    ├── profile.jpeg      # 프로필 이미지
    ├── projects           # 프로젝트별 스크린샷
    ├── evidence            # 트러블슈팅/기술검증 증빙 이미지
    └── origin               # Story 섹션 이미지
```

> 현재는 단일 페이지(`app/page.tsx`)로 전체 섹션을 구성하고 있습니다. 이후 섹션 단위(컴포넌트)로 분리하는 리팩터링을 계획하고 있습니다.

<br>

## 페이지 구성

1. **Hero** — 정체성 한 줄 소개 및 핵심 지표 3가지
2. **Selected Work** — CareBuddy, PlayMap 대표 프로젝트 상세 (역할 / 화면 / 기술 스택)
3. **Case Studies** — 기술 검증, 트러블슈팅, 설계 판단을 유형별로 분리한 문제 해결 사례
4. **How I Work** — 작업 방식과 협업 습관
5. **Story** — 개발에 관심을 갖게 된 개인적인 계기
6. **Writing & Evidence** — Velog 기록, 동아리 활동, 근속 경험
7. **Skills & Capability** — 기술 숙련도를 퍼센트가 아닌 실제 구현 범위로 정리
8. **Contact** — 연락 방법

<br>

## 실행 방법

```bash
git clone https://github.com/k65860/jiyeon_portfolio.git
cd jiyeon_portfolio
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

<br>

## 관련 프로젝트

- [CareBuddy](https://github.com/care-buddy/Carebuddy) — 반려동물 커뮤니티 서비스 (React, TypeScript, Recoil)
- [PlayMap](https://github.com/k65860/playmap) — 놀이활동 추천 및 기록 서비스 (React, TypeScript)
