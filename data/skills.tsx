import type { ReactNode } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiStyledcomponents,
  SiAxios,
  SiPostman,
  SiGithub,
  SiFigma,
  SiNotion,
  SiVercel,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: ReactNode;
  desc: string;
  color: string;
};

export const skills: Skill[] = [
  {
    name: "React",
    icon: <SiReact />,
    desc: "컴포넌트 기반 UI 구현",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    desc: "Props, State, API 응답 타입 정의",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    desc: "이벤트 처리와 조건부 렌더링",
    color: "#F7DF1E",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    desc: "포트폴리오 웹 구현",
    color: "#000000",
  },
  {
    name: "Styled-components",
    icon: <SiStyledcomponents />,
    desc: "재사용 가능한 스타일 컴포넌트",
    color: "#DB7093",
  },
  {
    name: "Axios",
    icon: <SiAxios />,
    desc: "GET/POST/PUT/DELETE API 연동",
    color: "#5A29E4",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    desc: "API 요청 및 응답 테스트",
    color: "#FF6C37",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    desc: "브랜치 기반 협업 및 코드 관리",
    color: "#181717",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    desc: "화면 흐름과 프로토타입 제작",
    color: "#F24E1E",
  },
  {
    name: "Notion",
    icon: <SiNotion />,
    desc: "기능 명세서와 협업 문서 정리",
    color: "#000000",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    desc: "프론트엔드 배포 경험",
    color: "#000000",
  },
];
