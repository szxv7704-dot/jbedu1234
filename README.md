# 연수 자료실

연수 강의안 · 강의 영상 · 업무도구(예제파일)를 모아 두는 저장소입니다. GitHub Pages로 공개되며 빌드 단계가 없습니다(`main`에 올리면 1~2분 뒤 반영).

| 페이지 | 데이터 | 파일 |
|---|---|---|
| `index.html` 강의안 | `data/lectures.json` | `lectures/{id}/` |
| `videos.html` 강의 영상 | `data/videos.json` | 유튜브(일부 공개) 주소만 |
| `tools.html` 업무도구 | `data/tools.json` | `tools/{id}/` |

화면 틀은 `assets/lec.css` · `assets/lec.js` 하나를 같이 씁니다. 내용은 데이터 파일만 고칩니다. 목록이 비면 빈 화면 안내가 나옵니다.

## 강의 올리는 법

1. `lectures/{id}/` 폴더를 만든다. `id`는 영문 · 숫자 · 하이픈(예: `2026-12-report-ai`).
2. 파일 이름은 고정: `slides.html`(강의안) · `slides.pdf`(강의안 PDF) · `practice.zip`(실습파일).
3. `data/lectures.json`의 `items`에 항목 하나를 더하고 `updated`를 오늘 날짜로.

```json
{
  "id": "2026-12-report-ai",
  "date": "2026-12-08",
  "title": "생성형 AI로 보고서 초안 쓰기",
  "time": "14:00~16:00", "place": "연수원 2강의실", "audience": "행정실무자",
  "desc": "한두 문장 소개",
  "tags": ["보고서", "프롬프트"],
  "deck": "lectures/2026-12-report-ai/slides.html",
  "pdf": "lectures/2026-12-report-ai/slides.pdf",
  "video": "영상 id(있으면)",
  "files": [{"name": "실습파일", "href": "lectures/2026-12-report-ai/practice.zip", "kind": "ZIP"}]
}
```

- 예정 · 오늘 · 완료는 적지 않습니다. `date`로 저절로 붙고, 예정(가까운 순) → 완료(최근 순)로 놓입니다.
- 소통방은 `lectures.json` 맨 위에 `"chat": {"title": "강의 소통방", "desc": "…", "url": "…"}`(없으면 안 보임, url이 비면 '준비 중').

## 영상

`data/videos.json`의 `items`: `id` · `title` · `date` · `desc` · `duration` · `speaker` · `youtube`(주소나 아이디) 또는 `url`(그 밖의 링크) · `lecture`(강의 `id`로 서로 잇기).
영상 파일은 저장소에 넣지 않습니다(한 파일 100MB 제한, 이력에 영구히 쌓임).

## 업무도구

`data/tools.json`의 `items`: `id` · `title` · `desc` · `version` · `date`(갱신일) · `how`(한 줄 사용법) · `href`(웹 도구 또는 바깥 주소) · `open`(단추 글자, 기본 '도구 열기') · `files[]`(예제파일).
- 웹 도구(html)는 `tools/{id}/index.html`에 두고 `href`로 겁니다.
- **실행 파일(.exe 등)은 저장소에 넣지 않습니다.** GitHub 릴리스에 올리고 그 주소를 `href`로 겁니다.

## 올리지 않는 것

개인정보가 담긴 원본 · 수강생 명단 · 결과 파일 · 실행 파일 · 영상 파일. 예제 · 실습파일은 가상 자료로 만듭니다.
한글 파일명이 든 zip은 UTF-8로 압축해야 Windows에서 이름이 깨지지 않습니다.


## 메인 페이지 실습 자료 추가·교체

관리자 업로드 서버는 없습니다. GitHub 저장소의 파일 추가(웹의 Add file → Upload files 또는 Git)로 관리합니다.
1. 개인정보가 없는 검증된 실습 파일을 `practice/` 폴더에 올립니다.
2. `data/practice.json`에서 해당 항목의 `href`를 `practice/파일명.hwpx`처럼 저장소 루트 기준으로 입력합니다.
3. `name`, `session`, `description`, `format`을 수정하고 `updated`를 갱신합니다. 새 자료는 `items`에 같은 구조로 추가합니다.
4. `main` 반영 후 페이지에서 다운로드하고 실제 프로그램으로 열어 확인합니다.

`href: null`이면 **준비 중**이며 링크가 생기지 않습니다. 파일을 올리기 전에 경로만 입력하지 마세요. 로컬 파일(HWPX/XLSX/HTML/PDF/ZIP)만 지원합니다. 파일 교체 시 새 파일명으로 등록하면 브라우저 캐시 혼동을 줄일 수 있습니다. 이 영역은 강사 배포용이며 수강생 제출함이 아닙니다.

기술 설명 검증: `lectures/ai-work-simplify/fact-check.html`. 강의안의 N 키로 현재 장표의 발표자 노트를 볼 수 있습니다.
