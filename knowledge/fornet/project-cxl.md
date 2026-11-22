# CXL ENABLER 경력 근거

[상세 근거](#evidence) · [지원서 제작 원고](#materials)

## 역할과 범위

Orchestrator의 관리 기능 개발과 운영설명서·설치지침서 작성. 인터페이스 문서는 구현 참고 자료.

## 재조사에서 확인한 근거

2026-11-22 로컬 전체 Ref와 개인 author 재집계. 5개 저장소 543건 중 개인 211건(비병합 208건). Orchestrator의 Host·Transaction·Dashboard Controller와 로그인 도입 커밋 `5fd57dd`의 변경 경로를 확인했다. 2025-07-07 판 배포 자산은 설치 준비 범위를 보여 준다.

CXL 155~166번 티켓의 콘솔·매뉴얼 업무는 Orchestrator Git과 2025-07-07 판 문서에 연결된다. [업무 티켓 소스](./process-ticket.md)

<a id="evidence"></a>

## 상세 근거

### CXL ENABLER Orchestrator 업무·성과·기여도 상세 근거

> 이력서 압축 전 정보 수집 원본. 2026-11-15 재조사: 5개 저장소의 전체 Git 이력 인벤토리, 개인 주요 변경 Patch·현재 구현 대조, 운영·설치·인터페이스·DB 자료 교차 검토. 수치 없는 효과는 정량화하지 않음.

#### 1. 분석 범위와 근거

| 구분 | 내용 |
|---|---|
| 주 분석 저장소 / 앱 | `01. cxl/orchestrator` / `cxl-orchestrator-v2` |
| 본인 식별 | Git author email `jspark@4net.co.kr` |
| Git 활동 기간 | 2025-04-08 ~ 2025-07-04 |
| 본인 커밋 | 211건 (2025-04 38, 05 131, 06 36, 07 6) |
| 변경량 참고치 | `cxl-orchestrator-v2` 기준 +44,899 / -63,106줄, 변경 파일 657개 |
| 티켓 근거 | `knowledge/fornet/process-ticket.md` §2의 업무 티켓 번호 155~166. 작성자와 결과는 Git·Code와 대조 |
| 산출물 근거 | 본인 작성(사용자 확인): CXL ENABLER 운영설명서·설치지침서. 인터페이스 문서는 개발 시 참고 자료 |

##### 1.0 재조사 범위와 저장소 소유권

| 저장소 | 전체 Commit | 본인 Email Commit | 현재 추적 파일 | 판단 |
|---|---:|---:|---:|---|
| `orchestrator` | 336 | 211 | 282 | 본인의 웹 콘솔·API·메시징 연동 기여를 추적할 주 근거 |
| `agent` | 94 | 0 | 827 | 다른 작성자의 C Agent 구현; 연동 상대·제품 맥락 |
| `controlplane` | 54 | 0 | 74 | 다른 작성자의 제어 메시지 처리; 본인 구현으로 주장하지 않음 |
| `resourcemgr` | 25 | 0 | 25 | 다른 작성자의 리소스 수집·상태 관리; 연동 근거 |
| `mqlib` | 34 | 0 | 52 | 다른 작성자의 ActiveMQ 메시지 계약·공통 라이브러리 |

- 기준: 각 저장소의 전체 Git 이력을 Author Email로 집계했다. 211건은 `orchestrator`에 한정되며 나머지 네 저장소에서 `jspark@4net.co.kr` Commit은 확인되지 않았다. `agent`의 827개 추적 파일 중 769개가 `lib/`이므로 이를 개인 구현 규모로 해석하지 않는다.
- 조사 1회차: 저장소별 전체 Commit·Author·추적 경로와 현재 Git 상태를 열람. 조사 2회차: 개인 주요 기능 Commit의 변경 파일·Patch 흐름과 최종 Service·Controller·MQ·WebSocket 구현을 대조. 조사 3회차: 운영설명서·설치지침서·인터페이스 문서·SQL Schema와 주장·수치·표현 경계를 재검토.
- 현 작업 Tree의 `component.css`, `transaction/list.js`, `transaction/list.html` 3개 미커밋 변경은 사용자의 작업으로 보존하고 Commit 통계·확정 성과에서 제외했다.

- 변경량에는 초기 구현·레거시 삭제·정적 리소스·리팩터링·파일 이동 포함 → 생산성 지표 아님, 기능 범위·반복 개선 밀도의 보조 근거로만 사용.

##### 1.1 전체 커밋 감사

| 감사 항목 | 확인 결과 |
|---|---|
| 커밋 메타데이터 | 본인 211건의 날짜·Author·변경 경로를 재집계; 전체 제품 5개 저장소 543건의 저장소별 Author 분포와 역할 경계를 확인 |
| 메시지 분류 | 신규 기능 53, 수정 82, 리팩터링 29, 운영·설정 19건 |
| 변경 경로 분류 | Host·Memory 105, Dashboard 80, Script·Application 51, Group 31, Transaction 30, Settings 27, User 24, 메시징·실시간 21건 |
| Patch 심층 확인 | Login `5fd57dd`, Group `4419dfa`, Dashboard `01fe1b1`, Host API V2 `c1da992`, 변경분 저장 `df79da4`, Script MQ `fb12495`, 일괄 실행 `bd4e635`, InitFail `c1600e6`, Flexible/Fixed `1bcc12d`·`66546c8`의 변경 파일과 최종 구현을 재대조 |
| 현재 Code 교차검증 | Group 삭제 방어, Group·Host 변경 MQ, 변경 필드만 저장, Demotion 별도 제어, ActiveMQ→WebSocket 전달, Session 동시성 구조 |

- 분류는 다중 집계라 합계 ≠ 211. 경로·Patch 병행 확인으로 "UI 수정" 커밋 내 Service·Mapper·MQ 변경도 포착.
- 감사 시점 `component.css`, Transaction 목록 JavaScript·HTML 미커밋 변경은 사용자 작업으로 보존, 통계·성과 판단에서 제외.

##### 1.2 3회차 교차 검수의 판정 경계

1. **Git**: `orchestrator` 336건 중 본인 Email 211건(4월 38·5월 131·6월 36·7월 6). 나머지 저장소 207건은 본인 Commit으로 귀속하지 않는다. Commit은 기능 이력의 추적 수단이며 생산성 수치가 아니다.
2. **현재 코드**: `HostService.java`가 Host 변경·Demotion·Script 요청의 현행 구현이다. 5월 `HostServiceV2.java`와 `HostControllerV2.java`는 전환 과정의 역사적 근거이며 최종 파일로 소개하지 않는다. `e131efb`에서 `/api/v2/host`가 `/api/host`로 적용된 이력을 확인했다.
3. **AOP**: `TransactionLogAop.java`는 존재하지만 현재 `ActiveMqService.java`의 `@TransactionLog`는 “적용 보류” 주석 상태이며 다른 활성 사용처가 확인되지 않는다. AOP 운영 적용 성과로 쓰지 않는다.
4. **문서**: 2025-07-07 운영설명서의 4개 모듈·ActiveMQ JSON 흐름과 인터페이스 문서의 `REQ_REGISTER`, `REQ_CONFIGURE`, `RES_INITIALIZE` 등 메시지 계약은 제품 기능의 근거다. 사용자는 운영설명서·설치지침서의 직접 작성을 확인했다. 인터페이스 문서는 개발 참고용이며 운영 효과는 미측정이다.
5. **검증 범위**: `orchestrator`에는 기본 애플리케이션 테스트 파일 1개가 있으나 기능별 실행 결과나 고객 현장 효과를 입증할 자료는 이번 조사에서 확인하지 못했다. 코드 존재와 실사용·성능 개선을 분리한다.

##### 1.3 구현 진화를 보여 주는 대형 변경

| Hash | 변경 규모 | 의미 |
|---|---:|---|
| `5fd57dd` | 19개 파일, +418/-29 | 로그인 API·화면, 인증 진입 흐름 |
| `4419dfa` | 13개 파일, +344 | Group Domain Controller–Service–Mapper–UI 골격 |
| `40a057a` | 18개 파일, +781/-25 | Host 상세, Memory·장치 정보 화면 |
| `01fe1b1` | 28개 파일, +3,166/-1,639 | Dashboard 전면 구현·재구성 |
| `c1da992` | 34개 파일, +1,245/-1,453 | Host API V2 전환, 계층 재정비 |
| `8802fe3` | 17개 파일, +941/-198 | CMM-D Dashboard 객체·상태 관리 구조 개선 |
| `df79da4` | 8개 파일, +235/-110 | Host 변경분만 저장, Demotion 제어 분리 |

- 흐름: 초기 골격 → 도메인 확장 → 제품 유형 통합 → 운영 제약·실시간 상태 보강 (단발성 CRUD 아님).

#### 2. 제품·시스템 맥락

분산 CXL 메모리 자원을 중앙 제어·관찰하는 관리 시스템. 운영설명서 기준 4개 모듈이 ActiveMQ 기반 JSON 메시지 교환.

| 모듈 | 역할 |
|---|---|
| `CXL-agent` | Host별 시스템·CXL 메모리, DAX 장치, 실행 애플리케이션 관리 |
| `CXL-orchestrator` | 관리자 웹 콘솔·관리 API (본인 담당) |
| `CXL-controlplane` | Host 제어 요청 중계·제어 흐름 조정 |
| `CXL-resourcemgr` | Host 리소스 정보 수집·관리 |

운영 흐름: 로그인 → Agent 연결 시 Host·메모리·DAX·CXL 유형 등록 → Group/Host 조회·수정 → CXL 메모리 할당·Demotion·NUMA balancing 제어 → Host/Group 단위 스크립트 실행·중지 → 요청·응답 Transaction 기록 → Dashboard·알림 실시간 확인.

운영설명서 추가 확인 규칙 (UI 구현이 운영 시나리오·메시지 계약과 연결됨을 뒷받침):

- Dashboard WebSocket 실시간 갱신, CMM-D는 Group 단위·CMM-B는 Host 단위 모니터링
- Host 등록, 자동 메모리 조정, Script 실행 결과 Toast 알림
- Settings에서 리소스 전송 주기·Transaction 보존 기간 관리
- Transaction 상세에서 원본 JSON·실행 세부 정보 확인
- 인터페이스 문서: 초기화, 리소스, 메모리 설정, Script 실행·중지, UI 응답 요청·응답 메시지 구조 정의

#### 3. 기술 스택

Java 21, Spring Boot 3.4.1, Spring MVC, Thymeleaf, Spring AOP, Spring WebSocket, MyBatis 3.0.3, PostgreSQL, 사내 메시징 라이브러리 `mqlib`, ActiveMQ, Springdoc OpenAPI, JavaScript·HTML·CSS, Log4j2.

- 수직 범위 담당: Controller, Service, Mapper, DTO, 메시지 모델, WebSocket, 프론트엔드 상태 처리.

#### 4. 수행 범위

##### 4.1 인증·기본 관리 화면 초기 구축

2025-04-08 로그인 API·페이지 → Group, Host, Settings, Script, Transaction, Dashboard 순으로 기본 흐름 구축.

- Login API·Page, 공통 레이아웃·GNB/TNB·모달·페이지 구조
- 로그인 상태·페이지 접근 흐름, 라우팅 보호 로직 검토·적용
- 로그인 페이지 WebSocket 연결 제외 (인증 전 연결 부작용 방지)
- 근거: `5fd57dd` Login Page·API, `bb2a342` 수정, `e5965de` 리팩터링·JS 객체화, `6960092` 소켓 연결 제외

##### 4.2 Group 관리

Host를 업무 목적·물리 위치·CXL 유형별로 묶어 관리.

- 목록·상세·등록·수정 API·화면, 검색·페이지네이션, 이전 페이지·검색 상태 기억
- 기본 Group 지정(변경 시 기존 기본값 해제), 이름 중복 검사
- Local/Remote CXL 유형 구분, CMM 유형별 목록 노출 조정
- Host 포함 Group 삭제 불가 제약
- Group 단위 Run/Stop Script 요청
- 근거: `4419dfa` Group API, `8488877` List, `7240128` Add, `e762159` Modify, `c80fbb7` 중복 검사·페이지네이션, `b735ccc` 삭제 제한, `bd4e635` Group별 Run/Stop Script

##### 4.3 Host 등록·조회·삭제·상태 관리

Agent 수신 시스템 메모리·CXL 메모리·DAX 상태·CXL 유형·리소스 상태를 목록·상세로 연결.

- Host List·Info·API, Host API V2 전환·서비스 구조 개선
- 검색 조건: Group, 이름, IP, 상태, CXL 유형, Demotion
- 상태값 ON/OFF/FAIL/InitFail 처리, 메모리 사용률·NUMA/DAX 표시
- Host 이름 등 변경 데이터만 저장
- 삭제 버튼·API, 삭제 요청을 Control Plane용 변경 메시지로 전송, Dashboard에서 삭제 Host 제거
- 상세 → Back 시 이전 화면 상태 복원
- 근거: `c879eee` List·API, `803dc67` List Page, `40a057a` Info, `3161006` API V2, `4d158a7` 삭제 버튼·API, `b97665d` Dashboard B/D Host 제거, `5a7c6db` 검색 조건
- API V2는 `c1da992`에서 신규 계층으로 도입되고 `e131efb`에서 기존 `/api/host` 경로에 적용된 **전환 이력**이다. 현재 주요 구현은 `domain/host/service/HostService.java`와 `domain/host/controller/HostController.java`에 있다.

##### 4.4 CXL 메모리·Demotion 제어

UI·검증·메시지 변환 병행.

- CXL 메모리 최대·최소 사용 임계치, 할당·해제 단위, CXL Memory Size 설정
- 개별·복수 Host Demotion 설정
- 인터페이스 값 처리: `demotion_enabled`, NUMA balancing, online/offline block
- 변경분만 저장·전송
- Host·Demotion 상태별 입력 가능 여부·표시값 분기, Demotion 비활성 시 Flexible/Fixed 선택 로직
- Demotion 활성 여부에 따라 Dashboard 할당량/전체량 표시
- 유효성 검사: 짝수 단위, 범위, Host 이름
- 근거: `0170ac3` Set Memory, `f47774c` 새 메모리 규칙·Host 정보, `df79da4` 변경분 저장·Demotion 변경, `788c7c1` 리팩터링·검증, `70af00e` 전체 메모리 설정 변경, `59a49e5`·`1bcc12d` Flexible/Fixed 로직, `ff1bacf` Demotion 상태별 Dashboard 메모리 값

##### 4.5 애플리케이션·스크립트 생명주기

- Script API·목록·등록·수정 (실행/중지 스크립트, 설명, 이름)
- Host별 Run/Stop App 화면, Group 단위 일괄 Run/Stop
- 실행 중 Host 수·Running Apps 표시
- 제약: 실행 중 스크립트 삭제 방지, 이미 실행 중 Host 제외, 상태별 Run/Stop 제약
- Script Modify 요청 MQ 전송, Control Plane 요청·응답 메시지 처리, 결과 알림·Transaction 연결
- 근거: `6d525f3` Script API, `d7deaf6` Add, `bc32f11` List, `4181035` Run Script, `cee97a2` Stop App, `fb12495` Modify MQ Send, `2347199` 삭제 방지, `437fcfe` Group Run Script 버튼

##### 4.6 Transaction 추적·감사

Host 등록·삭제, 메모리 변경, 스크립트 실행 요청·응답 추적.

- 날짜 범위·Host 검색, 목록·상세, 페이지네이션·DateTimePicker
- 날짜·시간 직접 입력 방지·포맷 검증, 성공/실패 행 디자인 구분
- 상세 원본 JSON·실행 과정 표시, N/A·null 방어
- AOP 기반 Transaction Log 검토·구현 시도
- 근거: `ef9df02` 검색, `4f798ca` History, `04e9bd0`·`017b028` AOP Log, `d5831c3` DateTimePicker 검증, `022cb4b` 실패 행, `83e9595` N/A 처리
- **경계**: `154c3bb` 적용 보류 이력과 현재 `ActiveMqService.java`의 주석 처리된 `@TransactionLog`를 확인했다. AOP 클래스 자체는 존재하므로 “AOP 기반 감사 로그 프로토타입을 구현·검토했다”까지만 표현한다. Transaction 목록·상세 기능과 AOP 자동 기록은 구별한다.

##### 4.7 CMM-D·CMM-B·ALL 제품 변형

단일 코드베이스를 설치 유형별로 동작.

- CMM Type 전역 설정, 메뉴·Fragment·Dashboard·Group·Host·Apps·Transaction 노출 분기
- 유형별 Route 접근·이동 대상 조정, CMM-D/B 데이터 의미 차이 UI 반영
- 유형별 Dashboard 표시 오류·초기화 실패 수정, 공통 TNB·DTNB 통일
- 근거: `2e5816c` 전역 변수화, `de0e94b` Dashboard·Fragment, `f9dfd46` Group List, `0606a0a` Host List, `6b15f13` Apps List, `9787b1f` Transaction List, `fcebceb` TNB·DTNB 콤보박스·알림·로그아웃 통일

##### 4.8 실시간 Dashboard

- CMM-D Dashboard 초기 구현·다단계 디자인 개선, CMM-B Dashboard 유지·개선
- WebSocket 리소스·알림 수신
- 전체 CXL 메모리·Host별 할당량 도넛 차트, 시스템/CXL 메모리 라인 차트, 최대 임계치 경고 색상
- 실행 App/Process 모달, Host 정렬·필터·선택·Top 데이터
- Host 제거, null 보정, InitFail 반영, 차트 크기·막대 방향·스크롤 오류 수정
- 근거: `01fe1b1` CMM-D Dashboard, `a461fb9` CMM-D 전체 수정, `b6fcea2` 리팩터링·Socket Test Controller, `d7081ea` 작은 사용량 막대 방향 수정, `c1600e6` 유형별 오류·InitFail

##### 4.9 공통 품질·유지보수성

- 화면별 JavaScript 객체화, 초기화·이벤트 바인딩 정리
- Map 반환 → DTO (응답 계약 명시화)
- 이전 페이지·검색 상태 기억, 공통 페이지네이션 플러그인·UI 패턴 통합
- null/N/A 보정, 상태별 오류 모달, 중복·날짜·숫자·임계치 검증
- 미사용 Class·JS 이벤트 제거, 패키지 정리·구 버전 코드 제거
- SLF4J → Log4j2 전환
- 2025-05-24 하루에 Login, Group, Host List/Info, Run/Stop App, Set Memory, Settings, Transaction 연속 리팩터링 (JS 구조·화면 복귀 동작 통일)

##### 4.10 단계별 타임라인

| 단계 | 기간 | 주요 내용 |
|---|---|---|
| 1 골격·핵심 CRUD | 2025-04 | 로그인·레이아웃, Group CRUD, Host API·목록·상세, Settings, Script 등록·실행·중지, Transaction, CMM-D Dashboard — 초기 10일 내 전체 흐름 첫 버전 |
| 2 메시징·업무 규칙 | 2025-05 | Host API V2, 메모리·Demotion 규칙, Group 기본값·중복·삭제 제약, Script Modify/Run/Stop MQ, Host 삭제 Control Plane 요청, 화면 리팩터링·상태 기억, CMM Type 전역화, Dashboard UX |
| 3 유형 통합·안정화 | 2025-06~07 | CMM-D/B/ALL 분기, Group 일괄 Script, Dashboard Host 제거·InitFail, TNB·DTNB 공통화, Log4j2, 운영 매뉴얼·설치 지침 보완, Demotion 비활성 Fixed/Flexible 정책 |

##### 4.11 Host 목록 자동 갱신과 작업 선택 상태 보존

- 문제: Host 상태를 주기적으로 다시 조회할 때 목록 DOM을 재구성하면 사용자가 선택한 Host가 해제되어 Demotion 설정·삭제 등 일괄 작업 대상을 다시 선택해야 한다.
- 구현 흐름: `fdb3986`에서 Host 목록 갱신 토글과 조회 주기를 추가했다. 현재 `static/js/host/list.js`는 토글이 켜지면 3초마다 `srchData(false, true)`를 호출해 현재 검색 조건과 페이지를 유지한다. 페이지를 떠날 때 interval을 해제한다.
- 후속 수정: `ce8471a`에서 자동 갱신 전 체크된 행의 `hostId`와 헤더 체크 상태를 저장하고 새 목록 렌더링 후 동일 `hostId`를 다시 체크한다. 수동 검색 때는 이전 헤더 선택을 초기화한다.
- 확인 가능한 결과: 자동 갱신과 다중 선택을 함께 사용할 수 있는 UI 동작이 코드에 있다. 실제 운영 시간 절감 수치는 확인되지 않았다. 근거: `host/list.js`의 `loadData`, `srchData`, `toggleSwitchChecked` 처리와 두 Commit의 Patch.

##### 4.12 Settings 변경의 DB·메시지 동기화

- `bd2a29a`에서 Settings API, `04dae9e`에서 Settings 화면을 도입했다. 화면은 최대·최소 메모리, 조정 단위, 알림 표시, 리소스 수집·전송 주기, Transaction 보존일 설정을 다룬다.
- 현재 `domain/settings/service/SettingsService.java`는 변경값을 DAO에 저장한 뒤 `REQ_CHANGE`와 `ChangeDataType.settings` 메시지를 `Q_CONTROL`로 보낸다. 이는 설정 화면의 값이 Control Plane의 동작에 전달되는 연결점이다.
- `static/js/settings/settings.js`는 숫자 입력의 지수 표기 방지, 최대·최소 메모리와 수집·전송 주기 등의 유효성 검사, 저장 전 확인 모달, 오류 응답을 처리한다. `2c75f94`는 리소스 데이터 전송 주기 검증 수정의 대표 이력이다.
- 경계: DB 저장과 MQ 전송의 코드 순서는 확인되지만, 분산 트랜잭션이나 모든 Agent에 대한 설정 적용 성공률은 입증되지 않았다.

##### 4.13 인증 전 연결과 화면 상태 관리

- `f3a4e77`은 공통 JS의 페이지 이동·로그인 상태 보호 흐름을 수정한 이력이다. `6960092`에서는 로그인 화면에 불필요한 WebSocket 연결을 열지 않도록 공통 연결 조건을 조정했다.
- Host·Transaction 화면은 검색 조건과 페이지 상태를 `sessionStorage` 기반 공통 유틸리티로 보존해 상세 화면에서 돌아올 때 조회 맥락을 이어간다. Transaction 목록은 날짜·시간 입력과 포맷을 별도로 검증한다.
- 경계: 프론트엔드 라우팅 보호와 로그인 화면 연결 제어를 확인한 것이며, 서버 전체의 인증·권한 설계를 단독 구현했다는 뜻은 아니다.

#### 5. 업무 성과

| 성과 | 내용·의미 |
|---|---|
| 하나의 운영 흐름 | 로그인 → Group/Host 조회 → 메모리·스크립트 제어 → MQ 전달 → 결과 알림 → Transaction 조회. 서버 직접 접속 없이 웹 제어, Group 일괄 제어로 반복 작업 감소 기반, Transaction·알림으로 장애 추적 |
| 3개 제품 유형 지원 | §4.7. 유형별 별도 프로젝트 중복 회피, 설치 설정별 기능 노출, 분기 누락 반복 수정으로 변형 규칙 안정화 |
| 상태·검증·오류 처리 | §4.2~4.6 제약(Host 있는 Group 삭제 방지, 실행 중 Script 삭제 방지, 실행 중 Host 제외, 날짜·숫자·임계치 검증, ON/OFF/FAIL/InitFail, null/N/A 방어, 실패 Transaction 강조) |
| 실시간 가시성 | §4.8. 상태 확인·장애 대응 시간 단축 기반 — 실제 감소 시간 자료 없음, 정량 표현 금지 |
| 문서화 | 본인 직접 작성 확인: 운영설명서(4개 모듈, ActiveMQ 흐름, Dashboard·Group·Host·Apps·Settings·Transaction·FAQ), 설치지침서(환경 요구사항·패키지·Server/Agent 설치·설정·실행·버전 확인). 업무 티켓 159·160과도 부합. §16~18에 상세 범위 추가 |

#### 6. 본인 기여도 판단

| 매우 높음 | 협업 영역 (본인 단독 아님) |
|---|---|
| Orchestrator V2 웹 콘솔 초기 골격 | Agent, Control Plane, Resource Manager 전체 구현 |
| Login, Group, Host, Settings, Script, Transaction API·화면 | ActiveMQ 인프라 자체 설계 |
| CMM-D Dashboard 초기 개발·다수 개선 | CXL 하드웨어·커널 기능 자체 구현 |
| Host 메모리·Demotion·Script 제어 UI | 제품 전체 아키텍처 단독 설계 |
| CMM-D/B/ALL 유형별 노출 로직, 공통 리팩터링·운영 UX | |

- 근거: 짧은 기간 211건 본인 커밋이 최초 구현부터 후속 오류 수정까지 연속.
- 안전한 표현: "Orchestrator 웹 관리 콘솔을 중심으로 Agent·Control Plane·Resource Manager 연동 기능을 개발".

#### 7. 코드 변경 집중 영역

| 변경 횟수 | 파일 | 해석 |
|---:|---|---|
| 44 | `application.properties` | 제품 유형·메시징·운영 설정 조정 |
| 30 | `dashboard-d.js` | CMM-D 실시간 상태·차트·필터 |
| 30 | `host/info.js` | Host 상세, 메모리·Demotion·Script 제어 |
| 29 | `dashboard-b.js` | CMM-B Dashboard |
| 28 | `host/list.js` | 검색·삭제·상태·유형별 표시 |
| 26 | `host/list.html` | Host 목록 UI |
| 26 | `style.css` | 운영 화면 디자인·상태 표현 |
| 23 | `HostServiceV2.java` | 전환기 Host 비즈니스 로직 V2 변경 이력; 현행 파일은 `HostService.java` |
| 20 | `common/utilz.js` | 공통 프론트엔드 기능 |
| 18 | `transaction/list.js` | Transaction 검색·상태·페이지 |
| 15 | `ScriptMapper.xml` | Script 데이터 처리 |
| 15 | `GroupService.java` | Group 제약·비즈니스 로직 |

#### 8. 이력서·자기소개서용 사실

- Java 21·Spring Boot 기반 CXL 관리 콘솔에서 인증, Group, Host, Settings, Script, Transaction API와 화면 개발
- ActiveMQ 기반 Control Plane 연동으로 Host 삭제, 메모리 설정, Group 단위 Script 실행·중지 기능 구현
- WebSocket Dashboard에서 CXL/System Memory, Host 상태, 실행 Process, 알림을 실시간 시각화
- CMM-D·CMM-B·ALL 제품 유형을 전역 설정과 공통 UI로 분리
- 2025-04~07 기간 해당 애플리케이션에 본인 커밋 211건
- 설치·운영 매뉴얼 직접 작성(사용자 확인); 제품 운영 절차와 배포·환경 구성 절차 문서화

#### 9. 추가 확보 필요 정량 정보

관리 Host·Group 수, 동시 연결 Agent 수, WebSocket 갱신 주기·평균 메시지량, Group 일괄 실행으로 줄어든 단계·시간, 본인 최종 소유 API·화면 수, 고객·사내 시험 결과·결함 건수, CMM-D/B/ALL별 배포 수.

#### 10. 대표 커밋 증거

| 날짜 | Hash | 내용 |
|---|---|---|
| 2025-04-08 | `5fd57dd` | Login Page·API |
| 2025-04-09 | `4419dfa` | Group API |
| 2025-04-14 | `c879eee` | Host List·Host API |
| 2025-04-16 | `6d525f3` | Script API |
| 2025-04-17 | `ef9df02` | Transaction 검색 |
| 2025-04-18 | `01fe1b1` | CMM-D Dashboard |
| 2025-05-16 | `c80fbb7` | Group 중복 검사·페이지네이션 |
| 2025-05-18 | `3161006` | Host API V2 전환 |
| 2025-05-24 | `be0d3ed` | Host Info 리팩터링·JS 객체화 |
| 2025-05-27 | `fb12495` | Script Modify MQ 전송 |
| 2025-05-30 | `4d158a7` | Host 삭제 API |
| 2025-06-01 | `de0e94b` | CMM Type별 Dashboard·Fragment |
| 2025-06-02 | `bd4e635` | Group별 Run/Stop Script |
| 2025-06-02 | `fe26eb5` | Log4j2 전환 |
| 2025-06-26 | `c1600e6` | Dashboard 유형 오류·InitFail |
| 2025-07-03 | `1bcc12d` | Demotion 비활성 상태 선택 로직 |
| 2025-06-30 | `fdb3986` | Host 목록 자동 갱신 토글·주기 도입 |
| 2025-07-02 | `ce8471a` | 자동 갱신 시 Host 선택 체크 상태 복원 |
| 2025-05-29 | `f3a4e77` | 공통 화면 라우팅 보호와 UI 상태 흐름 수정 |
| 2025-06-10 | `6960092` | 로그인 화면 WebSocket 연결 제외 |

#### 11. 재조사 보완: 모듈 간 책임과 실제 메시지 경로

| 단계 | 확인된 구현 | 경력 표현 범위 |
|---|---|---|
| 웹 요청 | `orchestrator/.../domain/host/controller/HostController.java`가 Host 조회·변경·삭제, 메모리·Demotion, 개별·복수·전체 Script 요청 API를 제공 | 본인 Orchestrator 기능 기여 |
| 제어 요청 작성 | `domain/host/service/HostService.java`가 `REQ_CHANGE`, `REQ_UI_CONFIGURE`, `REQ_UI_SCRIPT`, `REQ_UI_STOP_SCRIPT`를 조립하고 MQ로 전송 | 웹/API와 메시지 계약의 연동 개발 |
| 그룹·스크립트 | `domain/group/service/GroupService.java`가 Host 포함 Group 삭제를 차단하고 Group 변경을 `REQ_CHANGE`로 전달; `domain/apps/service/ScriptService.java`가 Script 변경 요청을 전송 | 본인 Commit과 현행 구현에 연결되는 관리 기능 |
| 제어 처리 | 별도 `controlplane` 저장소의 `ReqChangeProcessor`, `ReqUiConfigureProcessor`, `ReqUiScriptProcessor` 등이 메시지를 소비 | 다른 작성자의 구현; 협업 접점 |
| 장비·리소스 | 별도 `agent`의 C 핸들러와 `resourcemgr`의 Scheduler·Service가 실행·수집·상태 갱신 수행 | 다른 작성자의 구현; 제품 맥락 |
| 상태 표시 | Orchestrator `common/messagequeue/ActiveMqService.java`가 수신 데이터를 `socket/WebSocketServer.java`로 broadcast하고 Dashboard가 상태를 표시 | Orchestrator 측 실시간 표시 연동 |

`mqlib`의 `CommandType`, DTO 및 ActiveMQ Client는 위 서비스들이 공유하는 메시지 계약이다. 운영설명서의 “4개 핵심 모듈”에 이 라이브러리를 다섯 번째 제품 모듈로 추가하지 않는다. DB Schema의 `cmm-b`·`cmm-d`·`all`, `initFail`, Transaction command enum은 제품 유형·상태·이력 모델의 보조 근거다.

#### 12. 근거별 확정·보류 항목

| 항목 | 확정 가능한 사실 | 보류할 주장 |
|---|---|---|
| 개인 기여 | `orchestrator`의 본인 Author 211개 Commit, 주요 API·UI·MQ 변경 Patch와 현행 코드 | Agent·Control Plane·Resource Manager·MQ Library 단독 설계·개발 |
| 제품 통합 | 웹 콘솔에서 MQ 제어 요청을 만들고 수신 상태를 WebSocket으로 표시하는 코드 | 전체 메시지 인프라·하드웨어 제어 로직의 단독 구현 |
| 안정화 | Group 삭제 제약, 상태값·null 처리, Demotion 정책·제품 유형 분기, Host API 전환의 변경 이력 | 결함률·장애 시간·운영 비용의 정량 감소 |
| 검증 | 기본 테스트 파일, 운영·설치 설명서, 인터페이스 계약, SQL Schema 존재 | 자동 테스트 통과율·현장 배포 수·고객 성과 |

#### 13. 다음 검수자가 확인할 경로

- Git: 각 5개 저장소에서 `git log --all --format='%ae'`로 Author 분포, Orchestrator에서 `--author='jspark@4net.co.kr'`로 211개 Commit 및 대표 Hash의 `git show` 확인.
- 구현: `orchestrator/cxl-orchestrator-v2/src/main/java/com/fornet/cxl/domain/{host,group,apps,dashboard,transaction}`, `common/messagequeue`, `socket`; 상대 모듈의 `processor`, `service`, `scheduler`; `mqlib/.../type/CommandType.java`.
- 계약: `00. meta/00. cxl - development/package/20250707` 운영·설치 DOCX, `00. meta/01. cxl - 참고문서/인터페이스문서.docx`, `00. meta/00. cxl - development/database/database-schema.sql`.
- 운영설명서·설치지침서 직접 작성은 사용자 확인으로 확정. 배포 환경·고객 검수, 처리량·응답 시간, 자동 테스트 실행 결과는 미확인이다. 확인 전까지 이력서 성과 수치로 추가하지 않는다.

##### 2026-11-21 패키지와 문서의 출시 준비 근거

- `01. cxl/00. meta/00. cxl - development/package/20250707/`에는 버전 `20250707-1`의 운영설명서·설치지침서와 `CXL_ENABLER_20250707-1.tar.gz`가 함께 있다. 압축 묶음은 25개 항목으로 구성되어 설치 설정·스크립트·SQL 등의 자산을 포함한다. 직접 작성한 두 DOCX의 마지막 수정자 메타데이터도 박종성으로 기록돼 있다.
- 이는 **버전이 붙은 설치 패키지와 인수용 설명 자료의 준비**를 뒷받침한다. 압축 파일 존재만으로 고객 환경 설치 성공·납품 승인·배포 대수를 주장하지 않는다. 문서 작성과 패키지 내부 스크립트 전체 구현도 별개다.

#### 14. 기능별 변경 연쇄: 최초 구현 이후 무엇을 고쳤는가

이 표는 단순 기능 목록이 아니라 최초 구현 후 발견한 표현·상태·제약 문제와 후속 수정을 남긴다. Commit 제목은 변경 의도를 보여주며, 최종 동작의 근거는 앞 절의 현재 Source와 대조한다.

| 기능 | 최초·전환 Commit | 후속 Commit | 확인한 변화·의미 |
|---|---|---|---|
| Group | `4419dfa`·`8488877`·`7240128`·`e762159` | `ba913bd`·`5ed3d24`·`c80fbb7`·`b735ccc` | CRUD·목록에서 기본 Group 설정, 중복 검사, 페이지네이션, Host 포함 시 삭제 금지까지 업무 규칙 확장 |
| Host 목록 | `c879eee`·`803dc67` | `9039c3d`·`4f1b7e1`·`5a7c6db`·`fdb3986`·`ce8471a` | CXL 유형 매핑 출처 수정, 검색 조건 추가, 자동 갱신 중 선택 상태 보존 |
| Host 상세·메모리 | `40a057a`·`0170ac3` | `df79da4`·`f47774c`·`788c7c1`·`70af00e` | 전체 값 재전송 대신 변경분 처리, 새 메모리 규칙, 입력 검증 및 Demotion 비활성 정책 보완 |
| Host API 계층 | `c1da992`·`3161006` | `e131efb` | V2를 병행 도입한 뒤 `/api/host`로 통합; 전환 과정과 현행 API를 구별해야 함 |
| Script | `6d525f3`·`d7deaf6`·`4181035` | `fb12495`·`2347199`·`da62e99`·`bd4e635` | 등록·조회·실행에서 변경 MQ 전송, 실행 중 삭제 제약, 실행 상태 조회 방식, Group 단위 명령까지 확장 |
| Dashboard D | `01fe1b1` | `8802fe3`·`8d0bec3`·`ee63efb`·`c1600e6` | 초기 화면 후 객체화, 정렬·표시량·상태 분기 및 `InitFail` 처리 |
| Dashboard B | 초기 구현·유지보수 | `02d6cbc`·`16ff6e7`·`d7081ea`·`ff1bacf` | API·차트 표시와 작은 사용량 막대, Demotion 상태별 CXL 총량/할당량 표시 수정 |
| Transaction | `ef9df02`·`4f798ca` | `d5831c3`·`022cb4b`·`83e9595` | 검색·이력 화면에서 날짜 입력 검증, 실패 행 구분, 비어 있는 상세값 표시 보완 |
| Settings | `bd2a29a`·`04dae9e` | `343aa6d`·`2c75f94` | 설정 화면·API에서 JS 객체화와 전송 주기 검증, 변경 후 Control Plane 통지 흐름 보완 |
| 제품 유형 | `2e5816c` | `de0e94b`·`f9dfd46`·`0606a0a`·`9787b1f`·`c1600e6` | CMM-D/B/ALL에 맞춰 Dashboard, Group, Host, Transaction의 표시·이동 정책 조정 |

##### 14.1 Group 변경의 데이터·메시지 경계

`GroupService.java`는 기본 Group과 일반 Group 변경 시 `REQ_CHANGE`를 `Q_CONTROL`로 전송한다. 삭제는 먼저 해당 Group에 속한 Host 목록을 읽고 비어 있지 않으면 `GROUP_DELETE_FAIL_HOST_EXIST` 예외를 반환한다. 이 순서는 화면에서 버튼만 숨기는 제약보다 서버 계층에서 업무 규칙을 적용했다는 점에서 중요하다. 단, Group 관련 Control Plane 수신 처리 자체는 별도 저장소의 다른 Author가 구현했다.

##### 14.2 Host 변경과 비동기 제어 경계

현재 `HostService.java`에는 `updateHost`, `deleteHost`, `updateHostInfo`, `setGroup`, `setDemotion`, `setMemory`가 분리되어 있다. Host 정보 저장에서는 DB 변경과 `REQ_CHANGE` 전달을, 메모리·Demotion 제어에서는 `REQ_UI_CONFIGURE` 메시지를 조립한다. 변경 대상이 하나인지 목록인지에 따라 반복 전송과 요청 값 검증이 달라져 화면·Service·메시지 DTO의 동시 수정이 필요했다. `c1da992`→`df79da4`→`e131efb`는 API 계층 도입, 변경분 처리, 경로 통합 순서의 대표 연쇄다.

##### 14.3 Script 일괄 명령의 대상 선정

`HostService.java`에는 개별 Host의 Run/Stop 외에도 Host 목록을 순회하는 `runScripts`·`stopScripts`와 Group 목록에서 Host를 찾아 실행하는 `allRunScript`·`allStopScript`가 있다. 실행 요청은 대상 Host와 Script 정보를 검토해 `REQ_UI_SCRIPT` 메시지를, 중지 요청은 `REQ_UI_STOP_SCRIPT` 메시지를 작성한다. 이미 실행 중인 Script의 중복 실행과 실행 중 Script 삭제 방지는 별도 확인 경로에 둔다. `bd4e635`와 `437fcfe`는 Group을 작업 단위로 확장한 변경이고, `6c0a439`는 기존 DB 직접 조작을 주석 처리하고 Control Plane으로 요청을 보내는 방향을 드러내는 이력이다.

##### 14.4 Dashboard의 상태·수치 해석

Dashboard는 Host 상태, 실행 App, CXL/System Memory를 보여준다. `c1600e6`에서 `InitFail` 표시를 추가했고 `ff1bacf`에서는 Demotion이 켜진 경우 할당된 CXL 용량, 꺼진 경우 총 CXL 용량을 표시하도록 값을 나눴다. 따라서 차트에 나타난 수치를 조건 없이 “CXL 메모리 용량” 하나로 설명하면 잘못될 수 있다. `d7081ea`의 작은 사용량 막대 방향, `16ff6e7`의 임계값·차트 렌더링은 데이터 해석을 방해하는 UI 오류를 고친 사례다. 사용자의 실제 장애 대응 시간 감소는 측정하지 않았다.

##### 14.5 날짜·상태·화면 복귀의 운영 UX

Transaction 목록은 `TransactionService.java`와 DAO로 날짜 범위·Host·Event 조건에 맞는 결과를 읽고, 프론트엔드는 DateTimePicker 입력과 검색 상태 복원을 관리한다. `d5831c3`, `7b625ab`은 날짜·시간의 수동 문자 입력과 포맷 문제, `022cb4b`는 실패 결과 행 식별, `83e9595`는 null/N/A 방어를 다룬다. `58361bc`, `283bfb0`, `4f0dbf3`은 Group·Host·Transaction 화면에서 이전 검색과 페이지 맥락을 유지한 연쇄다. 이들은 신규 기능 구현 후 실제 관리 화면의 반복 사용성을 높인 후속 작업으로 분류한다.

#### 15. 아직 분리해 보관해야 할 원본 근거

- 개인 Commit은 작성자 식별과 변경 파일까지 추적할 수 있지만, 모든 설계 결정의 최초 제안자나 코드 리뷰 담당자는 Git만으로 확인되지 않는다.
- `agent` 저장소는 C 소스와 번들 라이브러리가 혼재한다. 번들된 헤더·라이브러리 파일 수를 제품 자체 코드량이나 본인 작성량으로 쓰지 않는다.
- 2025-07-07 운영·설치 DOCX는 최종 사용 절차의 근거이며 사용자는 두 문서의 직접 작성을 확인했다. 문서에 나오는 설치 스크립트·Agent·Control Plane 구현까지 개인 저작으로 확대하지 않는다.
- DB Schema의 Enum·Table은 제품 데이터 모델을 보조하지만, 운영 DB의 실제 레코드 수·Host 수·Transaction 규모를 증명하지 않는다.
- 현재 미커밋된 Transaction JS·HTML과 CSS는 문서의 본인 Git Commit 통계에 들어가지 않는다. 해당 변경의 작성자·완료 여부는 확정하지 않는다.

#### 16. 직접 작성한 운영설명서: 화면에서 장애 대응까지

원본: `01. cxl/00. meta/00. cxl - development/package/20250707/CXL_ENABLER_운영설명서_20250707-1.docx` (2025-07-07 판). 사용자가 직접 작성했다고 확인했다. 본문은 소개·운영·FAQ의 3장으로 구성되며, 관리자 화면의 기능과 Server·Agent 운영 절차를 함께 담는다. 원본 업무 티켓 159번도 운영 매뉴얼 작성 작업을 가리킨다.

##### 16.1 사용자가 따라가는 업무 흐름

- 소개 장은 CXL Agent·Orchestrator·Control Plane·Resource Manager의 역할과 ActiveMQ 기반 JSON 메시지 교환, Agent 등록·메모리 모니터링·설정 변경·원격 Script 실행을 설명한다.
- 운영 장은 로그인과 상단 페이지 이동·알림·로그아웃에서 시작해 CMM-B/D Dashboard, Group, Host, Apps, Settings, Transaction으로 이어진다. 각 기능의 입력 항목과 화면 이동, 오류 화면을 그림·표와 함께 기술했다.
- CMM-B의 Host별 메모리 차트와 Demotion 상태, CMM-D의 Group/Host별 자원 현황과 실행 Process, 실시간 데이터로 자동 정렬되는 화면의 일시 정지 방법을 구분했다.
- Dashboard의 예시 Host 수와 표시 행 수는 문서 화면의 설명값이다. 실제 운영 규모 또는 제품 최대 처리 용량으로 쓰지 않는다.

##### 16.2 Group·Host 운영 제약을 문서화한 내용

- 기본 Group과 일반 Group의 수정·삭제 가능 항목을 나누고, 기본 Group 삭제 불가와 Host가 속한 Group의 삭제 실패 화면을 안내한다.
- Host 목록의 Group·이름·IP·상태·CXL 유형·Demotion 검색과 수동 Reload, 3초 간격 자동 갱신 토글을 설명한다. 개별 Group 변경과 복수 Host Group 변경을 나누고 Mode가 다른 Host를 함께 선택했을 때의 오류도 포함한다.
- Host 삭제에는 UI에서 Host를 제거한 뒤 해당 Agent도 중지해야 한다는 운영상 주의를 붙였다. 화면 조작과 현장 Agent 상태를 함께 다룬 인계 정보다.
- Set Memory는 한 Host만 선택할 수 있다는 제약, Demotion 상태별 Fixed/Flexible 입력 가능 조건, Host 상세의 메모리·NUMA·실행 Process 조회와 중지 방법을 기술한다.
- Apps는 Script 등록·수정 항목, 실행 중인 Host가 있는 Script의 수정 제한, Group 선택 후 소속 Host 전체에 Run·Stop 요청을 보내는 과정을 설명한다.

##### 16.3 설정·감사·FAQ를 통한 추적 가능성

- Settings에는 초기 Host의 메모리 임계값과 조정 단위, 알림 개수·표시 시간, 리소스 정보 전송 주기, Transaction 보존일을 적었다.
- Transaction에는 날짜·Host·ID·Event Type으로 요청과 결과를 찾고 상세 화면에서 동일 Transaction에 묶인 Event와 원본 JSON을 확인하는 방법을 적었다.
- FAQ에는 Server 세 모듈과 Agent의 설정·시작·중지, Agent 데이터 이상 시 중지→UI에서 Host 삭제→재시작 순서의 복구 절차, Script 실행 뒤 시간·Transaction ID 기준 Agent 로그 확인 절차가 있다.
- 이 문서화 경험은 단순 화면 설명을 넘어 설치·운영 담당자가 상태 확인과 원인 추적을 재현할 수 있는 절차 작성으로 표현할 수 있다. 실제 장애 복구 시간 단축은 측정되지 않았다.
- 원문에 포함된 접속 주소, 초기 계정 및 환경별 인증 값은 이 경력 문서에 복제하지 않는다.

#### 17. 직접 작성한 설치지침서: 환경 요구사항부터 버전 확인까지

원본: `01. cxl/00. meta/00. cxl - development/package/20250707/CXL_ENABLER_설치지침서_20250707-1.docx` (2025-07-07 판). 사용자가 직접 작성했다고 확인했고 원본 업무 티켓 160번과 연결된다. 요구사항→패키지→Server 설치→Agent 설치→버전 확인 순서로 정리되어 있다.

##### 17.1 요구사항과 설치 패키지

- 운영체제 대상은 Red Hat Enterprise Linux 9.4 이상이다. 문서는 하드웨어·소프트웨어 요구사항, Server와 Agent의 설치 구성요소를 구분한다.
- 패키지 구성 표에는 Server·Agent RPM, DB 초기화 SQL, PostgreSQL·ActiveMQ 설치 및 설정 스크립트, 설정 파일과 관리자 계정 복구 도구의 역할이 기록돼 있다.
- Java 21, PostgreSQL 16, ActiveMQ와 Agent의 Daxctl 의존성을 설치 단계에 배치했다. 문서 작성 사실을 패키지나 스크립트 전체의 구현 사실로 확대하지 않는다.

##### 17.2 Server 설치와 서비스 확인

- 설치 전 방화벽 확인, Java 설치, 설치 패키지 압축 해제, PostgreSQL·ActiveMQ 구성, CMM-B/D 유형 선택, Server RPM 설치 순서를 그림과 함께 제시했다.
- Control Plane·Resource Manager·Orchestrator 세 모듈의 파일 구성과 `application.properties` 연결 항목을 설명했다. 단일 서버 예시와 분산 배치 시 연결 주소 변경 지점을 구별한다.
- 세 모듈을 각각 서비스 관리 명령으로 시작·확인하는 방법과 모듈별 실행 스크립트로 수동 시작하는 방법을 모두 기록했다.

##### 17.3 Agent 설정과 최종 확인

- Agent의 방화벽·RPM 설치 후 `cxl-agent.conf`에서 Host 식별, Queue 목적지, 로그 수준, Script 실행 경로, LOCAL/REMOTE 메모리 유형, 재등록 대기, 메모리 유형별 구분 설정을 변경하는 법을 표로 설명한다.
- Agent 설정 예시와 서비스 실행·수동 실행 방법을 제시하고 설치 후 버전 확인 절차로 끝낸다. 환경별 주소와 비밀 정보는 이 경력 문서에 옮기지 않는다.
- 문서의 기여도는 제품 설치자가 Server와 Agent를 일관된 순서로 구성·확인할 수 있게 절차를 만든 것이다. 실제 납품·교육·고객 검수 결과는 별도 확인이 필요하다.

#### 18. 인터페이스 문서의 역할

`01. cxl/00. meta/01. cxl - 참고문서/인터페이스문서.docx`는 사용자가 개발 시 참고했다고 확인한 메시지 계약 자료다. Orchestrator의 DTO·MQ 연동에 필요한 타입과 필드를 해석하는 근거로만 사용한다. 인터페이스 문서 자체의 작성·소유나 Agent·Control Plane 구현은 개인 기여로 기록하지 않는다. 이번 심화 문서 조사는 직접 작성한 운영설명서와 설치지침서 두 개에 한정했다.

<a id="materials"></a>

## 지원서 제작 원고

Host 변경과 메시지 전달, Transaction으로 실패를 추적한 경험을 연결한다. 고객 배포 대수와 응답 시간은 별도 확인 항목이다.

### CXL ENABLER 이력서·포트폴리오 소재

> 용도: 사람인 이력서와 Figma 포트폴리오 제작을 위한 작업 원고. 사실·개인 기여·표현 후보를 구분해 사용한다. 상세 근거와 Commit은 [CXL 업무·성과·기여도](#evidence)에 보존한다. 회사 내부 소스·환경값·고객 정보는 공개본에 옮기지 않는다.

#### 1. 프로젝트 카드 원본

| 항목 | 기술 후보 | 근거·주의 |
|---|---|---|
| 프로젝트 | CXL ENABLER Orchestrator 웹 관리 콘솔 | 운영설명서의 제품명과 `orchestrator` 저장소 |
| 참여 기간 | 2025.04~2025.07 | 본인 Git 활동 2025-04-08~07-04. 공식 투입·종료일은 확인 필요 |
| 역할 | Orchestrator의 관리 API·화면·MQ 연동 개발, 운영·설치 문서 작성 | 본인 Author 211개 Commit 및 사용자 직접 작성 확인 |
| 협업 시스템 | CXL Agent, Control Plane, Resource Manager, ActiveMQ, PostgreSQL | 해당 모듈 코드는 다른 Author의 저장소 |
| 사용 기술 | Java 21, Spring Boot 3.4.1, MyBatis, PostgreSQL, Thymeleaf, JavaScript, WebSocket, ActiveMQ | `pom.xml`·현재 Source 기준 |
| 담당 기능 | Login, Group, Host, Memory/Demotion, Script, Settings, Transaction, Dashboard | 본인 Commit Chain과 현재 Controller·Service·UI 대조 |
| 사용자 | CXL 메모리 운영 관리자 | 운영설명서의 사용 흐름. 실제 고객 수·운영 규모 미확인 |

#### 2. 성과로 쓸 수 있는 사실과 경계

##### 2.1 구현·문서 결과

1. 로그인부터 Group·Host 조회와 변경, 메모리·Demotion·Script 제어, 실시간 Dashboard, Transaction 조회까지 이어지는 Orchestrator 관리 흐름을 API와 UI에서 개발했다. 근거: `5fd57dd`, `4419dfa`, `c879eee`, `01fe1b1`, `bd2a29a`, `6d525f3`, `ef9df02` 등과 현행 도메인 코드.
2. Host 삭제, Group·Settings 변경, 메모리·Demotion 설정, Script 실행·중지 요청을 ActiveMQ 메시지 계약에 맞춰 Control Plane으로 전달하는 Orchestrator 측 연동을 구현했다. 근거: `HostService.java`, `GroupService.java`, `SettingsService.java`, `ScriptService.java`와 `REQ_CHANGE`, `REQ_UI_CONFIGURE`, `REQ_UI_SCRIPT`, `REQ_UI_STOP_SCRIPT`.
3. CMM-B·CMM-D·ALL 유형에 따라 화면과 데이터 표시를 분기하고, Dashboard·Group·Host·Transaction 화면의 후속 오류를 수정했다. 근거: `de0e94b`, `f9dfd46`, `0606a0a`, `9787b1f`, `c1600e6`.
4. 운영설명서와 설치지침서를 직접 작성했다. 운영설명서에는 화면 조작과 Server·Agent 운영·장애 대응 절차를, 설치지침서에는 요구사항부터 Server/Agent 설치·설정·실행·버전 확인까지 담았다. 근거: 사용자 직접 확인, 2025-07-07 DOCX 두 개, 업무 티켓 159·160.

##### 2.2 사용자 작업을 개선한 구체 사례

| 문제 | 내가 한 변경 | 확인 가능한 결과 | 근거 |
|---|---|---|---|
| 실시간 Host 목록 갱신 때 선택이 풀림 | 자동 갱신 전 선택된 `hostId`를 저장하고 렌더링 후 복원 | 3초 갱신과 복수 Host 작업 선택을 함께 사용 | `fdb3986`, `ce8471a`, `host/list.js` |
| Host 전체 값을 다시 저장할 때 불필요한 변경 발생 | Host 정보의 실제 변경 항목을 구분하고 Demotion 제어 흐름 분리 | 변경분에 따른 DB·MQ 요청 경로 구성 | `df79da4`, `HostService.java` |
| Group 삭제 시 소속 Host의 관리 관계가 깨질 수 있음 | 소속 Host 존재 여부를 Service에서 검사 | Host 포함 Group 삭제 시 오류 반환 | `b735ccc`, `GroupService.java` |
| 실행 중인 Script 관리 | 실행 상태 조회와 삭제 제한, Group별 Run/Stop 도입 | 실행 대상과 제약을 관리 화면에서 처리 | `2347199`, `bd4e635`, `HostService.java` |
| Dashboard 상태·수치 오해 가능 | `InitFail` 표현과 Demotion별 할당량·총량 표시를 수정 | 화면이 상태와 메모리 의미를 조건별로 구분 | `c1600e6`, `ff1bacf` |
| Transaction 실패·빈 값 식별 어려움 | 실패 행 디자인, 날짜 입력 검증, null/N/A 방어 | 검색과 상세 확인에 필요한 UI 상태 구분 | `d5831c3`, `022cb4b`, `83e9595` |

##### 2.3 정량 사실의 안전한 쓰임

- 개인 Git Commit 211건은 2025-04-08~07-04 동안 Orchestrator에서 변경 과정을 추적할 수 있다는 뜻이다. 코드 생산성·성과 수치로 쓰지 않는다.
- 제품은 4개 핵심 모듈과 공통 MQ 라이브러리로 구성된다. 본인이 개발한 범위는 Orchestrator 중심이다.
- Host 자동 갱신의 코드상 간격은 3초다. 실제 화면 지연·시스템 처리량이나 운영 시간 절감으로 환산하지 않는다.
- 처리 Host 수, 동시 사용자 수, 장애 감소, 인건비·운영비 절감, 고객 납품 성과는 현재 근거가 없어 수치로 쓰지 않는다.

#### 3. 사람인 이력서 입력용 원고

##### 3.1 프로젝트명·담당 업무

**프로젝트명:** CXL ENABLER 관리 콘솔 개발

**담당 업무:** Java/Spring Boot 기반 Orchestrator의 관리 API와 웹 화면 개발. Group·Host·메모리·Demotion·Script 제어, ActiveMQ 기반 Control Plane 연동, WebSocket Dashboard와 Transaction 조회, CMM-B/D/ALL 유형별 화면 분기. 운영설명서·설치지침서 직접 작성.

##### 3.2 상세 경력 항목 후보

- 로그인·Group·Host·Settings·Script·Transaction 관리 기능의 Controller–Service–Mapper와 웹 UI를 개발하고 기능별 검색·페이지네이션·입력 검증을 보완.
- Host 이름·Group 변경, 메모리·Demotion 설정, Script 실행·중지 요청을 도메인별 메시지로 구성해 ActiveMQ Control Plane 연동.
- CMM-D/B Dashboard의 메모리·Host·실행 App 상태를 실시간 표시하고 `InitFail` 및 Demotion 상태에 따른 표시 규칙을 수정.
- Host 목록 자동 갱신 시 선택 상태가 사라지는 문제를 `hostId` 기반 복원으로 해결해 다중 Host 제어 흐름 유지.
- Group에 소속 Host가 있을 때 삭제를 차단하고 실행 중 Script의 삭제·중복 실행 제약을 반영.
- 제품의 운영설명서와 설치지침서를 직접 작성해 화면 사용, 설정, 배포, Agent 재등록과 로그 확인 절차 문서화.

##### 3.3 한 줄 성과 표현 후보

- CXL 메모리 관리 콘솔의 핵심 API·웹 화면과 MQ 기반 원격 제어 연동을 구현하고 제품 유형별 실시간 Dashboard를 안정화.
- Host·Group·Script 제약 및 상태 표현을 보완해 관리자가 잘못된 작업 대상을 선택하거나 상태를 오해할 수 있는 화면 흐름을 개선.
- 운영설명서·설치지침서를 직접 작성해 설치부터 일상 운영·장애 대응까지의 절차를 문서화.

위 문장은 제출처 길이에 맞춰 선택해 사용한다. `효율 00% 향상`, `운영 시간 00시간 절감`, `전 제품 단독 개발`은 사용하지 않는다.

#### 4. Figma 포트폴리오 화면 구성 원고

##### 4.1 권장 6장 흐름

| 장 | 화면 제목 | 보여줄 내용 | 핵심 메시지 |
|---:|---|---|---|
| 1 | 프로젝트 개요 | 제품 목적, 기간, 기술, 본인 담당 Orchestrator와 협업 모듈 | 어떤 제품에서 무엇을 맡았는가 |
| 2 | 시스템과 내 기여 경계 | Web UI/API → MQ → Control Plane/Agent/Resource Manager → 응답 → WebSocket·Transaction | 연동 구조 속 개인 책임 |
| 3 | 관리 흐름 | Login → Group/Host → Memory/Demotion·Script → Dashboard·Transaction | API와 UI를 연결한 수직 개발 범위 |
| 4 | 문제 해결 ① Host 갱신 | 자동 갱신 전후 선택 상태, `hostId` 복원 방식 | 운영 화면의 상태 보존 문제 해결 |
| 5 | 문제 해결 ② 제어·제약 | 변경분 저장, Group 삭제 방어, Script 실행 제약, Demotion 표시 | 명령 전송 전 업무 규칙 검증 |
| 6 | 결과와 문서화 | CMM-B/D 화면 차이, 운영·설치 매뉴얼 구성, 근거·남은 확인 항목 | 구현과 운영 인계까지 수행 |

##### 4.2 장별 시각 소재

- **2장 시스템 구조:** Orchestrator를 강조색으로, Agent·Control Plane·Resource Manager·MQ Library는 협업 모듈로 표기한다. 요청(`REQ_CHANGE`, `REQ_UI_CONFIGURE`, `REQ_UI_SCRIPT`)과 응답·리소스·알림의 방향을 구분한다. 실제 네트워크 주소·Queue 설정값은 표기하지 않는다.
- **3장 사용자 흐름:** 화면 캡처를 공개할 수 없다면 직접 그린 단순화된 와이어프레임으로 Group 목록, Host 상세, Dashboard, Transaction 상세를 보여준다. API와 메시지 흐름을 화면 아래 작은 주석으로 연결한다.
- **4장 전후 비교:** 기존 “3초 갱신→선택 해제”와 수정 “선택 Host ID 기억→재조회→복원”을 같은 화면 상태로 나란히 보여준다. 감소 시간 수치는 넣지 않는다.
- **5장 결정 카드:** 문제, 제약, 변경 전, 구현 선택, 확인한 코드 결과의 다섯 필드로 Group 삭제·Host 변경분·Script 상태를 각각 배치한다.
- **6장 문서:** 운영설명서의 목차 구조와 설치지침서의 설치 순서를 재구성한 카드로 보여준다. 원본 페이지 캡처의 고객·계정·서버 정보는 공개 전에 검토한다.

##### 4.3 캡션·발표 스크립트 후보

- “저는 CXL 하드웨어나 Agent 자체보다 운영자가 사용하는 Orchestrator의 API·웹 화면과 메시지 연동을 맡았습니다.”
- “관리 요청은 화면에서 끝나지 않습니다. 서비스 계층에서 검증한 뒤 메시지 계약으로 변환하고, 결과는 상태 화면과 Transaction에서 다시 확인할 수 있게 연결했습니다.”
- “Host 목록은 3초마다 갱신되지만, 작업 대상 선택이 풀리면 일괄 제어가 어려워집니다. 선택한 Host ID를 기준으로 갱신 후 선택을 복원했습니다.”
- “제품 유형별 데이터 의미가 달라 CMM-B와 CMM-D의 화면과 Demotion별 메모리 표시를 나눴습니다.”
- “두 매뉴얼은 직접 작성했고, 운영 화면 사용법뿐 아니라 설치와 Agent 데이터 이상 대응, 로그 확인 순서를 포함했습니다.”

#### 5. 제출 전 확인 목록

- [ ] 공식 프로젝트 기간·직무명·팀 규모 확인
- [ ] 실제 운영·납품·고객 검수 여부와 공개 가능한 범위 확인
- [ ] 화면·문서 이미지의 회사 로고, 고객명, 서버 주소, 계정, 내부 경로 제거 또는 재제작
- [ ] 성능·시간 절감 수치를 넣으려면 시험 조건과 결과 확보
- [ ] 포트폴리오의 구조도에서 타인이 개발한 모듈과 본인 Orchestrator 기여를 시각적으로 구분
- [ ] 사람인 입력 후 글자 수에 맞춘 문장 선택과 기술 키워드 재배치

#### 6. 포트폴리오 문제 해결 사례 원고

아래 사례는 각각 독립된 페이지나 면접 답변으로 확장할 수 있다. `문제 → 제약 → 구현 → 확인된 결과` 순서로 배치하며, 운영 효과는 측정치를 확보한 뒤 별도로 쓴다.

##### 6.1 Host 자동 갱신과 다중 선택 유지

- **문제:** Host 목록은 주기적으로 다시 그려져 최신 상태를 보여주지만, 재조회 후 체크박스 선택이 초기화되면 여러 Host를 대상으로 하는 작업을 이어가기 어렵다.
- **제약:** 자동 갱신을 멈추면 상태의 최신성이 떨어지고, 화면 DOM의 체크 상태만 믿으면 재렌더링에 취약하다.
- **구현:** 갱신 직전 선택된 Host의 `hostId` 집합을 기억하고 목록을 다시 표시한 뒤 일치하는 항목의 선택을 복원했다. 코드의 갱신 간격은 3초다.
- **확인된 결과:** 현재 `host/list.js`에 목록 재조회와 선택 복원 경로가 함께 존재한다. 자동 갱신과 복수 선택을 한 화면에서 병행할 수 있다.
- **표현 후보:** “실시간 Host 목록의 재렌더링 과정에서 작업 대상 선택을 보존해 일괄 제어 화면의 연속성을 개선했습니다.”
- **증거:** `fdb3986`, `ce8471a`, 현행 `host/list.js`; 상세 근거 문서 §4.11.

##### 6.2 Host 변경분과 비동기 제어 요청 구분

- **문제:** Host의 일반 정보 변경과 메모리·Demotion 제어는 적용 주체와 요청 의미가 달라 같은 저장 동작으로 설명하기 어렵다.
- **구현:** Host 정보는 실제 변경된 필드를 구분해 DB 갱신과 `REQ_CHANGE` 전달에 반영하고, 메모리·Demotion 제어는 `REQ_UI_CONFIGURE` 요청으로 분리했다. 개별·복수 대상에 따라 입력 검증과 메시지 전송 범위도 구분했다.
- **확인된 결과:** 현행 `HostService.java`에서 `updateHostInfo`, `setGroup`, `setDemotion`, `setMemory`와 관련 메시지 조립 경로를 확인했다.
- **표현 후보:** “Host 속성 변경과 원격 메모리 제어를 별도 요청으로 모델링하고, 변경 항목만 전달하도록 API·Service·MQ 흐름을 정리했습니다.”
- **증거:** `c1da992` → `df79da4` → `e131efb`, 현행 `HostService.java`; 상세 근거 문서 §14.2. 최종 코드 설명에 과거 `HostServiceV2` 파일명을 쓰지 않는다.

##### 6.3 Group·Script 작업의 선행 조건

- **문제:** Host가 포함된 Group을 지우거나 실행 중인 Script를 삭제하면 운영 대상의 관계·상태가 맞지 않을 수 있다. Group 단위 Script 작업은 대상 Host 선택도 필요하다.
- **구현:** Group 삭제 시 소속 Host를 검사하고, Script 실행 상태에 따라 삭제·실행 제약을 적용했다. Group의 Host 목록을 작업 대상으로 모아 Run/Stop 메시지를 구성했다.
- **확인된 결과:** `GroupService.java`의 삭제 검사와 `HostService.java`의 개별·복수·Group 단위 Run/Stop 경로가 존재한다.
- **표현 후보:** “Group·Script 관리에 업무 제약을 추가하고 Group 단위 일괄 명령을 연결해 잘못된 삭제와 중복 실행을 방지했습니다.”
- **증거:** `b735ccc`, `2347199`, `bd4e635`, 현행 두 Service; 상세 근거 문서 §14.1·14.3.

##### 6.4 제품 유형과 Dashboard 값의 의미

- **문제:** CMM-B와 CMM-D는 관찰 단위가 다르고, Demotion 상태에 따라 CXL 메모리 수치가 가리키는 값도 달라진다. 실패·미초기화 Host를 정상 상태처럼 표시해서도 안 된다.
- **구현:** 유형별 Dashboard·Group·Host·Transaction의 표시와 이동을 분기하고 `InitFail` 상태, Demotion별 할당량/총량, 작은 수치 차트의 표현을 수정했다.
- **확인된 결과:** 화면 코드와 관련 Commit에서 유형 분기 및 조건별 수치 표현을 확인했다. 실제 운영 장애 감소나 이해도 향상 수치는 측정되지 않았다.
- **표현 후보:** “CMM-B/D 유형과 Demotion 상태에 따라 Dashboard의 데이터 의미와 상태 표현을 구분했습니다.”
- **증거:** `de0e94b`, `c1600e6`, `ff1bacf`, `d7081ea`; 상세 근거 문서 §4.7~4.8·14.4.

##### 6.5 구현에서 운영 문서까지 연결

- **문제:** 웹 화면 조작만으로는 Server·Agent 설치, 설정, 시작·중지, 장애 시 확인 순서를 전달하기 어렵다.
- **수행:** 운영설명서에는 제품 구성과 화면별 작업, Agent 재등록·Script 로그 확인 등 FAQ를 작성했다. 설치지침서에는 요구사항, 패키지 구성, Server/Agent 설치·설정·기동, 버전 확인 절차를 작성했다.
- **확인된 결과:** 사용자가 두 문서의 직접 작성을 확인했고, 2025-07-07 판 두 DOCX의 본문과 업무 티켓 159·160을 대조했다. 문서에 적힌 다른 모듈의 구현까지 본인 개발로 귀속하지 않는다.
- **표현 후보:** “관리 콘솔 구현 경험을 바탕으로 운영설명서와 설치지침서를 직접 작성해 설치·운영·장애 확인 절차를 문서화했습니다.”
- **증거:** 상세 근거 문서 §16~17 및 두 DOCX. 인터페이스 문서는 개발 참고 자료이며 작성 성과로 표기하지 않는다.

#### 7. 사람인·Figma로 옮길 때의 정보 단위

| 정보 단위 | 사람인 이력서 | Figma 포트폴리오 | 내부 근거 |
|---|---|---|---|
| 역할 | Orchestrator API·웹 화면·MQ 연동과 두 매뉴얼 직접 작성 | 시스템 구조에서 본인 담당 영역을 색으로 표시 | §1·6·16~18 |
| 업무 범위 | Group, Host, Script, Dashboard, Transaction 등의 담당 기능 | 사용자 작업 흐름과 화면별 대표 기능 | §4·11 |
| 해결 사례 | Host 선택 복원, 변경분 전송, Group/Script 제약 중 2~3개 | 문제·제약·구현·확인 결과를 사례별 한 장 | §4.11·14 |
| 사용 기술 | Java/Spring Boot, MyBatis, PostgreSQL, JavaScript, WebSocket, ActiveMQ | 기술을 기능·데이터 흐름에 붙여 표시 | §3·11 |
| 성과 수치 | 검증된 운영 수치 확보 전에는 기술하지 않음 | 3초 갱신은 구현 조건으로만 표시 | §9·12 |
| 문서화 | 운영설명서·설치지침서 직접 작성 | 공개 가능한 수준에서 목차·절차 재구성 | §16~17 |

`§` 표기는 [상세 근거 문서](#evidence)의 절 번호다. 외부 제출본에는 Commit Hash, 내부 파일 경로, 메시지 타입을 필요한 만큼만 남기고 회사의 공개 가능 범위를 확인한다.
