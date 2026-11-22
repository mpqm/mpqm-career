# SVT Manager 경력 근거

[상세 근거](#evidence) · [지원서 제작 원고](#materials) · [Git 기록](#git)

## 역할과 범위

개인 개발 범위는 `mgr`. 검증 엔진·Capture Mode·Setup은 협업 제품 맥락.

## 재조사에서 확인한 근거

2026-11-22 로컬 전체 Ref와 개인 author 재집계. 4개 저장소 477건 중 개인 191건(전부 비병합). `4cb4b0f`의 Scenario 폼·서비스 변경과 `SynchrophasorMgr/Service/ScenarioService.cs`를 확인했다. 10월 V1.0 설치 묶음은 6~7월 개인 Git과 시기를 구분한다.

132~151번의 Frame·폼·보고서·PMU 업무는 mgr 변경을 찾는 실마리다. 설치·엔진의 작성 범위는 각 저장소별로 판단한다. [업무 티켓 소스](./process-ticket.md)

<a id="evidence"></a>

## 상세 근거

### SVT Synchrophasor Verification Tool 업무·성과·기여도 상세 근거

> 이력서·자기소개서 작성 전 상세 정보 수집 문서. 규격 해석, 데스크톱 앱 구현, 데이터 정합성, 보고서·설치 산출물을 분리 기록.

> 2026-11-15 재조사 범위: 사용자가 `mgr`를 본인 담당 프로젝트로 지목했다. 아래 §13부터는 `mgr`의 본인 Git 변경과 현재 코드를 중심으로 추가 조사한 내용이다. `00. meta`는 목록만 확인하고 본문 심층 조사는 하지 않았다. 따라서 프로토콜 정의서·매뉴얼의 직접 작성은 주장하지 않는다.

#### 1. 분석 범위와 근거

| 구분 | 내용 |
|---|---|
| 저장소 | `02. svt/mgr` |
| 본인 식별 | Git author email `jspark@4net.co.kr` |
| Git 활동 기간 | 2025-06-17 ~ 2025-07-29 |
| 본인 커밋 | 191건 (2025-06 70, 07 121) |
| 변경량 참고치 | +91,460 / -63,606줄, 변경 경로 출현 2,395회(`--name-only` 기준). 파일 이동·중복을 포함하므로 순수 작성량으로 해석하지 않음 |
| 티켓 근거 | 기존 `업무 티켓 소스.md` 132~154번 |
| 산출물 근거 | 프로토콜 정의서, 테스트·실행 방법, 설치 매뉴얼 |

- 대량 변경에 WPF→WinForms 전환, Designer 파일, SQLite DB, 리소스·빌드 구성 포함 → 라인 수보다 구현→구조 전환→기능 완성→화면 대기 흐름 보완의 Commit 연쇄가 증거. [본인 191건 전수 목록](#git) 참조.

##### 1.1 전체 커밋 감사

| 감사 항목 | 확인 결과 |
|---|---|
| 커밋 메타데이터 | 191건 제목·변경 경로 전수 분류, 대표 커밋(UI 전환·화면 구축·IEEE Frame·Report·패킷 분석·Loading)은 Patch·현재 Code 확인 |
| 메시지 분류 | 신규 기능 50, 수정 88, 리팩터링 29, UI·UX 60, Protocol 22건 |
| 변경 경로 분류 | PMU 126, Scenario 91, History 101, Report 70, Protocol·Packet 65, Data 계층 106, 공통 UI 183건 |
| 기술 전환 | WPF 초기 생성·MVVM 재구성 후 WPF 42개 파일 제거, WinForms 재구축 |
| 현재 Code 교차검증 | 실패 Packet Binary Parsing, 2005·2011 Version 분기, Field별 실패 위치 표시, 이력·결과 조회, RDLC Report |

- 경로 분류는 다중 집계. Designer·Resource·SQLite 포함 대량 변경은 순수 작성 코드량으로 해석하지 않음. WPF는 장기 병행 Stack이 아닌 **초기 Prototype 후 제거된 선택지**.

##### 1.2 핵심 변경

| Hash | 변경 규모 | 의미 |
|---|---:|---|
| `dd40821` | +210 | WPF 초기 Project 생성 |
| `b6bacec` | +90/-107 | MVVM 구조 재정비 |
| `37f7c17` | 42개 파일 삭제, -6,528 | WPF 제거·WinForms 전환 이력 |
| `aa83791` | +3,375 | WinForms Project·기본 UI 재구축 |
| `e1aa9c1` | 33개 파일, +5,052/-3,724 | 점검 이력 화면·Data 흐름 확장 |
| `6254135` | 57개 파일, +4,875/-1,240 | ReportViewer·RDLC Report 통합 |
| `e6b3a41` | +1,782/-595 | IEEE C37.118-2005 Configuration Frame 확장 |
| `2f64412` | +3,292/-20 | Wireshark Sample 기반 Packet 검증 자산 |
| `b1c013d` | +524/-87 | 비동기 작업 Loading·사용자 Feedback 개선 |

- 현재 `ProtocolFailDetailModal`: 실제 Packet Byte로 `SYNC`, Frame Type, 2005·2011 Version, `FRAMESIZE`, `IDCODE`, `SOC`, `FRACSEC` 등 해석, `verifyDepth`에 따라 실패 Field 표시 → "Sample 화면만 제작"이 아닌 **규격 기반 실패 Packet 진단 UI 구현**이 정확한 표현.

#### 2. 제품·업무 맥락

PMU(Phasor Measurement Unit) Synchrophasor 패킷을 IEEE C37.118-2005/2011 규격으로 검증하고 검증 이력·실패 패킷·보고서를 관리하는 Windows 데스크톱 도구.

사용자 흐름: PMU 연결 정보 등록 → 운영·검증·Free Mode별 검증 조건·Scenario 구성 → 별도 SVT 실행 프로그램 호출로 수신·검증 → 점검 이력에서 성공·실패·Frame별 정보 조회 → 실패 패킷 IEEE 필드·Binary 분석 → ReportViewer로 검증 대상·Scenario·성공/실패 상세 출력.

- 테스트 메모: SVTCM 실행 → Manager에 PMU 등록 → Wireshark TCP 4712 필터로 정상 패킷 교차 확인. Multiple PDC / Single PDC Generator 구분으로 Station 수·Abnormal Test 조건 검증.

#### 3. 기술 스택

C# / .NET Framework 4.8, Windows Forms, 초기 WPF·MVVM 프로토타입(이후 제거), SQLite·Dapper, Entity Framework 6 패키지 참조, Microsoft ReportViewer WinForms / RDLC, Newtonsoft.Json, NLog, IEEE C37.118-2005·C37.118.2-2011 필드 해석. Wireshark·Npcap은 시험·외부 도구 맥락이며 Manager 내부 라이브러리 구현으로 세지 않는다.

#### 4. 프로젝트 구조 구축

##### 4.1 WPF·MVVM 초기 구현 (2025-06-17~)

- WPF 프로젝트, 레이아웃, DB 모델·Repository, 점검 이력, PMU, Scenario 화면
- 근거: `dd40821` 프로젝트 생성, `798d494` 레이아웃, `6dcaa16` DB 설정·모델, `9249e9e` Repository, `b6bacec` MVVM 재구조화, `e782073` PMU 목록, `712e7ac` PMU 등록·수정, `964c4ce` Scenario 목록

##### 4.2 WinForms 구조 전환

WPF 관련 파일을 제거하고 WinForms 프로젝트로 전환했다. 데이터 접근·화면 수명주기·상태 유지·Navigation·컴포넌트 구조를 다시 구축했다. 전환 결정의 공식 이유는 확인되지 않았다.

- WinForms 프로젝트·레이아웃 재생성, DB 연결·Singleton Form, Form Navigation, Model·Service 재구성
- PMU·Scenario·History 기능 재구현, 미사용 UserControl·이전 Form 코드 제거
- 근거: `37f7c17` WPF to WinForm, `aa83791` 프로젝트·레이아웃, `a9ae0b2` DB·Singleton Form, `15e061f` Form Navigation, `087aab9` Service, `b6bff74` 이전 Form 삭제

#### 5. 상세 수행 내용

##### 5.1 PMU 관리

- 목록·상세·등록·수정, 이름 중복 검사
- TCP/UDP별 필드 활성·비활성, UDP일 때 검증 IP 수정 제한
- 운영·검증 Mode별 저장 조건, 연결 정보 변경 시 데이터 매핑 수정
- 자동완성·이전 화면 상태 유지, PMU 선택 시 화면 인덱스가 아닌 DB 식별자 유지
- 목록 렌더링 지연 개선, SVT 실행 파일 경로·연결 정보 연동
- 근거: `1585923` 목록, `b335cd6` 등록·수정 디자인, `104546f` 운영 Mode 분리 저장, `cb1a24b` Main 리팩터링, `46627a9` 렌더링 지연 수정, `ed4e728` PMU·Scenario 중복 검사, `ee23737` 자동완성·이전 화면 기억, `3f3ffa8` UDP 검증 IP 제한, `95e0cf8` 연결 정보 변경 대응

##### 5.2 Scenario 관리

- 목록·등록·수정, Frame 동적 추가·삭제, 검증 Mode·Frame Option 관리
- 입력값 Validation, 중복 검사, 자동완성·검색
- 삭제 시 검증 이력 존재 여부별 연관 데이터 처리
- Scenario별 Parsing Error 건수, Free/운영 Mode 불필요 Table 숨김, Data Frame Option별 그룹화
- 근거: `4eb3d63` 목록, `6625e48` 등록·수정, `94f0626` Frame 추가·삭제 반응형, `704080f` 수정·등록, `1d06c34` 페이지네이션 분리·렌더링 최적화, `2ad674b` Upsert 리팩터링, `96a72b8` Option Validation, `e091b80` Parsing Error 건수, `562d49d` Option 입력값 검증 수정

##### 5.3 점검 이력

- 목록·검색·페이지네이션, PMU·Scenario 정보 연결, Mode별 데이터 표현
- 삭제된/없는 Scenario 이력 방어, 잘못된 PMU 연결 키·조회 데이터 수정
- Frame별 결과·성공/실패 수량, 화면 코드·Service·Model 리팩터링
- 근거: `54ace40` WPF 점검 이력, `e1aa9c1` WinForms 점검 이력, `fe7ed6f` 페이지네이션 조건, `c1c3495` History Main 리팩터링

##### 5.4 IEEE C37.118 Packet 상세 화면의 Frame 해석

프로토콜 정의서 Sheet: Command Data Frame, Common Frame, Data Frame, Header Frame, Configuration Frame 2005, Configuration Frame 2011, Abnormal Case, SVT 검증 항목.

| 구조 | 구현 필드·처리 |
|---|---|
| 공통 Header | SYNC, Frame Size, ID Code, SOC, FRACSEC, CHK, IEEE Version·Frame Type Bit 해석 |
| Header Frame | 공통 Header 뒤 가변 ASCII, Byte 단위 문자 → 문자열 결합, 2005·2011 공통 구조 |
| Configuration Frame 2005/2011 | TIME_BASE, NUM_PMU, Station Name, ID Code, FORMAT, PHNMR·ANNMR·DGNMR, Channel Name, PHUNIT·ANUNIT·DIGUNIT, FNOM·CFGCNT·DATA_RATE, 2011 Configuration Frame 3 Continuation Index·확장 구조, PMU·Channel 수별 반복 가변 필드 |
| Data Frame | Configuration FORMAT·수량 기준 필드 길이·반복 횟수 결정, STAT, Phasor, Frequency, DFREQ, Analog, Digital, 16-bit integer / 32-bit floating point 분기, Rectangular·Polar 분기, 2005·2011 STAT 의미 차이 |

- 근거: `e6b3a41` 2005 Configuration Frame, `5c9bd55` Header Frame, `43e87d6` 2011 Header Frame, `894e1bf` Data Frame, `0f8c8a2` Header Field 문자열 결합, `b0c05e3` Data Frame 표시 형식, `e2075cc` 전체 Packet DataGridView

##### 5.5 비정상 패킷 검증 항목과 Manager 진단 화면의 연결

아래 항목은 이전 조사에서 참고한 프로토콜 정의서의 Abnormal Case·검증 항목 범위다. Manager에서는 별도 Engine이 기록한 실패 결과를 Field별로 보여 준다. 항목 전체의 검증 판정 코드를 본인이 작성했다는 뜻은 아니다.

- Common Header 최소 길이·Frame Size, SYNC 선두 Byte `0xAA`, 허용 Frame Type·IEEE Version
- ID Code 예약값·Configuration/Data 간 일치, FRACSEC Time Quality 허용값, Checksum
- Configuration 수량 ↔ Data Frame 실제 필드 수 일치, FORMAT별 Byte 길이·값 범위
- Phasor·Frequency·DFREQ 값 범위, Configuration Frame 3 연속 Frame Index
- 검증 Sheet에 항목별 예상 Error Code·Error Message·SVTCM Test Menu·Packet Data 연결 → 명세를 재현 가능한 Test Case로 변환

##### 5.6 실패 패킷 분석 UI

Binary Dump 대신 규격 필드별 문제 확인용 Wireshark 형태 화면.

- Frame Type·IEEE Version별 화면 선택, 2005/2011·Header/Configuration/Data Frame별 동적 UserControl, 실패 상세 Modal
- Field, Byte Length, Description, Value, Binary Value 표시, 여러 줄 Binary 자리 정렬
- Error Field 강조, Packet Data 있는 실패와 단순 Error Message 구분
- 근거: `5010bba` 실패 상세 Modal Form, `9de6bad` 2005 Packet 임시 구현, `89379e0` 2005 Description·Value Column, `c30a917` Description·오류 수정, `2f64412` Wireshark Sample, `cae808e` Packet 표시 형식

##### 5.7 ReportViewer·RDLC 보고서

- 운영/검증 Mode 보고서 분리, Mode별 불필요 항목 숨김
- DB → Report DataSource 변환, 검증 대상·Scenario·검증 상세 구성, 성공·실패 Protocol 분리
- Text 저장 데이터 → JSON 구조화, `ScenarioFrameIdx` 기준 Data Frame Option 그룹화
- RDLC Layout·인쇄·다운로드, 보고서·실패 정보 Loading 속도 개선
- 근거: `931b824` 운영·검증 분리, `c3f7de7` 디자인, `fb158bc` Tab·기본 Layout, `cf94c4f` ReportViewer, `31b7c37` 성공·실패 분리, `23e90c3` 검증 대상·Scenario, `c942eed` Data Frame Option 그룹화, `b1c013d` Loading 개선

##### 5.8 Form 수명주기·UX

문제: 반복 Navigation마다 Form 신규 생성 → 화면 지연·상태 소실.

- Singleton·Form 재사용, 이전 화면 기억, Form 교체·Navigation Enum 정리
- 사전 Loading·Loading Indicator, 불필요 UserControl 제거
- 공통 Button·Grid·ComboBox·Pagination Helper, 자동완성, 화면 전환 오류 수정
- 근거: `e0f7d02` Helper·UI Logic 통합, `3961217` Form View Logic 리팩터링, `c6ca0b9` Helpers 리팩터링, `7739f46` Form Loading 재사용 Instance, `5b1e5e3` Form 전환 오류 수정

#### 6. 설치·운영 산출물

설치 매뉴얼 확인 요소: `setup.exe`·MSI 설치, 별도 위치 `database.db`, Manager·SVT 실행 프로그램 SQLite Connection String 일치, Manager에서 SVT 실행 파일 경로 설정, 운영·Free Mode 최대 검증 Frame 수 설정, Wireshark·Npcap 설치, 프로그램별 Error·Info Log, 환경설정 오류 점검 절차.

- 배포·실행 가능한 제품 형태까지 고려한 근거. **경계**: 개인 작성자 표기 없음 → 매뉴얼 전체 단독 작성 단정 금지.

#### 7. 업무 성과

| 성과 | 내용·의미 |
|---|---|
| 국제 규격 → 진단 화면의 데이터 모델 | Configuration 설정값이 Data Frame의 표시 길이·반복 구조를 결정하는 의존관계를 화면 해석 코드에 반영(§5.4). PMU 수·Channel 수·Format에 따라 Packet Field를 동적으로 표시하고 실패 위치를 추적. 검증 Engine의 판정 구현과 구분 |
| 검증 결과 시각화 | §5.6. 전력 Protocol 담당자가 실패 위치를 직접 비교 가능한 도구 |
| E2E 업무 흐름 | PMU·Scenario 관리, 검증 실행, History, 실패 상세, ReportViewer를 하나의 Manager App으로 연결 |
| UI 기술 전환 | §4. WPF·MVVM Prototype 후 WinForms로 동일 기능 재구성, Service·Model·DB 계층 유지하며 Form Navigation·재사용 구조 안정화 |
| 정합성·사용성 | 화면 Index/DB ID 혼용 방지, PMU·Scenario 중복 검사, TCP/UDP 입력 제어, 삭제 연관 데이터 방어, Report 그룹 기준 보정, Form 재사용·Loading 개선 — 시간 단축 수치 없음, "N배 개선" 표현 금지 |

#### 8. 본인 기여도 판단

| 매우 높음 | 협업·경계 (본인 구현 아님) |
|---|---|
| Manager 프로젝트 초기 생성 | PMU 장비 자체·Firmware |
| WPF Prototype과 WinForms 전환 | 별도 SVT 검증 Engine 전체 구현 |
| DB Model·Repository·Service | IEEE 규격 제정 또는 Protocol 자체 설계 |
| PMU, Scenario, History, Report 주요 Form | Wireshark/Npcap Library 개발 |
| IEEE Packet 분석 화면, 공통 UI Helper·Form Navigation | |

- 근거: 191건 본인 커밋이 Initial Commit 직후부터 최종 Packet UI·Loading 개선까지 연속 → Manager App 핵심 구현 기여도 높음.
- 안전한 표현: "PMU 검증 Manager와 Packet 분석·보고서 기능을 개발하고 별도 SVT Engine 실행을 연동".

#### 9. 변경 집중 파일

| 변경 횟수 | 파일 | 의미 |
|---:|---|---|
| 86 | `SynchrophasorMgr.csproj` | WPF→WinForms, Resource·Library·Report 구성 |
| 57 | `database.db` | Schema·Sample·검증 데이터 |
| 54 | `Forms/PMUMain.cs` | PMU 목록·검색·Navigation·실행 |
| 40 | Main Form | 전체 Layout·Navigation |
| 37 | `Forms/HistoryMain.cs` | 점검 이력 조회 |
| 35 | `Forms/PMUUpsert.cs` | PMU 등록·수정·Validation |
| 26 | `Forms/ScenarioUpsert.cs` | Scenario·Frame Option |
| 26 | `Forms/ReportMain.cs` | ReportViewer·Data Mapping |
| 24 | `Forms/ScenarioMain.cs` | Scenario 목록 |
| 22 | `Services/PMUService.cs` | PMU Data Logic |
| 19 | `Services/HistoryService.cs` | History Data Logic |
| 19 | `Common/SQLiteConfig.cs` | DB Connection |
| 18 | `ProtocolFailDetailModal.cs` | 실패 Packet 상세 |

#### 10. 이력서·자기소개서용 사실

- IEEE C37.118-2005/2011의 Header·Configuration·Data Frame을 동적 구조로 모델링
- PMU 수와 Phasor·Analog·Digital 설정에 따라 반복 길이가 달라지는 Packet 처리
- Packet Field·Byte·Binary·규격 설명을 Wireshark 형태로 시각화
- PMU·Scenario·History·실패 Modal·RDLC ReportViewer 개발
- WPF Prototype을 WinForms 제품 구조로 전환
- SQLite·Dapper 조회·저장 계층과 Form 재사용 구조 구현. EF6는 프로젝트 패키지 참조로 확인되며 실제 데이터 접근의 핵심 경로는 Dapper Service
- 2025-06~07 기간 본인 커밋 191건

#### 11. 추가 확보 필요 정량 정보

최종 검증 항목 수·PASS Case 수, 지원 Frame Type·Version 조합 수, PMU·Station 동시 연결 수, 보고서 생성 시간·개선 전후 Loading 시간, 현장·고객 인수 Test 결과, 납품 Version·배포 수, 본인 작성 매뉴얼·프로토콜 정의서 범위.

#### 12. 대표 커밋 증거

| 날짜 | Hash | 내용 |
|---|---|---|
| 2025-06-17 | `dd40821` | WPF 프로젝트 생성 |
| 2025-06-17 | `9249e9e` | DB Repository |
| 2025-06-20 | `37f7c17` | WPF→WinForms |
| 2025-06-20 | `a9ae0b2` | DB·Singleton Form |
| 2025-06-21 | `15e061f` | Form Navigation |
| 2025-07-04 | `46627a9` | PMU 렌더링 지연 수정 |
| 2025-07-14 | `1d06c34` | Pagination 분리·렌더링 최적화 |
| 2025-07-15 | `cf94c4f` | ReportViewer |
| 2025-07-16 | `ed4e728` | PMU·Scenario 중복 검사 |
| 2025-07-21 | `5010bba` | 실패 상세 Modal |
| 2025-07-23 | `e6b3a41` | IEEE 2005 Configuration Frame |
| 2025-07-23 | `43e87d6` | IEEE 2011 Header Frame |
| 2025-07-25 | `2f64412` | Wireshark Sample |
| 2025-07-28 | `7739f46` | Form 재사용 |
| 2025-07-29 | `e2075cc` | IEEE 전체 Packet Grid |
| 2025-07-29 | `b1c013d` | Report·실패 정보 Loading 개선 |

#### 13. 재조사 범위와 작성자 경계

##### 13.1 네 저장소의 Git 전체 이력

| 저장소 | 전체 Commit | 본인 Email Commit | 이번 조사에서의 용도 |
|---|---:|---:|---|
| `cm` | 11 | 0 | 별도 검증·시뮬레이션 코드의 협업 경계 확인 |
| `mgr` | 245 | 191 | 본인 기여 추적의 주 저장소 |
| `setup` | 6 | 0 | 설치 프로젝트와 Manager 구현을 구분 |
| `tool` | 215 | 0 | 별도 검증 Engine·도구 구현을 본인 성과로 합치지 않음 |

- 기준: 네 저장소의 `git rev-list --all --count`와 전체 Author Email을 확인했다. `mgr`의 본인 Email `jspark@4net.co.kr`는 2025-06-17~07-29에 191건이다. 2025년 하반기부터 2026년 3월까지 다른 작성자의 후속 변경이 현재 코드에 반영되어 있다.
- `mgr`의 현재 HEAD는 `619de97`(2026-03-17, 다른 작성자)이다. 이 Commit은 정상 연결·검증 통과 결과를 실패로 보이던 이력 조회 SQL을 수정했다. 현재 동작을 설명할 때 이 변경을 본인 구현으로 귀속하지 않는다.
- 본인 Commit의 파일 경로는 2025년 7월 말 `788902d` 재구조화와 이후 후속 변경을 거쳐 현재 `View/Page`, `View/Component`, `Service` 등으로 이동했다. 과거 Patch 경로와 현행 코드 경로를 같은 파일로 무조건 간주하지 않고 기능 연쇄로 대조한다.
- `00. meta` 목록에는 사용자·설치 매뉴얼, 프로토콜 정의서, 테스트 방법, 패키지, 구형 PMUConnectionTester 코드가 있다. 사용자가 Meta 심층 확인의 필요성을 낮게 보고 `mgr` 집중을 요청했으므로 본문을 읽지 않았다. 기존 §5.4~5.5·§6의 Meta 기반 서술은 이전 조사 기록으로 보존하되, 개인 작성·구현 근거는 `mgr` Commit과 코드로 따로 판단한다.

##### 13.2 현재 코드와 개인 변경을 구분해야 하는 대표 예

| 현재 코드의 변화 | 본인 근거와 구분 |
|---|---|
| `ReportService.GetReportDetail`이 검증 당시의 `TB_SCENARIO_FRAME_HISTORY`와 `TB_REPORTS` 정보를 조회 | 보고서 데이터 모델 구축은 본인 Commit 연쇄가 있으나, 현재 SQL의 변경은 `e61ceef` 등 이후 다른 작성자 변경을 포함 |
| `HistoryService.GetHistoryPage`의 결과 판정 SQL | 본인 이력·검색·페이지네이션 구현과 별개로 `619de97`에서 다른 작성자가 성공/실패 판정 수정 |
| 현재 `ReportMain`의 실패 탭 로딩 | 본인 `b1c013d`에서 지연 바인딩과 로딩 표시를 도입. 현재 조건문의 `!isFailTabLoaded` 검사는 주석 처리되어 있으므로 “탭 최초 한 번만 로딩”을 현재 동작으로 단정하지 않음 |
| 현재 PMU 화면의 SVT 프로세스 종료 및 자동 이력 갱신 | 본인 기간 뒤의 Commit도 반영되어 있어 `Process.Start`, Mode 인자 구성, 본인 Commit을 확인한 부분까지만 개인 기여로 표현 |

#### 14. 본인 구현 연쇄: Manager의 사용 흐름

##### 14.1 WPF 시제품에서 WinForms 작업 구조로 전환

`dd40821`에서 WPF 프로젝트가 시작됐고 `b6bacec`에서 MVVM 구조가 정리됐다. `37f7c17`은 WPF 관련 42개 파일을 제거했으며 `aa83791`에서 WinForms 프로젝트와 기본 화면을 다시 구성했다. 뒤이어 `a9ae0b2`의 DB·Form 관리, `15e061f`의 Navigation, `087aab9`의 Service 구조가 연결된다. 이 전환은 동일 제품에서 화면 프레임워크, 수명주기와 데이터 연결 방식을 다시 구축한 작업이다. 장기적으로 WPF와 WinForms를 병행 운영했다는 표현은 맞지 않는다.

##### 14.2 PMU 선택에서 별도 검증 실행 프로그램까지

- Manager의 PMU 화면은 PMU 연결 정보와 검증 Mode를 선택하고, 별도 SVT 실행 파일 경로를 확인한 뒤 `ProcessStartInfo`로 실행한다. 실행 인자는 `verify`일 때 PMU 연결 ID와 Scenario ID, `oper`일 때 운영 연결 ID, `free`일 때 검증 연결 ID를 담는다. 실행 중인 SVT 프로세스가 있으면 중복 실행을 막는다.
- 이 흐름의 개인 근거는 PMU 목록·등록/수정, Mode 저장·상태, 실행 파일 경로 연결을 다룬 §5.1의 Commit과 2025-07-22 `a1e9227`이다. 현재 `PMUMain.cs`의 프로세스 종료 버튼·종료 후 이력 새로고침은 후속 변경의 영향도 있으므로 전체를 개인 신규 기능으로 표기하지 않는다.
- 이력서 표현은 “Manager에서 PMU·Scenario 설정을 검증 실행 프로그램의 Mode별 실행 인자로 연결”까지가 안전하다. 검증 Engine 자체의 패킷 수신·판정 로직을 개발했다고 쓰지 않는다.

##### 14.3 Scenario 입력·순서·검증 옵션

- `ScenarioUpsert`는 Frame 행을 추가·삭제하고 순서를 다시 매긴다. 저장 시 Scenario 이름의 중복을 검사하고 Data Frame 검증 시간 등 입력값을 검사한다. 기존 Scenario는 프레임 순서로 불러와 수정 화면에 다시 배치한다.
- `94f0626`(Frame 행 동적 추가/삭제), `2ad674b`(등록/수정 리팩터링), `96a72b8`(옵션 Validation), `562d49d`(입력값 검증 수정)가 초기 구현에서 업무 규칙 보완으로 이어지는 개인 변경이다.
- 업무 의미: 동일 Scenario에서 어떤 Frame을 어떤 순서와 옵션으로 요청할지 Manager에서 구성한다. 실제 검증의 성공률이나 지원 가능한 최대 조합 수는 이 코드만으로 증명하지 않는다.

##### 14.4 이력의 식별·검색·보고서 연결

- 2025-07-29 `1a5e074`에서 `TB_REPORTS.capture_guid`를 두 이력 조회 경로의 `CaptureGuid`로 가져오고 `HistoryItem` 및 DataGridView 열에 “Capture ID”를 추가했다. 사용자는 점검 결과를 식별자로 조회 화면에서 확인할 수 있다.
- 개인 변경은 PMU·Scenario·기간·Mode·결과 필터와 페이지네이션, 보고서 이동, 삭제된 Scenario 표시를 포함한다. `HistoryService`의 현재 결과 판정 SQL은 위 §13.2처럼 후속 작성자의 수정이 있으므로 개인 성과와 분리한다.
- 근거: `e1aa9c1`, `fe7ed6f`, `1a5e074`, 현행 `HistoryService.cs`, `HistoryIterm.cs`, `DataGridViewHelper.cs`.

#### 15. 실패 Packet을 해석 가능한 화면으로 바꾼 작업

##### 15.1 실패 상세 화면의 데이터 경로

`ReportService`는 `TB_REPORTS_RESULT`에서 검증 필드, 실패 깊이, 결과 데이터, Packet 데이터, Station 이름을 읽어 `ReportsDetail`로 전달한다. `ReportMain`은 실패 결과를 시간 순으로 `ProtocolFailInfo` 목록에 변환하고, 실패 행의 결과 셀에서 Packet 데이터가 있는 경우 `ProtocolFailDetailModal`을 연다. Modal은 대상 Station 정보와 IEEE Version, 실제 Packet 데이터를 함께 받아 필드를 조립한다. Packet 데이터가 없는 실패는 Modal 진입 전에 제외된다.

##### 15.2 Byte·Bit와 규격 필드의 연결

- `ProtocolFailDetailModal`은 저장된 Bit 문자열을 8비트 Byte로 분할한다. Common Frame의 `SYNC`를 선두 Byte·Frame Type·Version으로 나누고 `FRAMESIZE`, `IDCODE`, `SOC`, `FRACSEC` 등을 Byte Offset에 맞춰 표시한다.
- Header Frame은 가변 DATA 영역의 Byte를 ASCII로 결합한다. Data Frame은 Station별 `STAT`, Phasor, Frequency·DFREQ, Analog·Digital을 Configuration에 명시된 Format과 개수에 맞춰 해석한다. Configuration Frame은 2005/2011에 따라 필드와 반복 구조를 달리 표시한다.
- 각 `PacketItem`은 필드명, 길이, 설명, 값, Binary 값을 담는다. `verifyDepth`와 Station 이름을 사용해 실패 위치를 강조하고 DataGridView의 색으로 구분한다. 이는 검증 Engine의 실패 판정 자체가 아니라 **Manager의 진단·표시 기능**이다.
- 근거: `5010bba` → `1f824a2` → `e6b3a41` → `5c9bd55`/`43e87d6` → `894e1bf` → `2f64412` → `e2075cc`, 현행 `ProtocolFailDetailModal.cs`와 `PacketHelper.cs`.

##### 15.3 표현상 주의할 부분

“IEEE C37.118 전체 규격을 검증하는 Engine 개발”은 개인 구현 범위를 넘는다. 근거가 있는 표현은 “IEEE C37.118-2005/2011의 Header·Configuration·Data Frame을 실패 Packet 상세 화면에서 Byte/Field 수준으로 해석·시각화”다. 지원하지 않는 Frame 유형이나 모든 비정상 Case에 대한 완전한 검증률은 시험 결과로 별도 확인해야 한다.

#### 16. 보고서 생성과 후속 정합성 보완

##### 16.1 Manager에서 만든 보고서 내용

- `ReportMain`은 보고서 요약, PMU·접속 정보, `verify_info` JSON의 검증 대상, Scenario Frame, 성공·실패 Protocol 결과를 RDLC DataSource로 구성한다. 검증 Mode일 때만 Scenario 정보를 넣고 운영·Free Mode에서는 해당 목록을 비운다.
- Scenario의 Frame 순서와 `ScenarioFrameIdx`별 결과를 대조해 미실행·실패·성공을 판정한다. 본인 `8f4cb91`은 실행 결과가 없는 Frame을 실패로 표시하도록 수정했다.
- `b1c013d`는 실패 정보 Tab을 열 때 DataGridView를 바인딩하고 `SuspendLayout`/`ResumeLayout`, 커서 상태, Loading Indicator를 적용했다. 실제 로딩 시간의 전후 수치가 없으므로 “N배 성능 개선”은 쓰지 않는다.
- 성공 정보는 `VerifyField`와 `ScenarioFrameIdx` 기준 그룹으로 집계하고 실패가 하나라도 있는 그룹을 성공에서 제외한다. 현재 Data Frame 성공 건의 집계 방식에는 2025-10-18 다른 작성자 `28e2451` 변경이 추가됐다.

##### 16.2 현재 결과를 해석할 때의 경계

`ReportService.GetReportDetail`의 현재 Scenario Frame 정보는 과거 Scenario 정의 자체가 아니라 검증 당시 저장된 `TB_SCENARIO_FRAME_HISTORY`를 사용한다. 이 SQL은 2025-09-29 `e61ceef`의 후속 변경이다. 2026-03-17 `619de97`은 점검 이력의 정상 검증이 실패로 표시되는 경우를 수정했다. 따라서 현재 제품의 최종 보고서·성공 판정 품질을 본인의 2025년 Commit만으로 모두 설명하지 않는다.

#### 17. 이력서·포트폴리오에 쓰기 전 보존할 사례 재료

| 사례 | 해결한 구현 문제 | 본인 변경 증거 | 확인된 결과와 한계 |
|---|---|---|---|
| UI 기술 전환 | WPF 시제품에서 WinForms 제품 구조로 전환 | `37f7c17`, `aa83791`, `a9ae0b2` | 화면·Navigation·데이터 계층 재구축. 전환 이유의 공식 의사결정 문서는 미확인 |
| 동적 Scenario | Frame 수·순서·옵션을 고정 화면 없이 입력 | `94f0626`, `2ad674b`, `96a72b8` | 행 구성·검증·저장 경로 확인. 지원 조합 수 미측정 |
| 검증 실행 연동 | PMU/Scenario 선택을 별도 실행 프로그램의 인자로 변환 | PMU 관련 §5.1 Commit, `a1e9227` | Manager 측 실행·중복 실행 방어 확인. Engine 구현은 별도 저장소 |
| Packet 실패 분석 | Binary Dump를 규격 필드·Station·오류 위치로 해석 | `5010bba`, `e6b3a41`, `894e1bf`, `2f64412` | Byte·Field·Description 화면 확인. 규격 전체 적합성 시험 미확인 |
| 보고서 | 결과·대상·Scenario·실패 내역을 RDLC로 구성 | `6254135`, `c942eed`, `8f4cb91` | 보고서 DataSource·미실행 판정 확인. 최종 SQL은 후속 수정 포함 |
| 화면 대기 | 보고서/실패 탭 로드 때 사용자 상태 표시와 바인딩 시점 조정 | `b1c013d` | 로딩 구조 변경 확인. 시간 절감 수치 미측정 |
| 검증 추적 | 점검 이력에 Capture ID 노출 | `1a5e074` | SQL·Model·Grid 열 변경 확인. Capture ID 생성 주체는 별도 확인 |

이 표는 제출용 축약본이 아니라 사례별 상세 원고를 만들기 위한 증거 색인이다. 정량 수치, 공식 프로젝트 기간, 직접 작성한 Meta 문서는 사용자가 별도 확인하기 전까지 추가하지 않는다.

#### 18. 2026-11-21 배포 산출물 근거 보강

- `02. svt/00. meta/00. svt - development/package/Release_1027.zip`에는 `setup.exe`와 `SVTSetup.msi`가 들어 있다. 같은 package 폴더에는 V1.0 사용자 매뉴얼(본문 날짜 2025-10-23)과 설치 매뉴얼(2025-10-27)이 있다. 이는 **제품 설치 파일과 문서가 준비된 로컬 배포 산출물**의 근거다. 실제 고객 납품·인수·설치 성공·사용 수치는 확인되지 않는다.
- 두 DOCX의 마지막 수정자 메타데이터는 `최소영`으로 기록돼 있다. 사용자에게 저작을 확인받지 않은 이 매뉴얼을 개인 작성 성과로 귀속하지 않는다. 2025-06~07 개인 개발 커밋과 10월 배포 묶음의 시기도 구분한다.
- 설치 매뉴얼에는 Manager·검증 도구·Capture Mode의 3개 실행 구성, MSI/setup 설치·삭제·SQLite 파일 경로와 Capture Mode 필수 라이브러리 점검 절차가 있다. 이 정보는 제품 배포 맥락을 이해하는 데 쓰며 개발 성과의 전후 효과 수치로 사용하지 않는다.

#### 18. 191건 Git 재감사: 전체 목록과 조사 방식

##### 18.1 전수 범위와 재현 가능한 수치

- `mgr` 전체 245건 중 본인 Email 191건의 날짜·제목·변경 파일 경로를 전부 다시 읽고 [커밋 전수 목록](#git)에 날짜순으로 남겼다. 2025년 6월 70건·7월 121건이다.
- `git log --numstat`의 숫자 변경량 합계는 +91,460/-63,606줄로 기존 문서 값과 일치했다. `git log --name-only`에서 Commit별 변경 경로 출현은 총 2,395회다(6월 818회, 7월 1,577회). 같은 파일의 반복 수정과 Rename, Designer·Resource·DB가 섞이므로 고유 구현 파일 수나 생산성으로 변환할 수 없다. 기존 §1의 “변경 파일 943개”는 이 재현 가능한 집계와 맞지 않아 수정했다.
- Commit 제목 중 “디자인” 25건, “리팩토링” 19건, “수정” 83건 등은 서로 겹친다. 제목만으로 작업 종류를 확정하지 않고 변경 경로·Patch·현행 구현을 함께 봤다. `Initial commit`, 임시 저장, 기능 미구현, 오류 수정 전처럼 제목 자체가 완성된 산출물을 뜻하지 않는 Commit은 단독 성과로 사용하지 않는다.
- 1차: 191건의 메타데이터·경로와 시기별 흐름 확인. 2차: 기존 문서에서 인용하지 않은 Commit 중 설정·Free Mode·화면 구조·Packet 표시·보고서 의미가 달라지는 Patch 확인. 3차: 2026년 현재 코드와 후속 작성자 Commit을 대조해 개인 구현과 최종 제품 동작의 경계를 재판정했다. 전수 대상은 **Commit 메타데이터와 변경 경로**이며 191건의 모든 변경 줄을 동일 깊이로 읽었다는 뜻은 아니다.

##### 18.2 일자별 흐름에서 확인한 누락 영역

| 시기 | Git에서 드러난 연쇄 | 이번에 추가 확인한 관점 |
|---|---|---|
| 6월 17~20일 | WPF 초기 화면·Repository·Free Mode 선택 → WPF 파일 제거 → WinForms 프로젝트 생성 | `9508e97`의 Free Mode 추가는 초기 WPF 시제품의 표시 옵션과 Test 데이터 변경. 최종 Mode 실행 전체를 이 Commit 하나로 설명하지 않음 |
| 6월 21~30일 | History·PMU 화면, Service·Helper·Navigation, Scenario 목록·등록 UI | 단순 화면 캡처가 아니라 화면 이동과 DB Service 연결이 누적됨 |
| 7월 1~14일 | Scenario Frame 행, Mode별 보고서 화면, PMU 등록·수정, 공통 Grid·Pagination, 여러 차례 구조 변경 | `c03b74a`에서 일부 비동기 흐름을 동기로 돌린 변경도 있어 “일관된 비동기 설계”라고 일반화하지 않음 |
| 7월 15~22일 | RDLC DataSource, PMU·Scenario 검증, 결과 분리, 실패 Grid·Modal, DB/실행 경로 설정 | 실행·보고서 경로와 화면의 데이터 연결이 강화된 구간 |
| 7월 23~29일 | Packet의 2005/2011 표시 확장, Field 설명·값 수정, 보고서 판정, Form 재사용, Capture ID, 실패 Tab 로딩 | 한 번의 Parser 구현 뒤 종료가 아니라 표시 형식·Offset·Station·결과 의미를 여러 차례 보정 |

#### 19. 기존 문서에 부족했던 변경 연쇄와 기술적 의미

##### 19.1 설정값을 코드 밖으로 옮긴 과정

- `f41c78f`에서 SQLite 연결 문자열을 프로젝트 위치를 조합하는 코드에서 `App.config`의 `connectionStrings`로 옮기고 `ConfigurationManager`로 읽었다. 당시 Patch의 로컬 경로 문자열은 개발 환경값이며 이 경력 문서에 복제하지 않는다.
- `a1e9227`은 SVT 실행 파일 경로를 코드 상수의 고정 경로에서 `App.config`의 `SVTExePath` 설정값으로 바꿨다. 동시에 Manager의 실행 인자를 `verify`(검증 연결 ID+Scenario ID), `oper`(운영 연결 ID), `free`(검증 연결 ID)로 구분하고 운영 Mode 문자열을 실행 프로그램 계약에 맞춰 정리했다.
- 현재 `DatabaseConfig.CreateConnection()`도 `ConfigurationManager.ConnectionStrings`를 사용하고 `AppConstant.SVTExePath`는 `AppSettings`에서 읽는다. 설정 Key·DB 배치 방식은 이후 작성자의 변경을 포함하므로 2025년 Patch의 구체 경로를 현재 배포 구조로 소개하지 않는다.
- **경력 소재:** 실행 환경 의존 경로를 코드와 분리하고 Mode별 Manager→검증 프로그램 인자를 명확히 한 일. 설치 패키지 또는 배포 자동화 전체를 담당했다고 확장하지 않는다.

##### 19.2 Free Mode를 정확한 기여 단계로 설명

- `9508e97`은 초기 WPF 시제품의 검증 종류 선택 목록과 테스트 데이터 생성에 Free Mode를 추가했다. 이 Commit만으로 Free Mode 검증 로직 전체의 구현을 증명할 수 없다.
- 이후 WinForms `PMUMain`에는 `verify`·`oper`·`free` 버튼과 Mode별 실행 인자가 존재한다. `a1e9227` Patch는 `free` 실행 시 검증 연결 ID를 사용하도록 분기했다. `419dc15`에서는 운영·Free Mode 보고서에서 Scenario 정보 영역을 숨기는 처리가 추가됐다.
- **경력 소재:** 세 Mode의 설정·실행·결과 표시를 Manager UI에 연결. 별도 검증 Engine 안에서 각 Mode가 어떤 Packet 검사를 수행하는지는 개인 작업으로 주장하지 않는다.

##### 19.3 구조 변경의 실제 횟수와 성격

- WPF→WinForms 전환 뒤에도 `8eb685d`에서 서브페이지를 `UserControl`로 바꾸고, `9f67181`에서 Model·Service·View·Component로 큰 규모의 경로 이동과 역할 분리를 수행했으며, `7739f46`에서 재사용 인스턴스와 `RefreshForm` 흐름을 도입했다. `788902d`는 7월 29일 파일 구조를 다시 정리한 Commit이다.
- 이 과정에서 파일 이동 Commit의 추가·삭제 줄은 새 기능량과 다르다. 예를 들어 `9f67181`은 66개 경로를 건드리지만 상당 부분은 이름 변경·폴더 이동이다. `c03b74a`는 여러 화면·Service의 비동기 호출을 동기로 바꾼 30개 파일 변경이다. 각 대형 Commit을 단순 “기능 66개 추가”나 “비동기 성능 최적화”로 설명하지 않는다.
- **경력 소재:** 여러 번 변하는 화면 요구에 맞춰 View·Service·Model 분리와 Form 이동·재사용 구조를 정돈했다. 공식 설계 결정 이유나 속도 개선 수치는 확보되지 않았다.

##### 19.4 Packet 설명을 고쳐 간 구체 사례

- `0f8c8a2`는 Header Frame DATA를 Byte마다 한 글자씩 나열하던 화면을 가변 길이의 하나의 ASCII 문자열과 Binary 영역으로 합쳤다. 필드의 의미를 사용자가 한 번에 읽도록 표시 단위를 바꾼 사례다.
- `be2c76d`는 `FRACSEC` 값 계산에서 읽는 Byte Offset을 수정했다. Byte 단위 Parser에서는 표시 Offset이 한 칸만 어긋나도 실제 값이 달라지므로 단순 문구 수정과 구분한다.
- `8141a79`, `89379e0`, `c30a917`, `35aa0ee`, `0898fa6`, `b0c05e3`은 Configuration 2/3·Data Frame의 Field 설명, Value와 표시 형식을 연속 보정했다. `e2075cc`는 전체 Packet DataGridView의 최종 표시를 조정했다.
- 이 연쇄는 “IEEE 전 규격 적합성 증명”이 아니라 **실패 결과를 읽는 Manager 화면의 필드 해석과 표현 품질을 높인 변경 과정**이다. 별도 검증 Engine의 Packet 판정 코드는 이 근거에 포함되지 않는다.

##### 19.5 보고서에서 빈 결과의 의미와 Mode 차이

- `419dc15`는 Scenario가 없는 운영·Free Mode에서 Scenario 표를 숨겼다. 보고서의 빈 칸이 누락처럼 보이지 않게 검증 Mode와 표시 영역을 맞춘다.
- `8f4cb91`은 Scenario Frame별 결과가 0건이면 실패로 보이도록 수정했다. 이는 LINQ의 빈 집합에 대한 `All(success)`가 참이 되는 동작 때문에 미실행 Frame이 성공처럼 해석될 수 있는 경계를 막는 변경이다.
- `b1c013d`는 보고서 실패 Tab을 선택할 때 Grid 바인딩을 수행하고 로딩 상태를 표시했다. 현재 코드에서는 `isFailTabLoaded` 변수가 있지만 Tab 변경 조건의 “이미 로딩됨” 검사가 주석 처리되어 있다. 따라서 현재 제품이 실패 Tab을 최초 한 번만 바인딩한다고 소개하지 않는다. UI 작업을 `Task.Run`으로 감쌌지만 실제 Grid 바인딩은 `Invoke`로 UI Thread에서 실행되므로 비동기 계산·성능 개선을 수치 없이 주장하지 않는다.
- 이후 다른 작성자의 `28e2451`과 `a48ff38` 등이 보고서 집계·초기화를 다시 수정했다. 제출 자료에서는 본인 시기의 변경과 최종 제품의 후속 안정화를 분리한다.

#### 20. 두 문서에 반영할 검증된 소재와 제외할 표현

| 분류 | 사용할 내용 | 보류·제외할 내용 |
|---|---|---|
| 개인 범위 | `mgr` Manager 화면·Service·Packet 진단·보고서와 별도 검증 프로그램 실행 연동 | `cm`·`tool`의 Engine, `setup` 설치 프로젝트를 개인 직접 개발로 귀속 |
| 프로토콜 | 2005/2011 Packet 실패 상세 화면의 Field·Byte·값·설명 표시와 수정 연쇄 | IEEE C37.118 전체 규격 판정 Engine 구현·완전한 적합성 검증 |
| 화면 구조 | WPF 시제품 제거, WinForms 재구축, 다차례 Navigation·UserControl·Form 재사용 개선 | 전환의 공식 이유, 개선율·속도 수치 |
| 설정·실행 | DB/실행 파일 경로를 설정으로 분리하고 Mode별 실행 인자 구성 | 최종 배포 패키지 전체 소유, Engine 내부 Mode 구현 |
| 보고서 | Mode별 Scenario 표, 미실행 실패 처리, 실패 Tab 로딩 상태 | 현재 제품의 최종 SQL·성공 판정 전체를 본인 구현으로 표기 |
| 문서 | Git·코드로 확인된 작업만 개인 경력에 사용 | Meta 매뉴얼·프로토콜 정의서 직접 작성 주장 |

[SVT 사람인·Figma 제작 원고](#materials)는 이 사실과 경계를 유지하면서 후속 갱신한다.

#### 21. 현재 `mgr` Source 전수 목록에서 확인한 역할 분리

Designer·빌드 산출물을 제외한 `.cs` 48개를 파일명과 메서드 선언 단위로 훑었다. 이 숫자는 분석 범위의 크기이지 개인 작성량이 아니다. 각 파일의 최종 줄은 후속 작성자 변경을 포함할 수 있다.

| 영역 | 현행 주요 파일 | 맡은 기능·추적 관점 |
|---|---|---|
| 앱 Shell | `SynchrophasorMgr.cs`, `Program.cs` | 메뉴 전환, 이전 화면 복귀, Form 생성·재사용, 데이터 변경 알림, 종료 시 프로세스 상태 |
| Data Access | `DatabaseConfig.cs`, `PMUService.cs`, `ScenarioService.cs`, `HistoryService.cs`, `ReportService.cs` | SQLite 연결, PMU/Scenario 저장, 필터·페이지네이션, 보고서 원본·결과 조회 |
| PMU | `PMUMain.cs`, `PMUUpsert.cs` | PMU 선택·검색·Mode별 실행, 연결 정보와 UDP 옵션 입력 |
| Scenario | `ScenarioMain.cs`, `ScenarioUpsert.cs`, `ScenarioFrameDataRow.cs` | Scenario 검색·삭제, Frame 행 추가·삭제·순서·옵션 편집 |
| 결과 | `HistoryMain.cs`, `ReportMain.cs`, `AuditReportTemplate.rdlc` | 점검 이력과 Capture ID, ReportViewer, 실패 목록·Modal 이동 |
| Packet | `ProtocolFailDetailModal.cs`, `PacketHelper.cs`, `PacketItem.cs` | IEEE Frame·Version별 Byte 해석과 Field 설명·오류 강조 |
| 공통 UX | `PaginationControl.cs`, `DataGridViewPagination.cs`, `DataGridViewHelper.cs`, `LoadingIndicator.cs`, `ComboBoxHelper.cs` | 목록 이동, Grid 표시, 선택값·로딩 상태 |
| 연결 입력 | `NetworkInterfaceHelper.cs`, `ValidationHelper.cs` | 사용 가능한 네트워크 인터페이스 목록, IPv4·Port 입력 검사 |

`mgr`에서 별도 Unit Test 프로젝트나 이름에 `Test`가 포함된 소스 파일은 이번 파일 목록에서 확인되지 않았다. 따라서 실제 검증 통과율·성능 개선은 Commit과 화면 코드만으로 입증하지 않는다.

#### 22. PMU·Scenario 입력과 이력 보존의 추가 근거

##### 22.1 PMU의 검증 연결과 운영 연결을 분리한 저장

- `PMUUpsert`는 PMU 이름·제조사·PMU ID·IEEE Version과 검증/운영 Mode의 IP·Port·Network Interface를 입력받는다. 검증 연결은 TCP 또는 UDP, Source IP 및 Alternate Channel 옵션을 가지며 운영 연결은 TCP로 저장한다. `PMUService`는 기본 PMU와 각 Mode 연결 레코드를 별도로 저장·수정한다.
- 이름 중복은 수정 대상 자신을 제외하고 검사한다. PMU ID는 숫자, 연결 IP는 IPv4 형식, Port는 Helper가 검사한다. 선택한 NIC는 Loopback/Tunnel을 제외한 활성 인터페이스 목록과 기본 항목에서 고를 수 있다.
- 개인 근거는 `104546f`(운영 Mode 분리), `c8f63d9`·`66d2fe6`·`17ec480`(PMU 입력·NIC·검증), `ed4e728`(중복 검사), 현행 `PMUUpsert.cs`, `NetworkInterfaceHelper.cs`, `PMUService.cs`와 주요 줄의 `git blame`이다.
- **정확성 경계:** 현행 `PMUUpsert`의 Alternate IP 검사 조건은 `tbxAlternateIP`의 빈 값과 `tbxOperationIP`의 IPv4 유효성을 결합한다. 따라서 “모든 네트워크 입력의 완전한 검증”이라고 쓰지 않는다. `ValidationHelper.IsValidPort`도 0~65535 범위를 허용하므로 제품 외부 규격 준수까지 주장하지 않는다.

##### 22.2 Scenario 삭제 시 보고서 참조를 고려한 분기

- `ScenarioService.DeleteScenario`는 하나의 DB Transaction에서 해당 Scenario를 참조하는 `TB_REPORTS` 건수를 먼저 조회한다. 사용 이력이 있으면 `TB_SCENARIO`만 삭제하고, 없으면 `TB_SCENARIO_FRAME`을 먼저 삭제한 뒤 `TB_SCENARIO`를 삭제한다. 실패 시 Rollback한다.
- 이 분기의 핵심 SQL과 조건은 `4cb4b0f`의 본인 변경으로 현재 코드 `git blame`에서 확인했다. 현재 보고서가 검증 당시 Frame 정보를 읽는 `TB_SCENARIO_FRAME_HISTORY` 경로는 2025-09-29 다른 작성자 `e61ceef`의 후속 변경이다. 삭제 정책과 최종 보고서 이력 모델을 같은 시기의 개인 설계로 합치지 않는다.
- 제출용 설명은 “검증 이력의 존재 여부에 따라 Scenario 삭제 범위를 달리하고 DB Transaction으로 처리”가 정확하다. 이 구현만으로 과거 모든 보고서가 항상 완전하게 보존된다는 효과는 증명되지 않는다.

##### 22.3 Scenario 수정의 행 단위 교체 방식

- `ScenarioService.CreateScenario`는 Scenario를 삽입하고 생성 ID로 Frame 목록을 같은 Transaction에서 삽입한다. `UpdateScenario`는 이름을 갱신한 뒤 기존 Frame 행을 삭제하고 화면에서 전달된 순서·옵션의 Frame 목록을 다시 삽입한다. 저장 실패 시 Rollback한다.
- 화면의 Frame 추가·삭제·재정렬(`ScenarioUpsert.cs`)과 이 DB 교체 방식이 함께 작동한다. “개별 Frame의 변경분만 부분 업데이트”라고 소개하면 현재 코드와 다르다.
- 근거: `6625e48`, `94f0626`, `2ad674b`, `96a72b8`, 현행 `ScenarioService.cs`·`ScenarioUpsert.cs`.

<a id="materials"></a>

## 지원서 제작 원고

바이너리 Frame을 운영자가 해석할 수 있게 만든 과정과 WPF에서 WinForms로 전환한 사례를 사용한다. 규격 전체 적합성·납품 검수는 별도 확인 항목이다.

### SVT Manager 이력서·포트폴리오 제작 원고

> 사용처: 사람인 이력서 입력, Figma 포트폴리오 제작, 면접 사례 선택. [상세 근거 문서](#evidence)에 조사 내용과 Git 증거를 보존한다. 이 문서의 문장과 화면 원고는 제출용 후보이며 공식 참여 기간·고객 검수·정량 성과는 확인 뒤 확정한다.

#### 1. 프로젝트 카드

| 항목 | 바로 쓸 수 있는 내용 | 근거·경계 |
|---|---|---|
| 프로젝트명 | SVT Synchrophasor Verification Tool Manager 개발 | `mgr` 저장소·프로젝트 파일 |
| 한 줄 소개 | PMU의 IEEE C37.118 검증 설정·실행·결과 분석·보고서를 관리하는 Windows 데스크톱 애플리케이션 | 제품 흐름과 Manager 코드 |
| Git 활동 기간 | 2025.06.17~2025.07.29 | 본인 Author Commit 기간. 공식 프로젝트 투입 기간은 미확인 |
| 담당 영역 | `mgr`의 PMU·Scenario·점검 이력·실패 Packet 분석·RDLC 보고서 화면과 데이터 처리 | 본인 Commit 191건·대표 Patch·현행 코드 대조 |
| 기술 | C#, .NET Framework 4.8, Windows Forms, SQLite, Dapper, ReportViewer/RDLC | `SynchrophasorMgr.csproj`, Service·View 코드 |
| 협업 경계 | 별도 SVT 검증 실행 프로그램을 Manager에서 실행·연동 | `tool`·`cm`·`setup` 저장소의 본인 Email Commit은 0건. Engine·PMU Firmware는 본인 구현으로 표기하지 않음 |
| 문서 경계 | 프로토콜 정의서·매뉴얼은 개인 작성 성과로 표기하지 않음 | 사용자 요청에 따라 이번에는 `00. meta` 본문 심층 조사 제외 |

#### 2. 사람이 읽는 프로젝트 설명

##### 2.1 이력서 소개 문장

**기본형:** “IEEE C37.118 기반 PMU 검증 업무를 지원하는 Windows Manager를 개발했습니다. PMU·Scenario 설정부터 별도 검증 프로그램 실행, 검증 이력·실패 Packet 분석, RDLC 보고서 출력까지 하나의 데스크톱 화면 흐름으로 연결했습니다.”

**역할 강조형:** “SVT 프로젝트에서 Manager 애플리케이션을 담당했습니다. C# WinForms·SQLite/Dapper 기반으로 PMU·Scenario 관리, 검증 이력 조회, 실패 Packet의 IEEE 필드별 분석 화면, ReportViewer 보고서 기능을 개발했습니다.”

**기술 전환형:** “초기 WPF 시제품을 WinForms 애플리케이션 구조로 전환하며 화면 탐색, Form 재사용, 데이터 접근 계층을 재구축했고, PMU 검증 설정과 결과 확인 기능을 확장했습니다.”

##### 2.2 사람인 담당 업무 입력 원고

> C#/.NET Framework 4.8 기반 SVT Manager 개발. PMU 연결 정보와 검증 Scenario의 등록·수정·검색·입력 검증, Mode별 별도 SVT 실행 프로그램 연동, 검증 이력·Capture ID 조회, 실패 Packet의 IEEE C37.118-2005/2011 필드·Byte·Binary 분석 UI, ReportViewer/RDLC 검증 보고서 구현. WPF 시제품에서 WinForms 구조로 전환하고 Form 탐색·재사용과 로딩 화면을 개선.

##### 2.3 담당 업무를 분리해 입력할 때

- **데스크톱 앱 구조:** WPF·MVVM 시제품의 WinForms 전환, 메뉴 이동·이전 화면 복귀·Form 재사용·공통 UI Helper 구성.
- **검증 대상·조건 관리:** PMU 연결 정보, TCP/UDP별 입력 제약, 중복 검사, Scenario Frame의 동적 추가·삭제·순서·검증 옵션 입력.
- **검증 실행 연동:** Manager에서 PMU·Scenario와 검증 Mode를 선택해 별도 SVT 실행 프로그램에 인자를 전달하고 중복 실행 상태를 확인.
- **결과 추적:** PMU·기간·Mode·Scenario·결과별 이력 검색과 페이지네이션, Capture ID 표시, 보고서 화면 이동.
- **실패 원인 확인:** Packet 데이터를 IEEE Frame 유형·Version·Station별로 해석해 필드명, 길이, 값, Binary, 설명과 오류 위치를 표시.
- **보고서:** 검증 대상·Scenario·성공·실패 결과를 RDLC DataSource로 구성하고 미실행 Frame의 실패 표시 및 실패 정보 탭 로딩 흐름 보완.

#### 3. 사람인 성과 문장 후보

아래는 코드에서 확인한 **구현 결과**를 설명하는 문장이다. 처리 속도·정확도·운영 시간의 수치 성과로 바꿀 때는 측정 자료가 필요하다.

1. “PMU·Scenario 설정부터 검증 실행과 이력·보고서 확인까지 이어지는 Manager의 주요 화면과 데이터 흐름을 구현했습니다.”
2. “WPF 시제품을 WinForms 구조로 전환하면서 화면 탐색, Form 재사용, 서비스·데이터 연결 방식을 다시 구성했습니다.”
3. “Scenario의 Frame 행을 동적으로 추가·삭제·정렬하고 검증 시간·오류 허용 등 옵션의 입력 조건을 검사하도록 구현했습니다.”
4. “실패 Packet을 IEEE C37.118-2005/2011의 Frame·Byte·Field 단위로 펼쳐 보여주는 상세 화면을 개발해 검증 결과의 실패 위치를 확인할 수 있게 했습니다.”
5. “검증 이력의 Capture ID와 조건별 검색·페이지네이션을 연결하고 결과에서 보고서로 이동하는 흐름을 구현했습니다.”
6. “RDLC 보고서에 검증 대상, Scenario, Protocol 성공·실패 정보를 구성하고 미실행 Frame의 결과 표시를 보완했습니다.”
7. “보고서와 실패 정보 화면의 로딩 시점·사용자 상태 표시를 조정해 대량 결과를 다루는 화면의 대기 흐름을 개선했습니다.”

##### 3.1 짧은 공간에 넣을 3개 핵심 Bullet

- C# WinForms·SQLite/Dapper 기반 PMU 검증 Manager의 PMU·Scenario·이력·보고서 기능 개발.
- IEEE C37.118-2005/2011 실패 Packet을 Byte·Field·Station 단위로 표시하는 진단 UI 구현.
- WPF 시제품의 WinForms 전환과 RDLC 보고서·화면 재사용 구조 구축.

##### 3.2 기술별 기여 설명

| 기술 | 이력서에 붙일 실제 작업 |
|---|---|
| C#·WinForms | PMU·Scenario·이력·보고서 Form과 Navigation·공통 Control 구현 |
| SQLite·Dapper | PMU·Scenario·보고서·검증 결과 조회 및 저장 Service 구성 |
| IEEE C37.118 | Packet 상세 화면에서 2005/2011 Version과 Header·Configuration·Data Frame 필드 해석 |
| ReportViewer·RDLC | 검증 대상·시나리오·성공/실패 DataSource와 보고서 레이아웃 연결 |
| Windows Process | Manager 선택값을 별도 SVT 검증 프로그램 실행 인자로 전달 |
| WPF·MVVM | 초기에 사용한 시제품 기술. 최종 Manager 주 기술은 WinForms |

Entity Framework 6은 프로젝트 패키지 참조로 확인되지만 핵심 데이터 접근 코드는 Dapper Service다. 이력서의 주 기술로 강조할 때는 실제 사용 범위를 추가 확인한다.

#### 4. Figma 포트폴리오용 8장 구성

| 장 | 제목 | 한 화면에 보여줄 핵심 자료 | 본인 역할 표시 |
|---:|---|---|---|
| 1 | 프로젝트 소개 | PMU 검증 업무, Manager의 목적, 기간·기술 | `mgr` 담당, 공식 기간 확인 전 Git 활동 기간으로 표기 |
| 2 | 제품 흐름과 책임 경계 | PMU/Scenario 설정 → 별도 SVT 실행 → DB 결과 → 이력·실패 상세·보고서 | Manager 화면·Service를 강조, Engine·PMU는 협업 영역 |
| 3 | 기술 전환 | WPF 시제품 → 파일 제거 → WinForms 재구축 → Form 탐색·재사용 | 본인 Commit 연쇄와 구현 선택 |
| 4 | 검증 조건 구성 | PMU 연결 정보와 Scenario Frame 행·옵션·순서 화면 | 입력·Validation·저장 흐름 |
| 5 | 검증 실행과 결과 추적 | Mode별 실행 인자, 이력 검색, Capture ID, 보고서 이동 | Manager와 별도 실행 프로그램의 접점 |
| 6 | 실패 Packet 분석 | Packet 원문 → IEEE Version/Frame → Byte/Field → 실패 강조 | Manager의 분석 UI와 표시 로직 |
| 7 | 보고서 | RDLC DataSource, Scenario별 결과, 미실행 Frame, 실패 목록 | 본인 구현과 이후 SQL 보완의 경계 |
| 8 | 결과·회고 | 구현한 업무 흐름, 검증 가능한 산출물, 미측정 성과와 추가 확인 항목 | 과장 없는 기여 범위 |

##### 4.1 장별 화면 문구

**1장 — 프로젝트 소개**

> “SVT Manager는 PMU 검증 조건을 구성하고 별도 검증 프로그램의 결과를 추적·분석·보고하는 Windows 데스크톱 애플리케이션입니다. 저는 Manager의 화면과 데이터 흐름을 담당했습니다.”

**2장 — 제품 흐름**

> “사용자는 Manager에서 PMU 연결과 Scenario를 설정합니다. Manager가 검증 Mode와 대상 ID를 별도 SVT 실행 프로그램에 전달하고, 저장된 결과를 이력·실패 Packet·보고서 화면에서 다시 확인합니다.”

**3장 — 기술 전환**

> “초기 WPF·MVVM 시제품을 제거하고 WinForms 화면을 다시 구축했습니다. Form 탐색, 이전 화면 복귀, 데이터 변경 후 새로고침과 재사용 인스턴스가 필요한 데스크톱 작업 흐름을 정리했습니다.”

**4장 — 검증 조건**

> “Scenario는 정해진 한 장의 입력 Form이 아니라 순서와 옵션이 다른 Frame들의 목록입니다. Frame 행을 동적으로 구성하고 입력값·중복·순서를 검증해 저장하도록 구현했습니다.”

**5장 — 실행과 이력**

> “Manager는 `verify`·`oper`·`free` Mode별로 필요한 연결 ID와 Scenario ID를 검증 프로그램에 전달합니다. 사용자는 이력 검색, Capture ID, 보고서 링크를 통해 한 번의 검증을 다시 추적할 수 있습니다.”

**6장 — 실패 Packet**

> “Binary 덤프만으로는 실패 지점을 찾기 어렵습니다. Packet을 8비트 Byte로 나누고 IEEE Version·Frame Type·Station 설정에 따라 Field, 길이, 값, 설명을 보여주며 실패 위치를 강조했습니다.”

**7장 — 보고서**

> “검증 대상과 Scenario Frame, Protocol 성공·실패 결과를 RDLC 보고서로 구성했습니다. 실행 결과가 없는 Frame을 성공처럼 보이지 않도록 표시 규칙을 보완했습니다.”

**8장 — 결과·회고**

> “Manager에서 검증 조건 생성부터 결과 원인 확인과 보고까지 이어지는 흐름을 구현했습니다. 실제 검증 Engine의 판정 로직과 이후 작성자의 운영 수정은 제 개인 기여와 구분했습니다.”

##### 4.2 Figma에 넣을 시각 자료 명세

- **시스템 경계 그림:** `Manager UI → Manager Service/SQLite → 별도 SVT 실행 프로그램 → 검증 결과 DB → Manager 이력·실패 상세·보고서`. 화살표는 실제 코드를 확인한 방향으로 표시한다. 별도 프로그램의 내부 알고리즘은 그리지 않는다.
- **전환 타임라인:** `dd40821` WPF 초기 → `37f7c17` WPF 제거 → `aa83791` WinForms 기본 화면 → `7739f46` Form 재사용. Git Hash는 내부 제작 근거로 보관하고 공개 화면에는 날짜·변경 내용만 선택적으로 쓴다.
- **Scenario 화면:** Frame 행의 추가·삭제·순서와 Data Frame 검증 시간·Timeout·허용 오류 수 입력을 간단한 와이어프레임으로 재구성한다.
- **Packet 분석 화면:** 개인정보·고객 Packet 원본을 쓰지 말고 임의 예시 Byte를 만들어 `SYNC`, `FRAMESIZE`, `IDCODE`, `SOC`, `FRACSEC`가 Field 표에 연결되는 모형을 그린다. 예시 데이터는 실제 검증 결과처럼 표시하지 않는다.
- **보고서 화면:** 요약 → 검증 대상 → Scenario → 성공/실패 목록의 구성을 카드로 표현한다. 내부 DB 값, PMU 주소·식별자는 공개하지 않는다.

#### 5. 문제 해결 사례 원고

##### 5.1 WPF에서 WinForms로 전환

- **상황:** 초기 Manager는 WPF·MVVM으로 PMU·Scenario·이력의 기본 화면과 Repository를 시도했다.
- **작업:** WPF 코드를 제거하고 WinForms 프로젝트·기본 레이아웃, DB 연결, Service, Form Navigation을 다시 구축했다.
- **구현 결과:** 현재 Manager의 주 화면은 WinForms `UserControl`이며 PMU·Scenario·History·Report 화면으로 구성된다.
- **근거:** `dd40821`, `b6bacec`, `37f7c17`, `aa83791`, `a9ae0b2`, `15e061f`.
- **발표 문장:** “화면 프레임워크 교체에 그치지 않고 데이터 연결과 화면 수명주기를 제품 흐름에 맞게 다시 구성했습니다.”
- **경계:** 전환의 공식 의사결정 이유나 전후 생산성 수치는 확인되지 않았다.

##### 5.2 동적 Scenario와 입력 규칙

- **상황:** 검증 Scenario마다 요청할 Frame과 순서, Data Frame의 검증 옵션이 달라진다.
- **작업:** Frame 행 추가·삭제, 순서 갱신, 기존 데이터 재배치, Scenario 이름 중복 검사, 시간·오류 허용 등의 옵션 검증을 연결했다.
- **구현 결과:** 화면에서 Frame 목록을 구성하고 저장 전에 입력 조건을 검사한다.
- **근거:** `94f0626`, `2ad674b`, `96a72b8`, `562d49d`, 현재 `ScenarioUpsert.cs`.
- **발표 문장:** “변동 가능한 검증 절차를 Frame 행과 옵션의 조합으로 모델링해 Scenario 생성·수정 화면에 적용했습니다.”

##### 5.3 실패 Packet의 Field 수준 진단

- **상황:** 실패 결과의 Packet Data만 보여주면 어떤 IEEE 필드에서 문제가 생겼는지 바로 찾기 어렵다.
- **작업:** Packet Bit를 Byte로 분리하고 Version·Frame Type에 따라 Common/Header/Configuration/Data 필드를 펼쳤다. Station과 `verifyDepth`를 연결해 실패 위치를 강조했다.
- **구현 결과:** 필드명·길이·설명·Value·Binary와 실패 표시를 한 화면에서 확인한다.
- **근거:** `5010bba`, `e6b3a41`, `43e87d6`, `894e1bf`, `2f64412`, 현재 `ProtocolFailDetailModal.cs`.
- **발표 문장:** “별도 검증 프로그램이 남긴 실패 Packet을 Manager에서 규격 필드 단위로 해석해 원인 확인 화면으로 만들었습니다.”
- **경계:** 실패 판정 Engine 자체를 개발했다고 표현하지 않는다.

##### 5.4 보고서 결과 정합성과 로딩 흐름

- **상황:** Scenario Frame에 실행 결과가 없거나 실패 정보가 많은 경우 보고서의 의미와 화면 대기가 중요하다.
- **작업:** 결과가 없는 Frame을 실패로 표시하고, 실패 정보 Tab 선택 시 DataGridView 바인딩과 Loading 상태 표시를 조정했다.
- **구현 결과:** RDLC DataSource에 검증 대상·Scenario·성공/실패 결과를 제공하고 실패 목록 화면의 로딩 흐름을 제어한다.
- **근거:** `6254135`, `8f4cb91`, `b1c013d`, 현재 `ReportMain.cs`.
- **발표 문장:** “보고서에서 미실행 결과를 실패로 구분하고 실패 목록의 로딩 과정을 사용자에게 표시하도록 개선했습니다.”
- **경계:** 현재의 시나리오 이력 조회·성공 판정 SQL은 이후 다른 작성자의 변경이 포함된다. 로딩 시간 개선 수치는 미측정이다.

##### 5.5 검증 이력의 추적성

- **상황:** 검증 결과를 PMU·Scenario·시간·결과와 함께 찾고 동일 Capture를 식별해야 한다.
- **작업:** 조건별 검색·페이지네이션과 보고서 이동을 만들고 `CaptureGuid`를 SQL 조회, UI Model, Grid 열에 추가했다.
- **구현 결과:** 점검 이력 목록에서 Capture ID를 확인할 수 있다.
- **근거:** `e1aa9c1`, `fe7ed6f`, `1a5e074`, 현재 `HistoryService.cs`·`HistoryIterm.cs`·`DataGridViewHelper.cs`.
- **발표 문장:** “검증 이력에 Capture ID를 노출하고 조건별 검색과 보고서 이동을 연결해 결과 추적 경로를 구성했습니다.”
- **경계:** Capture ID 생성 로직과 현재 최종 성공 판정 SQL은 본인 구현으로 단정하지 않는다.

#### 6. 면접에서 역할을 설명하는 문장

- “제가 집중한 저장소는 `mgr`입니다. PMU 검증 Engine은 별도 실행 프로그램이며, Manager에서 대상·Mode·Scenario를 전달하고 결과를 사용자에게 분석·보고하는 기능을 개발했습니다.”
- “프로토콜 정의서를 새로 제정하거나 모든 이상 Packet을 판정하는 Engine을 만든 것은 아닙니다. 저장된 실패 Packet을 IEEE 필드와 Byte 단위로 읽어 볼 수 있는 Manager UI를 구현했습니다.”
- “WPF에서 WinForms로 전환한 뒤에도 PMU·Scenario·이력·보고서 화면이 하나의 업무 흐름으로 작동하도록 Form 재사용·탐색과 데이터 계층을 정리했습니다.”
- “보고서의 원본 결과와 시나리오 순서를 대조해 미실행 Frame을 실패로 표시했습니다. 이후의 결과 집계 SQL 수정은 다른 작성자의 작업입니다.”

#### 7. 근거·공개 전 확인

| 확인할 항목 | 현재 상태 | 제출 문장에 미치는 영향 |
|---|---|---|
| 공식 참여 기간·직무·팀 구성 | Git 활동 2025.06.17~07.29만 확인 | 공식 기간 확인 전에는 Git 활동 기간으로 표기 |
| 고객 사용·납품·검수 | 자료 미확인 | “납품 완료”, “현장 검수 통과” 사용 보류 |
| 지원 Frame·검증 항목 수 | 코드·정의서만으로 확정 불가 | “전 규격 완전 지원”, “N개 Case 검증” 사용 보류 |
| 보고서·화면 성능 | 전후 계측 미확인 | “N배 개선”, “N초 단축” 사용 보류 |
| 매뉴얼·프로토콜 정의서 작성자 | 사용자 확인 없음 | 본인 작성 문서로 기재하지 않음 |
| 2025년 이후 `mgr` 개선 | 다른 작성자 Commit 존재 | 현재 기능과 본인 구현을 나눠 설명 |
| 화면 캡처·Packet·DB 데이터 | 내부 정보 포함 가능 | 공개본은 가상 데이터와 재구성 화면 사용 |

내부 검증 시 [상세 근거 문서](#evidence) §12~20의 Commit·현행 코드 경로를 확인한다. 사람인 문장은 §2~3·8에서 선택하고, Figma 제작 세션은 §4~5·8의 장 구성·시각 자료·사례를 사용하면 된다.

#### 8. 191건 재감사에서 추가한 이력서·포트폴리오 소재

##### 8.1 설정·실행 계약

**사람인 문장:** “Manager의 SQLite 연결 경로와 SVT 실행 파일 경로를 설정값으로 분리하고, 검증·운영·Free Mode별 PMU 연결 ID와 Scenario ID를 별도 실행 프로그램에 전달하도록 구성했습니다.”

**포트폴리오 장면:** 5장의 실행 흐름 옆에 `설정 파일 → Manager → Mode별 실행 인자 → SVT 실행 프로그램`을 작은 그림으로 추가한다. `verify`는 검증 연결과 Scenario, `oper`는 운영 연결, `free`는 검증 연결을 사용한다. 실제 파일 경로·IP는 예시값으로 대체한다.

**근거:** `f41c78f`, `a1e9227`, 현재 `DatabaseConfig.cs`·`AppConstants.cs`·`PMUMain.cs`. 당시와 현재의 설정 Key·배포 방식은 후속 변경을 포함하므로 동일하다고 설명하지 않는다.

##### 8.2 보고서의 미실행·Mode별 표시

**사람인 문장:** “RDLC 보고서에서 운영·Free Mode의 불필요한 Scenario 영역을 숨기고, 실행 결과가 없는 검증 Frame을 실패로 표시하도록 결과 해석을 보완했습니다.”

**포트폴리오 장면:** 7장에 `검증 Mode = Scenario와 Frame 결과 표시`, `운영/Free Mode = Scenario 표 제외`, `Frame 결과 0건 = 미실행/실패` 세 가지 상태를 한 표로 비교한다. “실패”는 화면 표시 정책이며 실제 Engine이 실패 Packet을 검출했다는 뜻으로 혼동하지 않도록 주석을 둔다.

**근거:** `419dc15`, `8f4cb91`, 현재 `ReportMain.cs`. 보고서의 최종 SQL 집계는 이후 작성자 수정이 포함된다.

##### 8.3 Header Frame과 시간 필드 표시 보정

**사람인 문장:** “Header Frame의 가변 DATA를 Byte별 문자 목록에서 하나의 ASCII 값으로 합치고, `FRACSEC` Byte Offset을 수정하는 등 실패 Packet의 필드 표시를 반복 보완했습니다.”

**포트폴리오 장면:** 6장에 같은 Packet의 `Byte별 문자`와 `하나의 Header DATA 값`을 전후 비교하고, `FRACSEC`에서는 Offset이 어긋나면 해석 값이 달라지는 지점을 예시 Byte로 보여준다. 실제 고객 Packet은 사용하지 않는다.

**근거:** `0f8c8a2`, `be2c76d`, `8141a79`, `35aa0ee`, `0898fa6`, `b0c05e3`; 상세 근거 문서 §19.4.

##### 8.4 구조 전환을 보여 주는 더 정확한 설명

**사람인 문장:** “WPF 시제품에서 WinForms로 전환한 뒤에도 서브페이지 `UserControl`, View·Service·Model 분리, Form 재사용과 새로고침 흐름을 단계적으로 정리했습니다.”

**포트폴리오 장면:** 3장의 타임라인을 `WPF 시제품 → WinForms 기본 화면 → UserControl 서브페이지 → 역할별 폴더 재구성 → 재사용 Form과 RefreshForm`으로 확장한다. 각 변경이 “동시에 한 번에 설계된 최종 구조”처럼 보이지 않게 날짜별로 배치한다.

**근거:** `37f7c17`, `aa83791`, `8eb685d`, `9f67181`, `7739f46`, `788902d`. 성능 개선 수치나 전환의 공식 결정 이유는 쓰지 않는다.

##### 8.5 PMU 연결 설정과 입력 경계

**사람인 문장:** “PMU의 검증·운영 연결 정보를 구분해 등록·수정하고, TCP/UDP 선택에 따른 Source IP·Alternate Channel 입력과 이름 중복·IPv4·Port 검사를 화면에 반영했습니다.”

**포트폴리오 장면:** 4장에 PMU 기본 정보와 두 연결 레코드의 필드를 분리한 Form 모형을 넣는다. 검증 연결의 TCP/UDP 조건과 운영 연결의 TCP 고정을 명시한다.

**근거:** `104546f`, `c8f63d9`, `66d2fe6`, `17ec480`, `ed4e728`, 상세 근거 §22.1. 코드의 모든 Alternate IP 검사 경로가 완전하다고 주장하지 않는다.

##### 8.6 검증 이력이 있는 Scenario 삭제

**사람인 문장:** “Scenario 삭제 시 검증 보고서의 참조 여부를 확인하고, 사용 이력에 따라 Frame 행 삭제 범위를 달리하는 Transaction 처리를 구현했습니다.”

**포트폴리오 장면:** 4장 또는 7장에 `보고서 참조 있음 → Scenario 본문 삭제`, `참조 없음 → Frame 행과 Scenario 삭제`의 두 갈래를 표시한다. 실제 과거 보고서 데이터 보존 효과는 별도 검증 자료 없이는 수치화하지 않는다.

**근거:** `4cb4b0f`, 현행 `ScenarioService.DeleteScenario`, 상세 근거 §22.2. 현재 보고서의 Scenario Frame History 조회는 이후 다른 작성자의 변경이다.

#### 9. 다른 세션에 전달할 제작 지침

1. **내용 우선순위:** 먼저 §2~3의 사람인 문장을 입력하고, Figma는 §4의 8장 흐름에 §5·8의 사례를 배치한다. 상세 근거는 [업무·성과·기여도 문서](#evidence), 191건 날짜·제목 목록은 [커밋 전수 목록](#git)에 있다.
2. **본인 영역 표기:** 모든 구조 그림에서 `mgr`를 본인 담당으로 강조한다. 별도 SVT 검증 프로그램, `cm`·`tool`·`setup`, PMU 장비는 협업·외부 영역으로 둔다.
3. **화면 재현:** 실제 화면 캡처 공개가 어렵다면 가상 PMU·Station·Packet 값으로 와이어프레임을 다시 그린다. 가상 데이터는 “예시”라고 표시한다.
4. **숫자 표현:** Git Commit 191건과 2,395회 변경 경로 출현은 내부 근거 추적용이다. “191개 기능”, “2,395개 파일 개발”, “N배 향상”으로 변환하지 않는다.
5. **현재 코드와의 차이:** 본인 활동은 2025년 7월까지이고 현재 `mgr`에는 2026년까지 다른 작성자 변경이 있다. 최종 화면·SQL의 모든 부분을 본인이 만들었다고 소개하지 않는다.
6. **배포 자료의 경계:** 2025-10 `Release_1027.zip`에 `setup.exe`·`SVTSetup.msi`가 있어 설치 패키지 준비는 확인된다. 사용자·설치 DOCX의 마지막 수정자는 다른 사람이므로 직접 작성 성과로 넣지 않는다. 고객 납품·실설치 성공도 별도 증빙 전까지 보류한다.

<a id="git"></a>

## Git 기록

### SVT Manager 본인 Git Commit 전수 목록

> `02. svt/mgr`의 전체 Git 이력에서 Author Email `jspark@4net.co.kr`로 확인한 191건을 날짜순으로 기록했다. 파일 수는 해당 Commit의 `git log --name-only` 경로 출현 수이며 성과·생산성 지표가 아니다. 제목은 원문 그대로이고, 기능·개인 기여의 해석은 [SVT 상세 근거](#evidence)에서 Patch와 현행 코드로 확인한다.


#### 2025-06

| 날짜 | Commit | 원문 제목 | 변경 경로 수 |
|---|---|---|---:|
| 2025-06-17 | 80bdcc8 | Initial commit | 1 |
| 2025-06-17 | dd40821 | C# WPF 프로젝트 생성 | 8 |
| 2025-06-17 | 798d494 | 기본 레이아웃 생성 | 14 |
| 2025-06-17 | 6dcaa16 | DB 설정 및 모델 생성 | 9 |
| 2025-06-17 | 9249e9e | DB 레포지토리 생성 | 9 |
| 2025-06-17 | 0e57c58 | 점검이력 페이지 진행 | 32 |
| 2025-06-17 | 54ace40 | 점검이력 페이지 생성 | 10 |
| 2025-06-17 | b6bacec | 프로젝트 MVVM 재구조화 | 6 |
| 2025-06-18 | 8370cd4 | PMU 목록 페이지 진행 | 20 |
| 2025-06-18 | e782073 | PMU 목록 페이지 생성 | 22 |
| 2025-06-18 | 712e7ac | PMU 등록/수정 페이지 생성 | 10 |
| 2025-06-18 | af347ce | 각 스타일 파일 Styles.Xaml 로 통일 | 11 |
| 2025-06-19 | 746f7bf | PMU 등록/수정 페이지 수정 | 4 |
| 2025-06-19 | 964c4ce | 시나리오 목록 페이지 생성 | 20 |
| 2025-06-19 | 92db4ab | 시나리오 등록/수정 페이지 생성 | 24 |
| 2025-06-19 | 85c5218 | PMU 목록 페이지 콤보박스 전체 옵션 삭제 | 2 |
| 2025-06-19 | b8f652d | 기본 레이아웃 리팩토링 | 1 |
| 2025-06-19 | f3aacc4 | PMU 목록 페이지 리팩토링 | 7 |
| 2025-06-20 | 9511029 | PMU 등록/수정 페이지 리팩토링 | 2 |
| 2025-06-20 | fe7ed6f | 점검 이력 페이지 리팩토링 페이지네이션 조건 추가 | 7 |
| 2025-06-20 | 170fb63 | 점검 이력페이지 커맨드 바인딩 실수 수정 | 1 |
| 2025-06-20 | f323974 | 시나리오 목록 페이지 리팩토링 | 2 |
| 2025-06-20 | 9508e97 | 검증 종류  Free 모드 추가 | 2 |
| 2025-06-20 | 8319690 | Style Border 표시 해제 | 1 |
| 2025-06-20 | 6293bbb | DataGrid 스타일 수정 | 6 |
| 2025-06-20 | ac0b20b | DataGrid 조정 | 1 |
| 2025-06-20 | 15874a4 | 점검 이력 페이지 DataGrid Row 옵션 수정 | 1 |
| 2025-06-20 | a76700f | 전체 Style 색상 변경 | 12 |
| 2025-06-20 | fda7efd | 리스트 컨텐츠 스크롤 가능 | 2 |
| 2025-06-20 | 3ee07de | Style 테이블영역 Margin 수정 | 2 |
| 2025-06-20 | 37f7c17 | WPF to WinForm | 42 |
| 2025-06-20 | aa83791 | C# WinForm 프로젝트 및 레이아웃 생성 | 16 |
| 2025-06-20 | 6f061fa | 레이아웃 수정 | 10 |
| 2025-06-20 | a9ae0b2 | DB 및 싱글톤 폼 설정 | 10 |
| 2025-06-21 | 15e061f | 폼 네비게이션 생성 | 12 |
| 2025-06-21 | b6b1f73 | 프로젝트 네이밍 에러 수정 | 4 |
| 2025-06-20 | 6bcacec | 프로젝트 네이밍 에러 재수정 | 15 |
| 2025-06-21 | 78da665 | Model 추가 | 23 |
| 2025-06-21 | 087aab9 | Service 추가 | 14 |
| 2025-06-22 | e1aa9c1 | 점검 이력 페이지 생성 | 23 |
| 2025-06-22 | e244608 | 점검 이력 페이지 개선 및 Model 및 서비스 수정 | 33 |
| 2025-06-22 | 2419876 | PMU 목록 페이지 PMU 선택기 유저컨트롤 진행 | 7 |
| 2025-06-23 | e73a047 | 점검 이력 페이지 디자인 수정 | 9 |
| 2025-06-23 | 1585923 | PMU 목록 생성 | 5 |
| 2025-06-23 | 2050fbd | 점검 이력 페이지 테이블 수정 | 4 |
| 2025-06-23 | 4940a82 | PMU 목록 리스트 사이드 섹션 추가 | 21 |
| 2025-06-23 | 2ba6048 | PMU 목록 페이지 사이드 개선 | 2 |
| 2025-06-23 | 1eca2e2 | PMU 목록 PMU 정보 테이블 레이아웃 생성 | 4 |
| 2025-06-23 | a3f870a | UserControl 로직 리팩토링, 서비스 수정 | 10 |
| 2025-06-23 | bc03931 | 시나리오 목록 리스트 사이드 섹션 추가 | 19 |
| 2025-06-23 | f70828f | 리스트 사이드 섹션 위치 조정 | 9 |
| 2025-06-24 | 06019c5 | 리스트 사이드 섹션 디자인 조정 및 폼 이름 수정 | 20 |
| 2025-06-24 | ac07015 | PMU 정보 디자인 추가 | 13 |
| 2025-06-24 | 9b46412 | 검증 컨트롤 영역 생성 | 12 |
| 2025-06-24 | c402669 | PMU 목록 페이지 진행 | 16 |
| 2025-06-25 | ce71262 | PMU 목록 페이지 디자인 수정 | 11 |
| 2025-06-25 | a6998eb | PMU 수정/등록 페이지 폼 교체 로직 | 9 |
| 2025-06-26 | e0f7d02 | 전체프로젝트 Helper 클래스 추가, Form에 UI로직 통합 리팩토링 | 24 |
| 2025-06-26 | 77b05d7 | 전체 폼 및 유저컨트롤 디자인 변경 | 39 |
| 2025-06-27 | b335cd6 | PMU 등록/수정 페이지 디자인 생성 | 33 |
| 2025-06-27 | b6e8abd | PMU 등록/수정 페이지 진행 | 19 |
| 2025-06-27 | e04ae92 | PMU 등록/수정 페이지 임시 저장 | 9 |
| 2025-06-29 | 3961217 | Form View 로직 리팩토링 | 16 |
| 2025-06-29 | b6bff74 | 이전 폼코드 삭제 | 2 |
| 2025-06-29 | f863f94 | Helper 메서드 정리 | 2 |
| 2025-06-29 | 2ed8693 | ENUM 상수값 추가 | 9 |
| 2025-06-29 | 4eb3d63 | 시나리오 목록 페이지 생성 | 13 |
| 2025-06-30 | 27c14ca | 시나리오 테이블 Options 컬럼 수정 | 22 |
| 2025-06-30 | 476fd28 | 시나리오셀 클릭 네비게이션 | 3 |
| 2025-06-30 | 251f501 | PMU셀, 수정버튼 클릭 네비게이션 | 5 |

#### 2025-07

| 날짜 | Commit | 원문 제목 | 변경 경로 수 |
|---|---|---|---:|
| 2025-07-01 | 6625e48 | 시나리오 등록/수정 페이지 생성 | 23 |
| 2025-07-01 | 8137d47 | 컴포넌트 폴더 정리 | 89 |
| 2025-07-01 | 6a80c13 | 시나리오 등록/수정 페이지 디자인 수정 | 2 |
| 2025-07-01 | 94f0626 | 시나리오 등록/수정 페이지 프레임 추가,삭제 반응형 | 21 |
| 2025-07-01 | 6c59e14 | 디자인 수정 | 9 |
| 2025-07-01 | 7d3209e | 디자인 수정 재커밋 | 6 |
| 2025-07-01 | 74c06c7 | 보고서 폼 디자인 생성 기능 미구현 | 13 |
| 2025-07-01 | a97f116 | 검증모드 보고서 페이지 생성 | 33 |
| 2025-07-01 | 51182c2 | 보고서 페이지 생성 | 7 |
| 2025-07-01 | 82aa161 | 디자인 수정 | 15 |
| 2025-07-02 | a3cf1d5 | 전체 버튼 디자인 및 리포트 메인 폼 디자인 수정 | 24 |
| 2025-07-02 | 104546f | PMU 등록/수정 폼 운영모드 분리 저장 | 6 |
| 2025-07-02 | 4683ff4 | 시나리오 등록/수정 레이아웃 깨짐 수정 | 6 |
| 2025-07-02 | c3801fc | 디자인 수정 | 26 |
| 2025-07-02 | 9bfce13 | 디자인 수정 | 6 |
| 2025-07-02 | 7057314 | 점검이력페이지 2차 디자인 수정 | 9 |
| 2025-07-03 | 8d7e7c3 | 빌드 에러 및 리소스 정리 | 11 |
| 2025-07-03 | c1c3495 | 점검이력 메인 폼 코드 리팩토링 | 9 |
| 2025-07-03 | 6439de4 | FindControl 사용 대신 Public으로 객체 접근 | 24 |
| 2025-07-04 | cb1a24b | PMU 메인 페이지 리팩토링 | 17 |
| 2025-07-04 | eb7fb4c | PMU 등록/수정 페이지 리팩토링 | 14 |
| 2025-07-04 | e43fcf1 | 보고서 메인 페이지 리팩토링 | 5 |
| 2025-07-04 | 06cc4d1 | 시나리오 메인 페이지 리팩토링 | 5 |
| 2025-07-04 | a63cfbf | 시나리오 등록/수정 페이지 리펙토링 | 4 |
| 2025-07-04 | 46627a9 | PMU 메인 페이지 렌더링 지연 수정 | 3 |
| 2025-07-04 | f790cbb | 점검이력 페이지 2차 디자인 수정 | 6 |
| 2025-07-04 | 8fb8405 | PMU 메인 페이지 디자인 2차 수정 | 8 |
| 2025-07-06 | 2dadaf5 | 점검이력페이지 각 프레임 영역 패널처리 | 9 |
| 2025-07-06 | f71d06c | 점검이력페이지 프레임 테두리 적용 | 3 |
| 2025-07-06 | 9f12d02 | PMU 메인 페이지 디자인 2차 수정 | 10 |
| 2025-07-07 | b2fe3ab | PMU 등록/수정 페이지 2차 디자인 수정 | 17 |
| 2025-07-07 | 4507a03 | 시나리오 메인 페이지 디자인 2차 수정 | 9 |
| 2025-07-07 | 3eb7d6b | 시나리오 등록/수정 페이지 디자인 2차 수정 | 4 |
| 2025-07-07 | ca2e2fb | 리스트박스 Draw 추가 | 22 |
| 2025-07-07 | 931b824 | 검증모드, 운영모드 보고서 분리 | 32 |
| 2025-07-07 | c3f7de7 | 컴포넌트 폴더 단순화 리팩토링 및 운영모드, 검증모드 보고서 디자인 생성 | 103 |
| 2025-07-07 | c29af98 | Helepr 클래스 Common 폴더로 이동 및 리팩토링 | 17 |
| 2025-07-07 | 6034458 | 보고서 작업 전 코드 리팩토링 | 16 |
| 2025-07-07 | 410f31b | ComboBoxHelper 리팩토링 | 7 |
| 2025-07-08 | c6ca0b9 | Helpers 리팩토링 | 9 |
| 2025-07-08 | 03a63cc | 버튼 테두리 색 적용 | 6 |
| 2025-07-08 | 7df9af5 | 파일 이름 변경 에러 해결 | 6 |
| 2025-07-08 | c03b74a | 디자인 3차 수정 및 비동기 -> 동기 방식 | 30 |
| 2025-07-08 | 6a79f6b | 시나리오 메인 페이지 그리드 셀 크기 수정 | 6 |
| 2025-07-09 | d87ca0d | 재사용안하는 UserContorl 제거 폼에서 디자인 관리 | 90 |
| 2025-07-10 | 06f4444 | UserControl 삭제 및 보고서 폼 수정 | 62 |
| 2025-07-11 | f8fd084 | 데이터 그리드 디자이너 기능 분리 | 9 |
| 2025-07-12 | fa0bb2e | 데이터그리드뷰 초기화 로직 수정 | 6 |
| 2025-07-12 | 8eb685d | 서브페이지 UserContorl로 변환 | 14 |
| 2025-07-12 | ba2eb89 | 폼 라우팅 Enum to in[] | 9 |
| 2025-07-12 | e3f673b | 레이아웃 UI 렌더링 버그 해결 | 6 |
| 2025-07-13 | 704080f | 시나리오 수정/등록 페이지 수정 | 16 |
| 2025-07-14 | 1d06c34 | 페이지네이션 컴포넌트로 분리 시나리오 등록/수정 렌더링 최적화 | 16 |
| 2025-07-14 | c8f1f66 | DDL 수정에 따른 업데이트, 페이지네이션 유저컨트롤 분리 | 23 |
| 2025-07-14 | fb158bc | 보고서 페이지 탭 추가 및 기본 레이아웃 | 8 |
| 2025-07-15 | 6254135 | 리포트 뷰어 생성 및 Model 구분 | 40 |
| 2025-07-15 | 6665366 | 커밋 오류 수정 | 10 |
| 2025-07-15 | cf94c4f | 보고서 폼 리포트뷰어 진행 | 14 |
| 2025-07-15 | 4d04796 | 주석해제 버그수정전 | 3 |
| 2025-07-15 | 5b615db | Model 및 서비스 통합 | 26 |
| 2025-07-16 | ed4e728 | PMU, 시나리오 등록 및 수정시 중복 체크 | 7 |
| 2025-07-16 | f09b8bb | PMU 등록/수정 폼 수정 진행 | 9 |
| 2025-07-17 | c8f63d9 | PMU 등록/수정 폼 조회 및 기본값 설정 UI 액션 수정 | 9 |
| 2025-07-17 | 66d2fe6 | PMU 등록/수정 폼 수정 완료 | 6 |
| 2025-07-17 | fba31f7 | 데이트 피커 커스텀 포맷 적용 | 4 |
| 2025-07-17 | 17ec480 | PMU 등록/수정 페이지 재수정 및 PMU 메인 자동 검색 수정 | 3 |
| 2025-07-17 | ee23737 | PMU 메인 폼 자동완성 및 이전 폼 기억 로직 수정 | 5 |
| 2025-07-17 | 3f3ffa8 | PMU 등록/수정 폼에서 프로토콜이 udp면 검증 IP 수정 불가 | 3 |
| 2025-07-17 | 4cb4b0f | 시나리오 메인 폼 자동완성 및 이전 폼 기억 로직 수정 | 10 |
| 2025-07-17 | 609a78e | 프리모드, 운영모드 시나리오 셀 빈값처리 | 4 |
| 2025-07-17 | 9cc903e | 스키마 업데이트 | 1 |
| 2025-07-18 | 2948e17 | 페이지네이션 컨트롤 수정 | 6 |
| 2025-07-18 | 2ad674b | 시나리오 등록/수정 페이지리팩토링 | 9 |
| 2025-07-18 | b7dcf2a | 보고서 검증 정보 추가 | 10 |
| 2025-07-18 | 87891c5 | 보고서 검증 상세 정보 진행 | 2 |
| 2025-07-18 | 23e90c3 | 보고서 검증 대상, 시나리오 정보 생성 | 3 |
| 2025-07-18 | 31b7c37 | 프로토콜 실패, 성공 정보 로직 분리 | 1 |
| 2025-07-19 | a069197 | 리포트뷰어 레이아웃 및 프로토콜 성공 정보 로직 수정 | 4 |
| 2025-07-19 | 419dc15 | 운영 및 프리모드일때 시나리오 테이블 숨김 처리 | 3 |
| 2025-07-20 | d3f2b22 | 실패 정보 데이터 그리드 뷰 생성 | 4 |
| 2025-07-20 | 9f67181 | 패키지 아키텍처 재구조화 | 66 |
| 2025-07-21 | 5010bba | 실패상세정보 모달 폼 생성 | 10 |
| 2025-07-21 | 1f824a2 | 실패상세정보 모달 기능 생성 | 14 |
| 2025-07-22 | 9de6bad | 패킷 2005 임시 저장 | 14 |
| 2025-07-22 | e091b80 | 시나리오 파싱 에러 건수 추가 | 9 |
| 2025-07-22 | f41c78f | DB ConnectionString 외부 표시 | 9 |
| 2025-07-22 | a1e9227 | app.config svncopahstr 실행 파일 경로 추가 | 3 |
| 2025-07-23 | 95e0cf8 | PMU 연결정보 데이터 변경에 따른 수정 | 13 |
| 2025-07-23 | 894e1bf | 데이터프레임 추가 및 초기상태시 에러 수정 | 12 |
| 2025-07-23 | b9f2007 | 데이터그리드뷰 셀 버튼 이름 변경 | 2 |
| 2025-07-23 | c942eed | 리포트 뷰어 시나리오 정보 데이터프레임 옵션별 그룹핑 | 11 |
| 2025-07-23 | e6b3a41 | 패킷정보 2005 설정 프레임 개발 | 10 |
| 2025-07-23 | be2c76d | 시간값 오류 수정 | 7 |
| 2025-07-23 | 3f138d4 | 디자인 및 텍스트 수정 | 8 |
| 2025-07-23 | 5c9bd55 | 패킷정보 헤더프레임 생성 | 1 |
| 2025-07-23 | 43e87d6 | 패킷정보 2011 헤더프레임 추가 | 1 |
| 2025-07-24 | 8141a79 | 설정 프레임 CHANN 필드까지 Description 수정 | 3 |
| 2025-07-24 | 89379e0 | 패킷 2005 Description 수정 및 Value 컬럼 추가 | 8 |
| 2025-07-24 | 5b2f061 | 전체 기능 개선 및 버그 수정 | 27 |
| 2025-07-24 | 96a72b8 | 시나리오 등록/수정 옵션들 Validation 추가 | 36 |
| 2025-07-25 | c30a917 | 패킷 정보 Description 및 오류 수정 | 14 |
| 2025-07-25 | a6cece3 | 빌드/릴리즈 경로 수정 | 3 |
| 2025-07-25 | 66d3cf3 | 시나리오 등록/수정 옵션 입력값 검증 보류 | 3 |
| 2025-07-25 | 562d49d | 시나리오 옶션 입력값 검증 수정 | 2 |
| 2025-07-25 | 0f8c8a2 | 헤더프레임 데이터필드 문자로 쪼개진거 합치기 | 1 |
| 2025-07-25 | 0068926 | 보고서 프로토콜 실패 정보, 시나리오 정보 오더링 삭제 | 2 |
| 2025-07-25 | 2f64412 | 패킷정보 와이어샤크 샘플 개발 | 9 |
| 2025-07-25 | cae808e | 패킷 정보 표시 형식 수정 STAT 필드 까지 | 2 |
| 2025-07-26 | b0c05e3 | DataFrame 정보 표시 형식 수정 | 5 |
| 2025-07-26 | 0898fa6 | Configuration 3 정보 표시 형식 수정 | 2 |
| 2025-07-26 | 35aa0ee | Configuration 2 정보 표시 형식 수정 | 2 |
| 2025-07-26 | 219299c | XML 오류 끄기 | 1 |
| 2025-07-28 | 7739f46 | 폼 로딩 방식 재사용 인스턴스 | 14 |
| 2025-07-28 | b2fc756 | 패킷 정보 디버깅용 Location 해제 | 10 |
| 2025-07-28 | 8f4cb91 | 리포트뷰어 검증이 실행되지 않으면 실패 | 1 |
| 2025-07-29 | 2a1874c | 시나리오 행 조정 및 패킷 샘플 수정 | 4 |
| 2025-07-29 | 5b1e5e3 | 폼 전환 방식 오류 수정 | 5 |
| 2025-07-29 | e2075cc | IEEE 전체 패킷 데이터그리드뷰 수정 | 3 |
| 2025-07-29 | 788902d | 프로젝트 재 구조화 | 57 |
| 2025-07-29 | 1a5e074 | 검증이력 CaptureID 추가 | 4 |
| 2025-07-29 | b1c013d | 보고서, 실패정보 로딩 속도 개선 | 7 |

#### 해석 기준

- 단순 디자인, 중간 저장, 파일 이동·재구조화, Binary DB·Designer 변경은 별도의 성과 수치로 환산하지 않는다.
- `mgr`의 현재 HEAD는 본인 활동 기간 뒤 다른 작성자의 변경을 포함한다. 현재 기능이 존재한다는 이유만으로 본인 구현에 귀속하지 않는다.
- `cm`, `setup`, `tool`에는 해당 Email의 Commit이 없다. 각 저장소의 구현을 이 목록에 포함하지 않았다.
