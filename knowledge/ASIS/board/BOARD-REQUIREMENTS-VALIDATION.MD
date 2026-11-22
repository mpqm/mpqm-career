# BOARD 요구사항 정의서 검증

## 1 검증 범위

- 대상: `spring-service-board/meta/docs/board-요구사항 정의서.xlsx`
- 비교본: `spring-service-board/meta/docs/board-요구사항 정의서.md`
- 구현 기준: `spring-service-board`의 Controller, Service, DTO, MyBatis Mapper, DDL, JavaScript, Batch 설정
- 검증일: 2026-09-27

## 2 인벤토리

- XLSX: 시트 1개, 요구사항 26개, 고유 ID 26개
- Markdown: 요구사항 26개, 고유 ID 26개
- ID 집합: XLSX와 Markdown 일치
- XLSX SHA-256: `F4650644F696C43A81252FD7849967B9DCE3F015004E1E170A21235A9362FB6F`
- Markdown SHA-256: `682D1FBA2EC719337D09FB2A125E6D7D5EB8FEF0E77F2EBA946A3CCD8F74E48E`
- 판정: 12개 요구사항은 기존 핵심 설명을 유지했고, 14개 요구사항은 11개 변경 묶음에 따라 구현 기준으로 정정하거나 구현 차이를 표시했다.

## 3 적용된 변경

| XLSX 행 | 요구사항 ID | 판정 | 구현 기준 정정안 |
| ---: | --- | --- | --- |
| 5 | MEMBER_001 | 구현 차이 | 프로필 이미지는 문서상 선택 항목이지만 회원가입 API의 `file` Part는 필수이다. 프론트는 파일을 선택한 경우에만 Part를 전송하므로 이미지 없이 가입하는 흐름은 API 계약과 충돌한다. |
| 10 | MEMBER_006 | 정정 필요 | 실제 입력과 검증은 `기존 비밀번호`, `새 비밀번호` 두 값이다. `새 비밀번호 확인` 값과 일치 검증은 구현되어 있지 않다. |
| 11 | MEMBER_007 | 정정 필요 | 비활성화는 `is_email_auth=false`, `is_in_active=true` 갱신만 수행한다. 복구 링크 발송과 서버 세션 무효화는 수행하지 않고, 프론트만 로그인 화면으로 이동한다. |
| 13 | MEMBER_009 | 정정 필요 | 아이디 찾기는 이메일만 입력해 아이디를 이메일로 발송한다. 비밀번호 찾기는 아이디만 입력해 UUID 원문을 임시 비밀번호로 발송하고, 해시값을 계정 비밀번호로 저장한다. 이름 입력은 사용하지 않는다. |
| 16, 21 | POST_002, POST_007 | 구현 차이 | 프론트는 보호 게시물을 받은 뒤 비밀번호 Modal을 표시하고 `/post-auth`로 확인하지만, `/post` API가 확인 전에 제목·본문·비밀번호를 포함한 상세를 반환한다. 비밀번호 검증이 서버의 상세 조회 권한으로 연결되어 있지 않다. |
| 20 | POST_006 | 구현 차이 | 서버 업로드는 파일명 정리와 저장만 수행한다. 파일 형식, 파일 크기, 최대 이미지 수 제한은 서버에서 검증하지 않는다. 게시물 프론트의 미리보기는 이미지 MIME이 아닌 파일을 건너뛸 뿐 크기·개수 제한은 없다. |
| 24, 25 | COMMENT_002, COMMENT_003 | 보강 필요 | 댓글은 최신순·오래된순·좋아요순·싫어요순·대댓글수순을 지원한다. 대댓글은 최신순·오래된순·좋아요순·싫어요순을 지원한다. 둘 다 페이지네이션한다. |
| 27 | COMMENT_005 | 정정 필요 | 대댓글이 있는 부모 댓글은 삭제하지 않고 내용을 `삭제된 댓글입니다.`로 바꾼다. 대댓글이 없는 댓글·대댓글만 실제 삭제되며, 이때 FK Cascade로 해당 반응도 삭제된다. |
| 29 | RANK_001 | 정정 필요 | 랭킹 응답은 순위, 제목, 게시물 ID와 조회수·좋아요수·싫어요수·댓글수를 제공한다. 작성자 정보는 랭킹 테이블과 응답 DTO에 없다. 각 기준 상위 10개만 생성한다. |
| 30 | RANK_002 | 정정 필요 | 배치는 매시간 예약 실행되지 않고 Batch 애플리케이션 시작 시 `CommandLineRunner`가 1회 실행한다. Reader는 게시물 1,000개 단위로 읽고, 기준별 Top 10을 `SortedSet`에 유지하며 마지막 미만 청크 또는 5번째 청크에서 랭킹을 생성한다. |
| 32, 33 | REACT_001, REACT_002 | 정정 필요 | 좋아요와 싫어요는 서로 독립적으로 토글된다. 반대 반응을 자동 취소하지 않으므로 같은 사용자가 같은 대상에 좋아요와 싫어요를 동시에 보유할 수 있다. DB에도 대상·사용자 조합 Unique 제약이 없다. |

## 4 확인된 요구사항

다음 12개 요구사항은 핵심 기능 설명이 구현과 일치한다.

- MEMBER_002 로그인
- MEMBER_003 로그아웃
- MEMBER_004 계정 정보 조회
- MEMBER_005 계정 정보 수정
- MEMBER_008 계정 복구
- POST_001 게시물 작성
- POST_003 게시물 목록 조회
- POST_004 게시물 수정
- POST_005 게시물 삭제
- COMMENT_001 댓글 작성
- COMMENT_004 댓글 수정
- ACTIVITY_001 활동 기록

## 5 추가 구현 위험

- `FindMemberRes`가 비밀번호 해시를 포함해 계정 정보 조회 응답으로 노출될 수 있다.
- 회원가입의 선택 이미지와 필수 Multipart Part가 충돌한다.
- 보호 게시물의 비밀번호 확인이 상세 조회 API 접근 제어로 이어지지 않는다.
- 좋아요·싫어요의 상호 배제와 중복 방지를 DB 제약으로 보장하지 않는다.
- 랭킹 Processor는 5번째 1,000개 청크에서 결과 생성을 끝내므로 게시물이 5,000개를 넘으면 후속 게시물이 랭킹 후보에 반영되지 않을 수 있다.

## 6 검증 제한

- 저장소의 Maven Wrapper 설정 파일이 없어 `mvnw.cmd test`를 실행할 수 없었고, 시스템 Maven도 설치되어 있지 않았다.
- `@oai/artifact-tool`로 XLSX 14개 상세 셀을 수정하고 파생 Markdown을 같은 내용으로 동기화했다.
- 저장 후 XLSX를 다시 가져와 고유 요구사항 ID 26개, 대상 14개 상세, Markdown 동기화와 수식 오류 부재를 확인했다.
- 전체 시트 렌더링에서 병합 구조, 구분선, 줄바꿈, 행 높이와 텍스트 가독성을 확인했다.

## 7 주요 Source

- `api/src/main/java/com/board/api/member/controller/MemberController.java`
- `api/src/main/java/com/board/api/member/service/MemberService.java`
- `api/src/main/java/com/board/api/post/service/PostService.java`
- `api/src/main/java/com/board/api/global/util/UploadUtil.java`
- `api/src/main/java/com/board/api/comment/service/CommentService.java`
- `api/src/main/java/com/board/api/react/service/ReactService.java`
- `common/src/main/resources/mapper/CommentMapper.xml`
- `common/src/main/resources/mapper/LikeMapper.xml`
- `common/src/main/resources/mapper/UnlikeMapper.xml`
- `common/src/main/resources/mapper/RankMapper.xml`
- `common/src/main/java/com/board/common/rank/dto/GetRankRes.java`
- `batch/src/main/java/com/board/batch/BatchJobRunner.java`
- `batch/src/main/java/com/board/batch/RankReader.java`
- `batch/src/main/java/com/board/batch/RankProcessor.java`
- `meta/scripts/ddl.sql`
