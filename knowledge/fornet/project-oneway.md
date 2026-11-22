# ONEWAY 경력 근거

[상세 근거](#evidence) · [지원서 제작 원고](#materials)

## 역할과 범위

레거시 구조와 시험 절차 조사, 64장 세미나 직접 제작·발표.

## 재조사에서 확인한 근거

2026-11-22 로컬 전체 Ref와 개인 author 재집계. 15개 저장소 938건 중 개인 커밋 0건. `epower-diode/cemm`의 `CEMM.TASK/WatchDog.cs`를 확인했다. 발표자료 작성 속성과 FTP RX 확인·OPC UA 오류 기록을 기존 근거와 대조했다.

17·22·23·26~31번은 세미나·설치·시험·모듈 분석의 과제 내역이다. FTP 확인, OPC DA 절차, OPC UA 오류는 세미나 원본으로 구분한다. [업무 티켓 소스](./process-ticket.md)

<a id="evidence"></a>

## 상세 근거

### ONEWAY e-Power Diode 업무·성과·기여도 상세 근거

> 문서 성격: 레거시 단방향 전송 제품의 구조 분석·세미나 상세 근거 원본. 사용자는 **제품 개발에 참여하지 않았고, 레거시 분석과 세미나를 진행**했다고 2026-11-21 확인했다. 직접 작업한 Meta 산출물은 `05. oneway/00. meta/01. epower-diode - 세미나/세미나 문서.pptx`다. 아래 구버전 서술 중 검증 범위를 13절의 재조사 결과와 함께 읽는다.

#### 1. 분석 범위와 근거

| 구분 | 내용 |
|---|---|
| 대상 | `05. oneway` 전체: Git 저장소 15개, 2026-11-21 기준 전체 938개 커밋(`git rev-list --all --count`의 저장소별 합계) Author 재조회 |
| 본인 Commit | `jspark@4net.co.kr` 식별 커밋 **0건** |
| 직접 작업 근거 | `00. meta/01. epower-diode - 세미나/세미나 문서.pptx` 64장. 사용자 작성·발표 확인; 파일 속성 생성 2025-08-19, 최종 수정 2025-08-29(발표 일자와 다름) |
| 보조 근거 | `00. meta/99. epower-diode - 참고문서/프로젝트분석.md` 2,661줄, 업무 티켓 요약, 15개 저장소의 현재 Source. 참고문서의 직접 저작 여부는 확인되지 않아 개인 작성량으로 쓰지 않음 |
| 티켓 근거 | 단방향 Solution Seminar, 구·신 Version 설치, File·OPC DA 시험, Setup·CEM·CEMM·GUI 분석 |
| 설치·Test Tool 실존 확인 | FileZilla, MariaDB, OPC UA Server, UAExpert, OPC DA Client·Core Component, Matrikon Simulator 등 |
| 정확한 역할 표현 | 레거시 제품 구조·설치/시험 절차 분석, 단방향 솔루션 세미나 자료 제작·발표. 개별 설치/시험은 티켓·슬라이드에 확인되는 범위만 기술 |

| 제품군 | 저장소 |
|---|---|
| Data Diode | `rbox`, `sbox` |
| e-Power Diode | `cem`, `cemm`, `dpe`, `dte`, `erd`, `gui`, `setup` |
| UNID | `unicon`, `uniconm`, `unidp`, `uniops`, `unisetup`, `unisp` |

- Git Author Commit 없음 → "ONEWAY Core를 개발했다" 표현 금지.
- `프로젝트분석.md`로 Module별 Stack·Source 위치·Controller–Service–Task 흐름·API·Message Queue·설정·Dashboard Worker를 재대조.
- 감사 시점 `cem` Key Store·설정 파일, `setup` 프로젝트에 미커밋 변경 존재: 민감 가능 설정은 열람 결과 노출·문서 이전하지 않았고 개인 개발 근거로도 미사용.
- 경력 가치(Commit 수가 아님): 15개 저장소·938개 Commit 규모 레거시 제품군의 모듈·전송 흐름 분석, 64장 세미나 자료로 구조·개발 환경·시험 절차·설치 과정을 정리해 공유. 참고 분석 Markdown 2,661줄은 자료 규모이지 개인 저작량이 아니다.

#### 2. 제품 Architecture

```text
TX 외부 System
    ↓
TX DPE: FTP·DBMS·OPC·APP Data 수집
    ↓
TX DTE: Queueing·암호화·단방향 송신
    ═══════════ 단방향 구간 ═══════════
RX DTE: 수신·복호화
    ↓
RX DPE: 목적지 System으로 전달

CEM: 전체 설정·API·상태·감사·통계
CEMM: Process·Resource Watchdog와 Alarm
GUI: 관리자 화면과 실시간 Monitoring
Setup: 구성 요소와 선행 Runtime을 통합 설치
```

#### 3. Module별 분석

| Module | 역할 | 기술·구조 |
|---|---|---|
| CEM | 전체 관리·제어, GUI용 REST API, 사용자·권한, Service 설정, Process 제어, System Resource, Audit·Alarm, 통계, 무결성 | C# / .NET Framework·.NET 6 전환 흔적, ASP.NET Web API, OWIN Self-host, MySQL·Entity Framework 6, SignalR, NetMQ/ZeroMQ, Dependency Injection |
| CEMM | CEM·Service Process 감시, DB 연결 확인, Watchdog, Audit Event 생성, Alarm Mail | Common Utility, DB Model, Domain·Config, HTTP·JSON Handler, Monitor Template, Audit·Mail Background Task |
| DPE | 외부 Source 수집, 목적지 전달, Protocol별 Handler 생성, 통계·Audit. 지원: FTP·FTPS·SFTP, DBMS(SQL Server, MySQL/MariaDB, Oracle), OPC Classic/DA, OPC UA, Application Protocol | TX/RX 위치·Service Type 기반 Instance Factory, Protocol별 Handler Factory, 공통 Template, Multi-thread 처리, File·Record·Tag·Byte 단위 통계 |
| DTE | 단방향 전송 Tunnel, TX Encrypt·Send, RX Receive·Decrypt, Message Queue, Key 교환 | .NET 6, UDP, NetMQ/ZeroMQ, AES·ARIA, Concurrent Queue, Encrypt·Decrypt Worker, Docker 지원. Send·Receive·Encrypt·Decrypt Queue 분리, TX·RX 수집·암호화·송수신·복호화 Worker 병렬 |
| GUI | 로그인, Dashboard, Service·통계·Audit·시스템·사용자 관리. 화면: FTP, DBMS, APP, OPC, Dashboard, Statistics, Audit, 무결성, Process, Resource, Alarm, 환경 설정, User | C# WPF, XAML, REST API, ZeroMQ Subscriber, Timer 기반 갱신 |

- CEM 핵심 흐름: GUI Service 설정 → CEM Controller·Service → DB 저장 → DPE Service Factory로 전달 / CEM이 DPE·DTE 상태·통계 수집 / Background Scheduler가 Resource·통계·동기화·무결성 관리.
- CEMM 핵심 흐름: CEM API 설정 조회 → DB Connection 확인 → Process Timer로 동작 확인 → 장애·상태 Event를 Audit Log로 전송 → Alarm 대상이면 SMTP Mail(암호화된 Mail 인증 정보 처리).

#### 4. Module 간 Data 흐름

- **Service 설정**: GUI(FTP·DBMS·OPC·APP 입력) → CEM Proxy Service API → CEM Service Validation·Transaction → DB 저장 → DPE Factory가 TX/RX·Protocol별 Instance 생성 → Handler 설정 주입 → 외부 System 연동 시작.
- **Data 전송**: TX DPE가 File·Record·Tag·Packet 수집 → TX DTE Queue 적재 → 암호화 Worker AES·ARIA → 단방향 UDP 송신 → RX DTE 수신·복호화 → RX DPE가 목적지 FTP·DBMS·OPC·Application 전달 → 처리량·성공·실패 통계·Audit Event.
- **Monitoring**: CEMM이 Process·DB·Resource 확인 → 장애·상태 변화 시 Audit Event → CEM 저장·API 제공 → GUI가 REST·ZeroMQ 수신 → Dashboard·Alarm·Mail 반영.

#### 5. 설치·환경 구축 (티켓·세미나 자료에 나타난 범위)

- 티켓 요약에는 구 Version SBOX/PBOX, 신 Version e-Power Diode 설치와 TX·RX VM 구성 업무가 적혀 있다. 세미나 슬라이드 7~9, 59~64에는 개발 환경 준비, DB 설정, Setup 필수 구성 요소와 빌드 절차가 담겨 있다. 각 설치의 완료 일자·성공 로그는 현재 자료에서 별도 확인되지 않는다.
- 선행·구성: .NET Framework 4.8, .NET 6 Runtime, ASP.NET Core Runtime, Visual C++ Redistributable x86/x64, MariaDB, 제품 Setup MSI·EXE, License·Product Key 도구, Logger 설정.
- Setup 분석: Module Build Output 구성, 선행 Runtime 포함, TX·RX 설치 대상 분리, 통합 Installer 생성 흐름, 설정 File·Port·DB·암호화 옵션, 구·신 Version Runtime·Project 구조 차이.

#### 6. Protocol별 전송 시험·절차의 확인 범위

| Protocol | 세미나/티켓에 확인되는 내용 | 결과 판정 |
|---|---|---|
| File·FTP | 23번 티켓과 슬라이드 49~51: FTP Server/GUI 설정, TX 폴더에 파일 배치, RX 지정 폴더에서 옮겨진 파일 확인 | 시험 절차와 RX 확인 장면이 자료에 있음. 전송 건수·용량·반복 성공률은 미확인 |
| DBMS | DPE의 MySQL/SQL Server/Oracle Handler와 서비스 구조를 분석; 티켓 요약에 시험 대상으로 표기 | PPTX에 DBMS E2E 결과표나 수신 성공 로그는 없음. 기능 분석과 시험 완료를 구분 |
| OPC DA | 28번 티켓과 슬라이드 52~53: Matrikon Simulation, OPC Quick Client, DCOM/ProgID, TX 수집·RX 측 서버 확인 절차 | 환경·연동 절차 정리 확인. 항목별 송수신 PASS 기록은 별도 확인 필요 |
| OPC UA | 슬라이드 54~56: TX/RX 클라이언트와 태그 조회 절차; TX→RX 전송 오류로 추후 확인 예정이라고 명시 | **E2E 성공 주장 불가** |
| Application | 슬라이드 57~58: Nmap/ncat 기반 TX 송신·RX 수신 로그 확인 절차 | 방법 정리 확인. 성공 결과 수치 없음 |

#### 7. Dashboard·운영 기능 분석

- **Dashboard Worker**: Audit(심각도별 감사 Event), System Resource(CPU·Memory·Disk), Accumulated Transmission(누적 전송량), Service(실시간 전송량). 결과: 감사 Event Critical·Major·Minor·Normal, CPU·Memory·Disk·임계치, FTP File 수, DBMS Record 수, OPC Tag 수, APP Byte 수, 오늘·어제 비교, Service별 전송량.
- **통계**: 기간, TX/RX 위치, Service, Proxy, FTP·DBMS·OPC·APP별 지표, Chart, Service 선택에 따른 Proxy 목록 연동.
- **Audit**: 발생 위치 TX/RX, 주체 CEM/CEMM/GUI/DPE/DTE, Category, 심각도, 성공·실패, 시간 범위, Page 처리.
- **시스템 관리**: File Hash 무결성, Process PID·상태·시작·종료(CEM Process는 조회 중심), Resource 임계치, Alarm Mail, 통계 주기, DB 위치, DTE 암호화·Port, DPE 수집 Timeout·주기·Download 경로, GUI Session·Topic.

#### 8. Source 분석 참고 자료·직접 제작 Seminar

- `프로젝트분석.md`에는 전체 Architecture, Module별 역할·Stack, API·Data·Audit·설정 전파, Dashboard Worker, ZeroMQ, Source Tree 등의 참고 분석이 있다. **작성자 확인이 없어 직접 작성 산출물로 수량화하지 않는다.** PPTX 내용의 소스 맥락 확인에만 사용한다.
- 직접 제작·발표 확인된 `세미나 문서.pptx`는 64장이다. 1~6장 개요·모듈/OPC, 7~9장 개발 환경, 10~32장 GUI/CEM 화면·API·동기화, 33~37장 CEMM, 38~41장 DTE, 42~47장 DPE, 48~58장 FTP·OPC·APP 시험 방법, 59~64장 Setup의 순서로 구성돼 있다.
- 세미나에서 GUI 서비스 설정→CEM API/DB→DPE 생성·설정 동기화, CEMM의 프로세스 감시, DPE 수집→DTE 전송→RX 전달을 화면·코드 구조·시스템 도식으로 설명했다. 이는 **레거시 구조를 동료가 따라갈 수 있게 정리한 작업**이다. 청중 수·발표 날짜·후속 활용 지표는 미확인이다.
- 미확인: 발표 일자·참석자·후속 활용.

#### 9. 업무 성과

| 성과 | 내용 |
|---|---|
| Legacy 제품 구조화 | GUI·API·Monitor·Data Processing·Transfer Engine·Installer 역할 분리, 화면→API→Service→Factory→Handler→전송 Engine 순 추적 (→ §3, §4) |
| 구·신 Version 환경 분석 | 티켓의 설치 업무와 세미나의 Runtime·DB·Installer·TX/RX 구성 절차를 연결해 정리. 각 설치 성공 로그·운영 반영은 별도 확인 필요 (→ §5) |
| 프로토콜 시험 절차 정리 | FTP의 TX 파일 배치→RX 파일 확인 절차와 OPC DA/UA·APP 환경/방법을 세미나로 설명. OPC UA는 전송 오류를 그대로 명시 (→ §6) |
| 재사용 문서화 | 64장 세미나 자료에 시스템 도식·모듈 역할·화면/API·전송 흐름·시험 방법·Setup 구조 기록 (→ §8) |

#### 10. 본인 기여도와 표현 경계

- **직접 확인된 기여**: 사용자 확인에 따른 레거시 제품 분석과 64장 세미나 자료 제작·발표. 설치·File/OPC DA 시험은 티켓 및 슬라이드에 기재된 절차·범위로 설명하며 모든 프로토콜의 성공 결과로 확대하지 않음.
- **과장 금지**: CEM/DPE/DTE Core 개발, 암호화 Algorithm 구현, 단방향 장비 Hardware 설계, OPC Library 개발, 제품 전체 Architect.

안전한 문장:

> 레거시 단방향 전송 제품의 GUI–CEM–CEMM–DPE–DTE 구조와 TX/RX 데이터 흐름, 설치·FTP/OPC/APP 시험 절차를 분석해 64장 세미나 자료로 제작·발표했습니다. 개발 업무는 담당하지 않았으며, OPC UA 전송 오류 등 확인한 제한도 자료에 기록했습니다.

#### 11. 이력서·자기소개서 압축 문장

- 단방향 전송 제품의 TX/RX 환경 구축
- 구 Version과 .NET 6 기반 신 Version 비교
- GUI–CEM REST–CEMM Watchdog–DPE–DTE 흐름 분석
- FTP·DBMS·OPC DA·OPC UA·APP Handler 분석
- AES·ARIA·UDP·ZeroMQ 기반 전송 Architecture 이해
- FTP 파일 전송 확인 절차 및 OPC DA/UA·APP 시험 환경과 방법 정리(UA 전송 오류 명시)
- Setup Project·Runtime·Config 분석
- 직접 제작·발표한 64장 세미나 자료; 2,661줄 참고 분석 Markdown은 저작자 확인 전까지 개인 작성량에서 제외

#### 12. 추가 확보 필요 정량 정보

Test Case 수·PASS/FAIL / 전송 Data 건수·File 크기·Tag 수 / 구·신 Version 설치 소요 시간 / 발견 결함 수·해결 여부 / Seminar 일자·참석자·자료 활용 / 고객·사업 분야 공개 가능 범위 / 직접 작성 분석 문서 최종 Version

#### 13. 2026-11-21 재조사: 개인 역할과 세미나 산출물의 근거

##### 13.1 조사 단위와 Git 결과

`05. oneway`의 `data-diode` 2개, `epower-diode` 7개, `unid` 6개, 총 15개 Git 저장소를 `--all`로 다시 집계했다. 전체 커밋 합계는 938개, `jspark@4net.co.kr` author 커밋은 0개다. 이는 사용자 진술인 “레거시 프로젝트 분석 및 세미나 진행, 개발에는 참여하지 않음”과 일치한다. 이전 문서의 928개는 현재 `--all` 합계와 맞지 않아 위 표에서 수정했다. 저장소 수·커밋 수는 **분석 대상의 규모**이지 개인 개발량/성과가 아니다.

`cem`과 `setup` 작업 트리에는 기존 미커밋 변경이 있다. 이번 조사에서 수정하지 않았고 개인 개발 근거로 귀속하지 않았다. 구체적인 자격증명·키·환경 파일 내용은 경력 문서로 옮기지 않았다.

| 제품군 | 저장소 | 합계 | 본인 author |
|---|---|---:|---:|
| Data Diode | `rbox`, `sbox` | 55 | 0 |
| e-Power Diode | `cem`, `cemm`, `dpe`, `dte`, `erd`, `gui`, `setup` | 812 | 0 |
| UNID | `unicon`, `uniconm`, `unidp`, `uniops`, `unisetup`, `unisp` | 71 | 0 |
| 전체 | 15개 | 938 | 0 |

##### 13.2 64장 발표 자료의 구성과 분석 관점

| 슬라이드 | 실제 내용 | 본인 업무로 안전하게 표현할 내용 |
|---|---|---|
| 1~6 | 제품 개요, TX/RX 시스템 아키텍처, GUI·CEM·CEMM·DPE·DTE 역할, OPC DA와 OPC UA 차이 | 낯선 레거시 제품의 구성요소와 전송 방향을 청중이 이해할 수 있도록 분해·설명 |
| 7~9 | TX/RX VM, .NET Runtime, 인증/DB 관련 개발 환경 준비 | 재현 환경의 선행 조건 정리. 실제 운영 서버 배포 완료로 쓰지 않음 |
| 10~32 | GUI·CEM 아키텍처, 서비스 관리, Dashboard, 통계, 감사, 시스템·사용자 관리, 설정 동기화 | 화면 기능에서 CEM API/DB/DPE 생성·동기화로 이어지는 코드·데이터 흐름 구조화 |
| 33~37 | CEMM 구조, 초기화, DB 연결, WatchDog와 자체시험/감사 | 프로세스 감시·상태 변화의 운영 흐름 설명 |
| 38~41 | DTE TX/RX, UDP 전송, 데이터 큐·암복호화, 구동 인수 | 전송 엔진 내부 파이프라인을 분석해 도식화. 암호화 알고리즘 직접 구현이라고 하지 않음 |
| 42~47 | DPE TX/RX, FTP 수집·전달, DBMS/APP/OPC 서비스 팩토리, 구동 인수 | 프로토콜별 데이터 처리 계층의 역할과 DTE 접점 설명 |
| 48~58 | FTP, OPC DA, OPC UA, Application 시험 환경과 절차 | 시험 방법을 자료화. UA의 TX→RX 오류를 실패/미완료로 명시 |
| 59~64 | Setup 프로젝트, Runtime/VC++ 선행 조건, 설치 파일 구조, Custom Action·빌드 절차 | 기존 설치 구성·의존성을 조사해 세미나에 전달 |

발표 자료의 파일 속성은 2025-08-19 생성, 2025-08-29 최종 수정이다. 이것은 **자료 작업 시점**의 근거이고 발표 일자·참석자 수의 증거는 아니다. 슬라이드에 내부 DB 계정/암호·IP·파일 서버 경로가 존재하므로 공개 포트폴리오에서는 원본 이미지를 사용하지 않고 익명화한 개념도와 문장으로 다시 만든다.

##### 13.3 발표 내용과 실제 소스의 교차 확인

- **서비스 설정:** 세미나 14~15장의 GUI 서비스 관리 → CEM `proxyservice/apply` → 유효성 검사/DB → DPE 생성 흐름은 `cem/CemConvert/Controllers/ProxyServiceController.cs`의 API와 `dpe/DPE/DPE.Service/DpeServiceFactory.cs`의 FTP/APP/DBMS/OPC 분기 존재로 뒷받침된다. 이 코드들은 분석 대상이며 본인이 작성한 코드가 아니다.
- **운영 감시:** 34~37장의 CEMM WatchDog는 `cemm/CEMM.TASK/WatchDog.cs`의 `WatchProcess`, 주기 Timer, 프로세스 상태·감사 발행 경로와 연결된다. 발표 자료가 단순 기능 이름 나열을 넘어 실제 감시 흐름을 설명한다는 근거다.
- **TX/RX 전송:** 39~45장의 DPE→DTE→RX 도식은 `dte/DTE.Service/DteTx.cs`, `DteRx.cs`의 송·수신/큐·암복호화 경로와 DPE FTP/DBMS/OPC Handler·Factory 경로로 확인된다. 실제 하드웨어 단방향성 또는 모든 프로토콜 성공률을 이 코드 존재만으로 증명하지 않는다.
- **관리 화면:** GUI의 `UTG_Main/View/Sub01_Dashboard.xaml`, `Sub02_ServiceMgr.xaml`과 CEM의 `DashboardController`, `StatisticController`, `AuditLogController`, `SystemProcessController`, `SystemResourceController`가 발표 16~31장의 화면·API 분류와 대응한다.
- **Setup:** 59~64장의 .NET/VC++/설치 파일/Custom Action 의존성은 세미나에서 설명한 **기존 제품 구성**이다. 저장소 `setup`의 코드를 직접 구현했다는 뜻이 아니다.

##### 13.4 시험 결과의 경계와 정정 사항

FTP는 발표 51장에 TX 폴더에 놓은 파일을 RX 폴더에서 확인하는 절차와 화면이 있다. OPC DA는 52~53장의 Simulator/Client 설치 및 GUI 설정 절차가 중심이다. OPC UA는 54~56장에서 **TX→RX 오류로 데이터 전송이 되지 않아 추후 확인 예정**이라고 직접 적었다. Application은 57~58장의 ncat 명령과 송수신 로그 확인 방법이며 실제 PASS/FAIL 집계는 없다. DBMS는 CEM/DPE 기능 분석에는 있지만 이 PPTX에 E2E 결과표가 없다.

따라서 과거 티켓 요약의 “File·FTP·DBMS·OPC UA/DA·APP End-to-End 검증”은 범위를 넓게 합친 문장이다. 현재 확보한 직접 발표 자료와 대조하면 **FTP 확인, OPC DA/APP 방법 정리, OPC UA 오류 기록, DBMS 구조 분석**으로 나눠야 정확하다. 시험의 추가 결과가 있으면 그때 범위를 넓힌다.

##### 13.5 주장 등급

| 표현 | 등급 | 근거/조건 |
|---|---|---|
| 64장 세미나 자료 제작·발표 | 사용자 직접 확인 + 산출물 | 직접 업무. 발표 일자·청중 수는 미확인 |
| 레거시 GUI/CEM/CEMM/DPE/DTE/Setup 구조 분석 | 사용자 직접 확인 + PPTX + 실제 소스 대응 | 직접 분석 업무. 제품 구현과 구분 |
| 구·신버전 설치/환경 구성 | 티켓 요약 + PPTX 절차 | 업무 이력에는 포함 가능. 각 설치 성공·운영 반영은 확인 필요 |
| FTP 파일 RX 확인 | PPTX 51장 | 발표 자료에 확인 절차/화면 존재. 반복 성공률·대량 성능 미확인 |
| OPC DA 전송 성공 | 절차·도구는 확인 | 수신 결과 로그 확인 전까지 보류 |
| OPC UA 전송 성공 | PPTX 자체에 오류 명시 | 사용 금지 |
| DBMS/APP E2E 성공 | 기능·시험 방법/티켓 요약 | 직접 결과 증빙 확보 전까지 보류 |
| CEM/DPE/DTE/GUI/Setup 개발 | 본인 Git 0건 + 사용자 개발 미참여 확인 | 사용 금지 |

#### 14. 2026-11-21 발표자료 저작·시기 보강

- `05. oneway/00. meta/01. epower-diode - 세미나/세미나 문서.pptx`의 Office 메타데이터 `author`가 **박종성**이며, 생성 시각 2025-08-19·마지막 수정 시각 2025-08-29로 기록돼 있다. 사용자 확인(직접 제작·발표)과 함께 **자료 저작**을 뒷받침한다.
- 이 메타데이터는 **발표일·참석자·세미나 후 활용**을 증명하지 않는다. 64장은 자료 분량이며 청중 영향이나 개발량으로 환산하지 않는다.

<a id="materials"></a>

## 지원서 제작 원고

낯선 제품을 모듈별로 추적하고 동료가 따라갈 수 있는 설명과 절차로 만든 경험을 쓴다. 발표일·청중·후속 활용은 별도 확인 항목이다.

### ONEWAY 사람인 이력서·Figma 포트폴리오 제작 원고

> 원본 근거: [ONEWAY 업무·성과·기여 상세 문서](#evidence) §13. 사용자가 확인한 실제 역할은 **레거시 제품 분석과 세미나 진행**이다. 개발에는 참여하지 않았다. 직접 작업 확인 산출물은 64장 `세미나 문서.pptx`다. 제품 소스와 참고 분석 Markdown은 구조 확인 자료이지 개인 개발·저작량이 아니다.

#### 1. 프로젝트 카드

| 필드 | 제작용 내용 |
|---|---|
| 제목 | 레거시 단방향 전송 솔루션 구조 분석 및 기술 세미나 |
| 기간 | 자료 생성·수정 확인: 2025.08. 실제 수행·발표 기간은 별도 확인 |
| 역할 | 레거시 아키텍처·설치/시험 흐름 분석, 기술 공유 자료 제작·발표 |
| 분석 대상 | TX/RX 단방향 전송, GUI, CEM, CEMM, DPE, DTE, Setup. 주변 제품군 포함 Git 저장소 15개·전체 938개 커밋은 분석 대상 규모 |
| 직접 산출물 | 시스템 구조·모듈 역할·화면/API·전송 흐름·시험 방법·설치 의존성을 담은 64장 세미나 자료 |
| 개발 범위 | 없음. 본인 author 커밋 0건, 사용자 개발 미참여 확인 |
| 확인된 시험 표현 | FTP TX 파일 배치→RX 파일 확인 절차/화면. OPC DA·APP 방법 정리, OPC UA 전송 오류 기록. DBMS E2E 성공은 미확인 |
| 관련 기술 이해 | C#/.NET, WPF, REST API, MariaDB, ZeroMQ/NetMQ, FTP/DBMS/OPC/APP, TX/RX, Windows Setup. 직접 구현 기술 스택으로 열거하지 않음 |

#### 2. 사람인용 경력 문장

##### 2.1 경력기술서 3문장

1. 기존 단방향 전송 솔루션의 GUI·관리 API·프로세스 감시·프로토콜 처리·전송 엔진·설치 프로젝트를 분석해 TX/RX 데이터 흐름과 모듈 간 책임을 정리했습니다.
2. 서비스 설정에서 CEM API/DB와 DPE 생성·동기화로 이어지는 경로, CEMM WatchDog, DPE→DTE→RX 전달 과정을 소스와 화면 자료를 대조해 64장 기술 세미나 자료로 제작·발표했습니다.
3. FTP 파일 전송 확인 절차와 OPC DA/UA·Application 시험 환경을 정리하고, OPC UA 전송 오류 등 확인되지 않은 결과도 자료에 명시했습니다.

##### 2.2 좁은 입력칸용

- 레거시 단방향 전송 제품의 TX/RX 구조와 GUI–CEM–CEMM–DPE–DTE 연계 분석, 64장 기술 세미나 제작·발표.
- FTP·OPC·APP 시험 환경/방법과 Setup 의존성을 정리하고 확인된 오류·미완료 범위를 명시.

##### 2.3 역할별 상세 문장 후보

- **아키텍처 분석:** 관리 화면의 서비스 설정이 CEM API를 거쳐 DB에 반영되고 DPE의 FTP/DBMS/APP/OPC 서비스 분기로 이어지는 흐름을 추적했습니다.
- **전송 경로 분석:** TX의 DPE 수집, DTE의 큐·암호화·송신, RX의 수신·복호화·목적지 전달 과정을 모듈 역할과 함께 도식화했습니다. 전송 엔진을 직접 개발한 것은 아닙니다.
- **운영 흐름 분석:** CEMM의 주기적 프로세스 점검과 감사 기록, GUI Dashboard·통계·감사·시스템 관리 화면의 API 연결을 정리했습니다.
- **설치 의존성 정리:** TX/RX 환경, .NET Runtime·VC++ 구성요소, DB 설정, Setup 파일 구조와 빌드 절차를 세미나 자료로 정리했습니다.
- **시험 절차 공유:** FTP의 송신 폴더 배치와 수신 폴더 확인, OPC DA/UA의 Simulator/Client 환경, Application의 ncat 송수신 절차를 공유했습니다. OPC UA는 자료에 전송 오류가 기록돼 있습니다.

#### 3. Figma 포트폴리오 원고

##### 페이지 1 — 문제와 목표

**제목:** 기존 단방향 전송 제품을 팀이 이해할 수 있는 구조로 풀어내기

**본문:** 여러 저장소와 모듈로 구성된 레거시 제품은 화면·관리 API·프로세스 감시·프로토콜 처리·전송 엔진·설치 도구가 얽혀 있었다. 맡은 일은 새 기능 개발이 아니라 기존 구조를 조사하고 TX/RX 동작과 시험 방법을 세미나로 설명하는 것이었다.

**근거 박스:** 분석 대상 15개 저장소, 본인 개발 커밋 0건, 직접 제작한 세미나 자료 64장. 938개 전체 커밋은 제품 이력 규모로만 표기.

##### 페이지 2 — 시스템 지도

**제목:** TX에서 RX까지 구성요소의 책임을 분해

**도식 문장:** `외부 데이터 소스 → TX DPE(FTP·DBMS·OPC·APP 처리) → TX DTE(큐·암호화·송신) → 단방향 구간 → RX DTE(수신·복호화) → RX DPE(목적지 전달)`.

**주변 역할:** CEM은 서비스 설정·상태·API, CEMM은 프로세스 감시, GUI는 관리 화면, Setup은 실행 환경과 설치 구성. 도식은 개념도이며 내부 포트·주소·키 정보를 넣지 않는다.

**작업 방식:** PPTX 4~5장의 전체 구성도, 39~45장의 DTE/DPE 세부 흐름, 실제 CEM Controller·DPE Factory·DTE TX/RX 코드 경로를 대조했다.

##### 페이지 3 — 화면에서 처리 엔진까지

**제목:** 설정 한 건이 모듈을 건너 전달되는 과정

**흐름:** `GUI 서비스 관리 → CEM proxyservice/apply → 유효성 검사/DB 저장 → DPE Service Factory의 프로토콜 분기 → 설정 동기화 → TX/RX 실행`.

**설명:** 기능별 화면만 소개하면 제품 전체 흐름이 보이지 않아, 서비스 설정이 어느 API와 팩토리를 거치는지 연결했다. 발표 자료 14~15·30장과 CEM/DPE 소스를 대응시켰다.

##### 페이지 4 — 운영과 상태 관찰

**제목:** 프로세스 상태와 관리 화면의 관계 정리

**본문:** CEMM WatchDog가 등록된 CEM 프로세스를 주기적으로 점검하고 상태 변화·감사 이벤트를 다룬다. GUI는 Dashboard·통계·감사·시스템 관리 화면을 통해 관리 데이터를 보여준다. 자료에서는 각 모듈의 코드 위치와 화면이 어떤 데이터를 다루는지 함께 설명했다.

##### 페이지 5 — 시험 범위와 실패 기록

**제목:** 확인한 것과 미완료를 구분해 공유

| 항목 | 세미나 자료에 남긴 내용 | 표시 |
|---|---|---|
| FTP | TX 폴더에 파일 배치, RX 지정 폴더에서 확인 | 확인 절차/화면 |
| OPC DA | Simulator·Client 설치, ProgID·GUI 설정 | 환경·방법 |
| OPC UA | TX/RX 클라이언트·태그 조회, 전송 오류 | 미완료/오류 |
| APP | ncat 송신·수신 로그 확인 방법 | 방법 |
| DBMS | 제품 내 프로토콜 처리 구조 | E2E 성공 미확인 |

**시각화:** 성공을 뜻하는 체크 표시를 모든 프로토콜에 붙이지 않는다. FTP·OPC DA·OPC UA·APP마다 자료가 실제로 뒷받침하는 수준을 다르게 표시한다.

##### 페이지 6 — 공유 결과

**제목:** 64장 세미나 자료로 레거시 제품의 진입 경로 마련

**본문:** 제품 개요, 개발환경, GUI/CEM, CEMM, DTE, DPE, 시험 방법, Setup까지 순서를 설계했다. 화면과 코드 구조를 연결해 새 담당자가 설정·전송·상태 감시의 위치를 찾을 수 있는 설명 자료를 만들었다. 청중 수, 발표 일자, 후속 활용 횟수는 확인 후에만 기재한다.

#### 4. 면접 답변 소재

1. **개발을 했는가:** 이 프로젝트는 개발 참여가 없었다. 기존 제품을 분석하고 세미나 자료를 작성·발표했다. Git의 본인 커밋도 0건이다.
2. **복잡한 시스템을 어떻게 분석했는가:** 먼저 TX/RX 전송 경계를 잡고 GUI·CEM·CEMM·DPE·DTE·Setup의 책임을 나눴다. 화면의 서비스 설정에서 CEM API, DPE Factory, DTE 송수신으로 이어지는 호출/데이터 흐름을 추적했다.
3. **왜 세미나 자료가 필요한가:** 제품 기능별 문서만으로는 모듈 간 연결이 잘 보이지 않아 전체 시스템 지도와 실제 시험 절차를 한 순서로 정리했다. 64장 자료의 장 구성이 그 결과다.
4. **시험에서 무엇을 확인했는가:** FTP의 TX→RX 파일 확인 방법과 화면을 기록했고, OPC DA/UA와 APP의 환경/절차를 정리했다. OPC UA는 전송 오류로 미완료라고 명시했다.
5. **모호하거나 실패한 결과를 어떻게 전달했는가:** 가능한 것처럼 추정하지 않고 시험 환경·방법과 확인 결과를 나눴다. OPC UA 오류를 그대로 남겨 후속 검토 지점을 분명히 했다.
6. **제품 기술을 어느 수준까지 아는가:** C#/.NET·WPF·MariaDB·ZeroMQ·FTP/DBMS/OPC/APP는 소스 분석과 환경 조사에서 접했다. 이 프로젝트에서 해당 모듈을 구현한 경력으로 제시하지 않는다.

#### 5. 출판 전 확인 항목

- 실제 발표 일자·대상·참석자 수, 자료가 이후 업무에 사용된 사례.
- 구·신버전 설치의 완료 기록과 직접 담당 범위.
- FTP 외 프로토콜의 성공 로그, 시험 건수/데이터 크기, OPC UA 오류 후 해결 여부.
- 원본 PPTX 슬라이드의 내부 IP·계정·비밀번호·공유 경로·제품 세부 화면을 제거하고 개념도로 재제작할 수 있는지.
- `프로젝트분석.md`의 저작자가 확인되기 전까지 2,661줄을 본인 작성량으로 쓰지 않기.

#### 6. 문장 사용 제한

- “15개 저장소/938개 커밋 개발”, “단방향 암호화 엔진 개발”, “모든 산업 프로토콜 E2E 검증”은 사용하지 않는다.
- 세미나 PPTX의 자료 생성·수정 시점을 실제 발표일로 바꾸지 않는다.
- OPC UA 전송 성공을 주장하지 않는다. 자료에는 전송 오류와 후속 확인 예정이 명시돼 있다.
- 세미나 원본 화면을 공개 포트폴리오에 그대로 붙이지 않는다. 내부 식별자와 접속정보를 익명화한다.
