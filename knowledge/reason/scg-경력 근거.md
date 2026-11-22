# SCG MDMS·GASDOT 경력 근거

[상세 근거](#evidence) · [지원서 제작 원고](#materials) · [Git 기록](#git)

## 역할과 범위

NiFi 통합, Event 통계, CO 예방, Collector 재수집 담당. 통합 대시보드 일부 구현과 후속 UI 보완.

## 재조사에서 확인한 근거

2026-11-22 로컬 전체 Ref와 개인 author 재집계. 27개 저장소 282건 중 10개 저장소 개인 76건(비병합 71건). `052c657`의 공통 알람 기준 템플릿·CSS/JS와 각 대시보드 화면 연결을 확인했다.

1~5·124번의 NiFi·통합 대시보드·통계 업무는 개발 결과서와 개인 변경을 찾는 데 쓴다. 운영 반영과 고객 검수 판정은 결과 자료의 유무로 확인한다. [업무 티켓 소스](../ticket/업무%20티켓%20소스.md)

<a id="evidence"></a>

## 상세 근거

### SCG MDMS·GASDOT 개발·유지보수 업무·성과·기여도 상세 근거

> 서울도시가스 MDMS·GASDOT 여러 저장소와 Meta 산출물을 합친 상세 정보 수집 문서. 신규 Dashboard 전체 단독 개발로 과장하지 않고 공식 역할표·본인 Commit·Test 문서를 구분한다(→ §3, §12).

#### 1. 분석 범위

##### 1.1 Git 활동 총괄

| 구분 | 내용 |
|---|---|
| 범위 | 현재 `07. scg/gasdot`, `07. scg/mdms` (과거 경로 `06. scg`) |
| 본인 식별 | Git author email `jspark@4net.co.kr` |
| Code 활동 기간 | 2025-11-20 ~ 2026-01-23 주요 변경; 2026-11-09 대시보드 UI 추가 변경 |
| Code Commit | 현재 10개 저장소 76건(Merge 5건 포함), 비병합 71건. 기존 75건은 2026-01까지의 조사 스냅샷 |
| 저장소 탐색 | `07. scg` Code 저장소 27개 중 본인 활동 10개 |
| 변경량 참고치 | +11,406 / -12,004줄 |
| Meta 문서 Commit | 4건 별도 |
| 제외 | 감사 시점 미커밋(`mdms-mgr-norm` `.DS_Store` 삭제, `mis-to-gasdot-norm` `pom.xml` 수정)은 사용자 작업으로 보존, 통계·성과 제외 |

##### 1.2 저장소별 활동

| 저장소 | Commit | 기간 | 주요 내용 |
|---|---:|---|---|
| `mdms/mdms-web` | 24 | 2025-12-02~2026-11-09 | Dashboard Detail, Search, Excel, UI 및 알람 기준 표시 |
| `mdms/mdms-api` | 20 | 2025-12-01~2026-01-23 | Oracle Procedure Mapping, DTO, Detail Query |
| `mdms/mis-to-mdms-norm` | 6 | 2025-11-20~2025-12-22 | 공통 Code, SDB/AMI 정보 구분 |
| `mdms/mdms-mgr-norm` | 5 | 2025-12-29~2026-01-23 | Event 통계 Join Key |
| `mdms/mdms-mgr-elec` | 1 | 2026-01-06 | Source 최신화 |
| `gasdot/gasdot-mgr-norm` | 5 | 2025-12-23~2026-01-23 | 예방 Event 조건 |
| `gasdot/gasdot-collector-plc` | 4 | 2026-01-07~2026-01-23 | CNU 재수집, DB 구조·Mapper |
| `gasdot/mis-to-gasdot-norm` | 4 | 2025-11-20~2025-12-18 | 공통 Code·아파트 구분 |
| `gasdot/gasdot-api` | 4 | 2025-12-09~2026-01-23 | 누락 조건·환경 이전 |
| `gasdot/gasdot-web` | 3 | 2025-12-09~2026-01-14 | 누락 조건·Source 최신화 |

주요 Patch 규모: PLC Collector `2a2d697` 54개 파일 +756/-1,945, Join Key 2줄, CO 조건 4개 파일 +73/-8, Dashboard Excel 8개 파일 +371/-102.

##### 1.3 직접 작성 산출물

- `[서울도시가스] 대시보드개선사업외 2차 유지보수 개발 결과서 - 박종성.docx` (작성자·담당 프로그램 명시 → 역할 판단의 강한 근거)
- `MDMS - NIFI 개발망 테스트 결과.docx`
- `gasdot-mgr 예방이벤트 테스트.docx`
- `scg-mdms 이벤트 통계 조인 조건 변경 테스트.docx`
- `동기화 프로세스 변경 사항에 따른 영향도 평가 (1), (2).docx`
- Test Scenario·Result Text, MDMS Dashboard Procedure Interface Definition

#### 2. 사업·시스템 맥락

| System | 역할 |
|---|---|
| GasDot | 규제 Sandbox 계량기·검침·Event |
| MDMS | AMI 계량기·검침·Event |
| MIS | 고객·계량기 Master, 장애·업무 정보 |
| NiFi | 검침·Event 수집·전처리 전달 |

문제(기존 분리 운영):

- 유사 계량기 정보가 여러 System에 혼재, 통신 방식별 수집 성공·누출 Event를 System마다 따로 확인
- `COMM_NUM` 변경 가능 → 통계 Join 오류 위험
- Source별 검침 Table 분리로 Dashboard Data 제공 복잡
- GasDot·AMI·Sandbox 구분이 Data에 미명시
- 장기 미수신 Data 재수집 API 미동작
- 단일 CO 측정값만으로 예방 Event 과다 발생

목표: 전체 AMI 관점 통합 Dashboard(WorkFlow·Sandbox·AMI·ALL·Details 5개 Tab), 누출 Event·처리 상태·통신 방식·수집 성공률 통합, Source별 검침 Data 통합 Table 제공, 계량기 식별·통계 정합성 개선, 유지보수 이슈 정상화.

#### 3. 공식 역할과 Git 증거의 구분

개발 결과서 담당자 Role 표상 박종성 공식 담당:

| Program | 공식 작업 | 상세 |
|---|---|---|
| NiFi | 업체별 검침 Data 통합 Table 전환에 맞춘 Flow 개발 | §5 |
| `scg-mdms` | Event 통계 Join을 `COMM_NUM`→`MTR_NUM` 변경 | §6 |
| `gasdot-mgr` | CO 예방 Event 생성 조건 변경 | §7 |
| `gasdot-plc-collector` | 미수신 시 CNU REST API 호출 장애 해결 | §8 |

- 같은 문서에서 신규 통합 Dashboard 본 화면과 `mis-to-mdms`, `mis-to-gasdot`의 주 담당자는 다른 담당자로 기재.
- Git에는 본인 `mdms-web` 23건, `mdms-api` 20건 직접 증거 → 공식 역할표의 "Dashboard 전체 주 개발자"를 뒤집는 근거는 아님. Details·Procedure Interface 대응·Search·Excel·Pagination·UI QA를 실제 수정한 직접 증거.
- 정확한 표현: 신규 Dashboard 전체 주 개발자로 단정하지 않음 / 공식 유지보수 4개 영역 담당 / Dashboard Details·Procedure Mapping·Search·Excel·Pagination·UI Bug 직접 보완.

#### 4. 기술·Data Stack

Java·Spring Boot 계열 Service, MyBatis XML Mapper, MariaDB, Oracle·PL/SQL Procedure, Apache NiFi, HTML·JavaScript·CSS, Excel Download, Scheduler·Batch, REST API, JDBC·HikariCP, GMTR·EMTR·EVENT·MTR Data Model.

#### 5. NiFi 통합 Table Flow (공식 담당)

##### 5.1 요구사항

Source별 분리 수집되던 검침 Data를 통합 Table 구조에 맞춰 기존 흐름을 유지한 채 전처리 Server에 제공. 대상 원천 Table(티켓 근거): GMTR(Gas Meter Reading) 9개, EMTR(Electric Meter Reading) 7개, EVENT 2개.

##### 5.2 수행 내용

- 기존 NiFi Flow·Processor 역할 분석, Source별 Query·Code Mapping 수정, 통합 Raw Table Schema 맞춤 Insert
- `GenerateTableFetch` Maximum Value Column·State 분석, 과거 Row 재수집 시 State 우선순위 확인
- Local Dummy Data Test → 개발망 Test, 운영 Flow 무영향 별도 Test Config·Test DB 연결
- 운영 반영 절차 문서화

개발망 Test(문서 근거):

- MDMS EMTR·EVENT·GMTR Flow 개별 실행, Source Table에 Test Data 삽입 후 통합 Table 결과 비교
- EMTR은 FK 중복으로 7건 중 1건을 NiFi Insert에서 제외해 6건 처리
- 민감한 Server 주소·계정 정보는 본 문서에서 제외

##### 5.3 해결한 핵심 문제

`GenerateTableFetch`는 Query 조건보다 Processor State가 우선할 수 있어, 이전 Maximum Value보다 작은 Row 재수집 시 Query만 바꾸면 누락 가능.
대응: State `initial.maxvalue` 확인 → Test Processor 별도 생성 → 운영 State 손상 없이 재수집 → Dummy Data와 Target Table 대조.

##### 5.4 성과

- 다수 Source Table을 통합 Raw Table로 연결
- 운영·Test Flow 분리로 검증 위험 축소
- State로 인한 과거 Data 누락 사전 식별
- 후속 Dashboard·전처리의 Source별 Table 차이 축소 기반

#### 6. MDMS Event 통계 Join Key 개선 (공식 담당)

##### 6.1 문제·수정

- 문제: Event 통계 Query가 `MDMS_EVENT`–`MDMS_MTR`을 `COMM_NUM`(통신번호, 변경 가능)으로 Join → 통신번호 변경 시 과거 Event와 현재 Master 단절, 통계 누락 가능.
- 수정: Join Key를 고유 계량기 번호 `MTR_NUM`으로 변경, 일·시간·월·Event 통계 영향 확인, `EventStatisticsMapper.xml` 수정, Query 가독성 개선.
- Commit: `379a488` Join 조건 `COMM_NUM`→`MTR_NUM`, `acff29f` Query 가독성.

##### 6.2 Test Scenario

1. 운영 Event Data를 개발망에 복제
2. 수정 전 Process로 재처리, 기준 통계 확인
3. 특정 장비 `COMM_NUM`을 다른 값으로 변경
4. Event Type별 Test Row 구성
5. 수정 전 재처리
6. `COMM_NUM` Join에서 누락 통계 확인
7. 수정 Process Upload
8. `MTR_NUM` Join으로 Event Type별 Count 기대대로 증가 확인
9. 다른 Event Type으로 변경해 집계 감소 확인

기대값: 수정 전 통신번호 변경 Row 누락 → 수정 후 Event Type 0·1 각 1건 증가, 별도 변경한 Type 18은 1건 감소.

##### 6.3 성과

Business Identifier 안정성 분석으로 통계 정합성 수정. 단순 SQL 문법 변경이 아니라 Key의 의미·변경 가능성을 파악하고 AS-IS/TO-BE Data로 재현한 작업.

#### 7. GasDot CO 예방 Event 조건 (공식 담당)

##### 7.1 문제·업무 규칙

- 문제: PLC 검침 Data 15분 주기 유입 시 단일 시점 CO 값만으로 예방 Event 생성 → 일시적 값에도 과다 생성 가능.
- 규칙: CO 45~49ppm 범위 / 현재 조건과 **정확히 1시간 전** 동일 장비 CO 값이 모두 기준 범위 / 동일 구간 중복 예방 Event 억제.

##### 7.2 구현

- `GASDOT_RAW_GMTR`에서 동일 Serial Number의 `targetDate - 1시간` 레코드 조회
- `checkCo` Query·Mapper Method, Parameter Model, GMTR Serial Number Task 조건
- 기존 Event 생성 흐름과 결합, Query 가독성 개선, 조건 오류 후속 수정
- Commit: `0519d1b` 예방 Event 조건 수정, `a5637dc` 조건 Code 오류 수정, `03005e2`·`127017f` Query 가독성

##### 7.3 Test (Meta 문서 1차·2차)

- 시간대별 CO 수치와 예상 Event 여부를 Table로 정의
- `GASDOT_RAW_GMTR` Test Data 삽입 → `GASDOT_EVENT` 결과 조회
- 예상 시점 18:00, 17:30, 17:00 Event 생성 확인
- Test Case 반복, 조건 수정 후 재검증

##### 7.4 성과와 경계

- 현재 단일 임계치 조건에 1시간 전 상태 확인 추가, False Positive 성격의 불필요 Event 감소 기반, 업무 규칙을 Query·Scheduler Logic으로 변환
- 경계: `checkCo`는 `GMTR_DTM = DATE_SUB(targetDate, INTERVAL 1 HOUR)` 레코드 존재만 검사. 15분 간격 중간 레코드 4개 전체 검사가 아니므로 "60분 내내 연속 유지"라고 쓰지 않음. 실제 Event 감소율 자료 없음 → 정량화 금지.

#### 8. GasDot 미수신 Data 재수집·CNU API (공식 담당)

- 문제: 검침·Event 장기 미수신 시 CNU REST API 호출로 재수집해야 하나 기존 기능 미동작.
- 분석: CNU API 자체 상태 확인, 재요청 흐름 추적, 별도 Test Program 재현, Collector JDBC Driver·DataSource 구성 확인, DB Session을 Bean으로 관리하지 않고 Property·XML이 분리돼 생기는 문제 분석, 수집 DB·전처리 DB 이중 DataSource 정리, Mapper 운영 환경 맞춤 수정.
- Commit: `e8e5396` Source 최신화, `2a2d697` Collector 리팩터링, `d381250` 운영 Mapper 수정, `a84a0c6` 개발 Server 환경 이전.
- 성과: 외부 API 장애와 내부 Collector 장애 분리, DataSource·JDBC·Mapper 구조 정리로 재수집 흐름 정상화, 운영용 Mapper·환경 설정 구분.
- 재수집 건수·장애 감소 시간 자료 없음. CNU API 단독 시험에서는 간헐적 timeout도 기록돼 있으므로 **외부 API timeout까지 완전히 해결했다는 뜻은 아니다**. 내부 Collector의 DB 연결·Mapper 재구성과 시험 성공 범위는 [추가 전수조사 §6](#follow-up)에서 분리한다.

#### 9. MIS→MDMS 정보 구분과 공통 Code (Git 추가 참여)

##### 9.1 요구사항·수행

- MIS에서 넘어오는 MDMS 계량기 정보를 GasDot 포함 `SDB` / 그 외 `AMI`로 구분, 공통 Code `C31118`, `C31119`를 MDMS·GasDot 동기화에 추가.
- 수행: `MIS_MTR.INFO_DIV_CD` 추가, History Table 반영, Oracle 조회 Query 개선, GasDot 계량기 Subquery·Outer Join, 기존 조건 유지하며 SDB·AMI 분류, 공통 Code 추가, 전체·분류 Count 비교, 누락 Data 확인, 개발 전·후 Query 영향도 평가.
- Commit: `3e2c385` 공통 Code·GasDot Subquery 정보 구분, `e282a6f` Subquery·공통 Code, `537fab8` `INFO_DIV_CD` 비교 추가.

##### 9.2 영향도 평가 Test Point

1. 수정 전·후 전체 Row 수 동일
2. SDB + AMI 합계 = 전체
3. SDB Count = 실제 GasDot 대상
4. GasDot 대상인데 `INFO_DIV_CD` null Row = 0
5. GasDot 미소속 계량기의 SDB 오분류 없음
6. 공통 Code 2개 추가 후 예상 6건 생성

동기화 Process 20개 이상 단계 검토: Oracle Resource 조회, 중복 `COMM_NUM` Filter, 신규·삭제·충돌 Data, History 저장, 일반계량기 전환, 거래 결과, IMEI Update.

##### 9.3 성과와 경계

- 통합 Dashboard의 AMI·Sandbox 일관 구분 Data 기반, 기존 동기화 결과 수 보존하며 Column 추가, Outer Join 누락·중복 위험을 Count Query로 검증
- 경계: 공식 역할표상 주 담당은 다른 담당자. 본인 Commit은 직접 수정·보완 참여 근거이며 전체 설계 단독 담당으로 쓰지 않음.

#### 10. MIS→GasDot 아파트 구분 (Git 추가 참여)

- 요구사항: GasDot 계량기를 한화·삼정·동아·본사 등 아파트 유형으로 구분, 공통 Code를 Oracle Query·동기화 Data에 반영.
- 본인 Commit: `901b493`, `d43f676` 공통 Code `C31118`, `C31119`, 출장 환경 반영·Source 정리.
- 경계: 공식 주 담당 별도 → "공통 Code와 Query 반영에 참여"가 정확.

#### 11. MDMS 통합 Dashboard 유지보수·개선 (Git 추가 참여)

##### 11.1 화면 요구사항

| 화면 | 목적 |
|---|---|
| WorkFlow | 서울도시가스 업무 흐름, 통신 방식별 성공률 |
| Sandbox | 최근 1시간 누출 Event·처리·통신·아파트 현황 |
| AMI | 최근 1시간 AMI 누출 Event·처리·수집 현황 |
| ALL | AMI+Sandbox 통합 |
| Details | 누출·미통신 계량기·사용시설·점검 결과 |

##### 11.2 본인 Web 개선

- Details: Query 수정, 미통신 장비 조회, 지침 Code Join, 미통신 진행 상태를 처리중으로 고정, Detail 변수명 Interface 맞춤, 대문자 DTO → camel/lowercase
- Search: Pagination 분리, 시작·종료 날짜 Validation, 지역·고객센터 Search Term API, Modal Mapping
- Excel: Download, CSV 방식 → 실제 Excel 생성, Dashboard용 Excel 분리, 100행 단위 API Pagination으로 누적 기록, 최종 Code 기준 최대 10만 건 초과 방어
- UI: 전체 건수 Comma, Details 전체 건수 Style, Dashboard Interval 복구

##### 11.3 Oracle Procedure Mapping

| Procedure | 내용 |
|---|---|
| `PROC_GET_MDMS_INFO` | Event 발생·처리 현황 |
| `PROC_GET_EVENT_LIST` | 사용계약별 Event |
| `PROC_GET_AMI_EVENT_LIST` | AMI 상세 |
| `PROC_GET_SDB_EVENT_LIST` | Sandbox 상세 |
| `PROC_GET_CHK_HIST` | 점검 이력 |
| `PROC_GET_BOILER_INFO` | 보일러 정보 |

- 입력: AMI/SDB/ALL, Event 종류, 통신 방식, 통신·미통신, 지역·고객센터, 정렬, 계량기
- 출력: Event Count·처리 상태, 사용계약, 계량기, 고객·주소, 점검 결과, 보일러 정보
- 본인 `mdms-api` Commit: Procedure 변경 대응, `toProc`와 Type, Oracle Mapper 배포, Procedure Mapping 가독성, Package 이름 변경, 출장 중 2차 수정

##### 11.4 성과와 경계

- 여러 System의 Event·검침·통신 정보를 한 화면에서 단계적 조회, 미통신 장비·점검 정보까지 Detail 연결
- 화면 검색 조건과 Download Result 정합성, Oracle Procedure Interface 변경을 API·Web 동시 반영
- 운영자용 Dashboard Detail 실제 XLSX 추출, 100행 단위 조회·누적 작성으로 전체 Result 일괄 Memory 적재 완화
- Excel 경계: 초기 `12c5f06` Patch의 파일당 100만 Row 분할·다중 파일 ZIP Logic은 이후 Source 최신화로 최대 10만 건 제한·100행 누적 작성 구조로 변경 → "100만 건·ZIP 지원" 금지, **"최대 10만 건 방어가 있는 Paged Excel Export"**로 기록.
- 신규 화면 전체 주 개발 기여는 다른 담당자 → 본인 성과는 "API·Web 후속 개발·Interface Mapping·Excel·QA"로 한정.

#### 12. 운영·배포·환경 유지보수

개발 Server 이전, 개발·운영 Mapper 분리, Source 최신화, 배포용 Oracle Mapper, JAR 배포·Rollback 절차, Service Start·Stop Script, 출장 환경 수정, 운영용 설정 확인. 개발 결과서의 민감한 접속 정보는 경력 문서에서 모두 제외.

#### 13. 업무 성과 종합

- Data 흐름 추적: NiFi Source → Raw 통합 Table → 전처리 Manager → Oracle/MariaDB → API Procedure → Web Dashboard 전체를 여러 저장소에서 추적.
- 정합성 중심 유지보수: 변경 가능한 `COMM_NUM` 대신 `MTR_NUM`, SDB/AMI 분류 Count, Outer Join 누락, NiFi State, 미수신 재수집, Event 현재값·1시간 전 시점 비교. 운영 장애를 Identifier·State·Time Window·Source–Target Mapping 문제로 분석.
- 안전한 운영 반영: Dummy Data, AS-IS/TO-BE 비교, 별도 Test Flow·DB, 기대 Count, Rollback, 개발망 후 운영 반영.
- 다중 Legacy 저장소 수정: 2025-11~2026-01 10개 저장소 75건, 2026-11 추가 UI 1건으로 현재 개인 76건. Web·API·Batch·Collector·Sync·NiFi를 오가며 수정 범위 연결.

#### 14. 본인 기여도 판단

| 구분 | 영역 |
|---|---|
| 공식 직접 담당 | NiFi 통합 Table Flow, MDMS Event 통계 Join Key, GasDot CO 예방 Event, GasDot PLC Collector·CNU 재수집 |
| Git 추가 확인 | MDMS Web Details·Excel·Search·UI, MDMS API Oracle Procedure Mapping, MIS→MDMS 정보 구분·공통 Code, MIS→GasDot 공통 Code, 개발 Server 이전·배포 보정 |
| 기여도 경계(Claim 금지) | 통합 Dashboard 전체 신규 UI 단독 개발, Oracle Procedure 전체 작성, 서울도시가스 전체 AMI Architecture, NiFi Platform 자체 개발 |

안전한 표현:

> 서울도시가스 MDMS·GASDOT 유지보수에서 NiFi 통합 Flow, Event 통계 Join Key, CO 예방 Event, 미수신 재수집을 담당하고, 통합 Dashboard의 Oracle Procedure Mapping·Details·Excel·검색 기능을 보완했다.

#### 15. 이력서·자기소개서로 압축 가능한 사실

- SCG 10개 저장소에서 본인 Commit 76건(비병합 71건; 2026-11 UI 1건 포함)
- GMTR 9·EMTR 7·EVENT 2개 Source Table의 NiFi 통합 Flow
- `GenerateTableFetch` State를 고려한 과거 Data 재수집
- MDMS Event 통계 Join을 `COMM_NUM`에서 `MTR_NUM`으로 변경
- CO 현재값과 정확히 1시간 전 값을 함께 확인하는 예방 Event 조건
- CNU API 미수신 재수집의 DataSource·JDBC 문제 해결
- SDB/AMI 정보 구분과 영향도 Count 검증
- MDMS Dashboard Details·Excel·Search·Procedure Mapping
- 본인 이름의 개발 결과서와 Test 산출물

#### 16. 추가 확보하면 좋은 정량 정보

NiFi 운영 일 처리량 / 통합 Flow 운영 반영 후 누락·중복 건수 / 예방 Event 변경 전후 발생 건수 / CNU 재수집 성공 건수·장애 시간 / Join Key 수정으로 복구된 통계 Row 수 / Dashboard Excel 10만 건 조건의 실제 생성 시간·성공 여부 / 본인 수정 Oracle Procedure·API 수 / 고객 검수·운영 반영 날짜와 결과.

#### 17. 대표 Commit 증거

| 날짜 | 저장소 | Hash | 내용 |
|---|---|---|---|
| 2025-11-20 | `mis-to-mdms-norm` | `3e2c385` | 공통 Code·SDB/AMI 구분 |
| 2025-12-01 | `mdms-api` | `c357ac6` | 미통신 장비·지침 Code |
| 2025-12-05 | `mdms-web` | `12c5f06` | Excel Download |
| 2025-12-07 | `mdms-web` | `ca94035` | 날짜 Validation |
| 2025-12-09 | `mdms-web` | `8d0bc18` | Modal Mapping |
| 2025-12-18 | `mdms-web` | `223152c` | CSV→Excel |
| 2025-12-23 | `gasdot-mgr-norm` | `0519d1b` | 예방 Event 조건 |
| 2026-01-06 | `gasdot-mgr-norm` | `a5637dc` | 예방 Event 오류 수정 |
| 2026-01-07 | `mdms-mgr-norm` | `379a488` | Join Key `COMM_NUM`→`MTR_NUM` |
| 2026-01-15 | `gasdot-collector-plc` | `2a2d697` | Collector 리팩터링 |
| 2026-01-23 | 다수 | 환경 Commit | 개발 Server 이전·운영 Mapper |

기타 Dashboard Commit(날짜 미기재): `721975a` Details Query, `1086ef9` 미통신 진행 상태, `0374cb1` DTO·Pagination, `602ebd5` 지역·고객센터 Search API, `cfc8684` Dashboard Excel 분리, `296326b` 전체 건수 Comma.

#### 18. 2026-11-21 재조사 연결

- 27개 저장소 Git author 전수 결과와 2026-11-09 대시보드 알람 기준 UI 추가를 [상세 보완 문서](#follow-up)에 기록했다. 개인 커밋은 총 76건/비병합 71건이며 [저장소별 목록](#git)에서 확인할 수 있다.
- 직접 수행한 `03. scg - 개발 및 유지보수`의 NiFi Flow·시험, 통계 Join, CO 예방 이벤트, CNU 재수집, 정보 구분 SQL과 2차 UI 요청을 코드·시험 문서와 다시 대조했다. 사람인·Figma 제작 문장은 [별도 원고](#materials)에 둔다.
- 이 문서의 CNU “정상화”는 **Collector 내부 DB 연결·재처리 문제와 일부 시험 성공**을 가리킨다. CNU API 단독 시험의 간헐적 timeout도 확인되므로 외부 timeout의 완전 해소로 표현하지 않는다. 알람 기준 팝업의 “1시간 유지” 설명과 CO 이벤트 코드의 실제 두 시점 비교도 구분한다.

#### 19. 2026-11-21 공식 문서의 프로젝트 기간·저작 근거 보강

- `07. scg/00. meta/00. scg - 회사 문서 (git)/.../[서울도시가스] 대시보드개선사업외 2차 유지보수 개발 결과서 - 박종성.docx` 본문에 **작성자 박종성**, **프로젝트 기간 2025-10-02~2025-12-31**이 적혀 있다. Git에서 관측되는 개인 주요 변경(2025-11~2026-01)과 2026-11-09 후속 UI 1건은 이 공식 기간과 별도 축으로 기록한다.
- 문서의 5개 탭·통합 대시보드 목적은 **전체 사업 범위**를 설명한다. 개인 역할은 같은 문서의 담당자 표와 실제 Git 변경을 기준으로 NiFi·통계·예방 이벤트·Collector 및 대시보드 일부 보완으로 한정한다. 문서 기간을 근거로 2026-11까지 연속 투입했다고 쓰지 않는다.

<a id="follow-up"></a>

### SCG MDMS·GASDOT 추가 전수조사: NiFi·정합성·재수집·대시보드

> 2026-11-21 기준. [기존 상세 근거](#evidence)에 **추가**한 조사다. 사용자 확인에 따라 `07. scg/00. meta/03. scg - 개발 및 유지보수`를 직접 작업 범위의 중심으로 삼았다. 그 안의 외부 요청서·참고 화면·퍼블리싱 자산을 전부 개인 저작물로 해석하지 않는다. 작성자 이름이 붙은 개발 결과서는 `00. scg - 회사 문서 (git)`에서 **해당 파일만** 대조했다. 커밋 전수 색인은 [별도 문서](#git), 사람인·Figma용 문장은 [제작 원고](#materials)에 둔다.

#### 1. 변경된 조사 사실과 범위

- 현재 원본 경로는 `07. scg/`이다. 기존 문서의 `06. scg/` 표기는 과거 경로로 정정한다.
- `gasdot` 13개·`mdms` 14개, 총 **27개 Git 저장소**의 전체 참조를 `jspark@4net.co.kr` author로 다시 조사했다. 개인 변경이 있는 저장소는 **10개**, 개인 커밋은 Merge 포함 **76건**, Merge 제외 **71건**이다. 기존 문서의 75건·2026-01-23 종료는 2026-11-09 `mdms-web` 변경 1건을 반영하기 전 스냅샷이다.
- 개인 활동은 2025-11-20~2026-11-09의 **커밋 관측 기간**이다. 중간 공백이 있어 이 전체를 연속 투입 기간·근무 개월 수로 쓰지 않는다. 본 업무의 주요 변경은 2025-11~2026-01, 추가 대시보드 요청은 2026-11이다.
- 현재 `mdms-mgr-norm` 작업 트리의 `.DS_Store` 삭제는 미커밋 상태이며 개인 커밋 통계·성과에 넣지 않고 건드리지 않았다. 다른 26개 저장소는 조사 시점 깨끗했다.
- 저장소별 숫자와 71개 비병합 제목은 [전수 목록](#git). 코드 존재만으로 전사 시스템·대시보드 전체를 본인 단독 개발했다고 주장하지 않는다.

##### 1.1 개인 변경 저장소

| 시스템 | 저장소 | 개인 전체 / 비병합 | 주로 확인되는 변경 |
|---|---|---:|---|
| MDMS | `mdms-web` | 24 / 22 | Details·검색·Excel·UI·2026-11 알람 기준 표시 |
| MDMS | `mdms-api` | 20 / 17 | 대시보드 Detail 조회·Oracle Procedure 매핑·DTO |
| MDMS | `mis-to-mdms-norm` | 6 / 6 | 계량기 SDB/AMI 구분·공통 코드·동기화 비교 |
| MDMS | `mdms-mgr-norm` | 5 / 5 | Event 통계 Join Key·SQL 정리 |
| MDMS | `mdms-mgr-elec` | 1 / 1 | Source 최신화. 기능 소유 주장 금지 |
| GasDot | `gasdot-mgr-norm` | 5 / 5 | CO 예방 이벤트 조건과 후속 오류 수정 |
| GasDot | `gasdot-collector-plc` | 4 / 4 | CNU 연계 재수집 흐름의 DB 연결·Mapper 재구성 |
| GasDot | `mis-to-gasdot-norm` | 4 / 4 | 공통 코드·정보 구분 연계 |
| GasDot | `gasdot-api` | 4 / 4 | 누락 조건·환경 변경 보완 |
| GasDot | `gasdot-web` | 3 / 3 | 누락 조건·화면/환경 보완 |

#### 2. 공식 담당과 추가 코드 기여

- 본인 이름이 작성자로 명시된 `[서울도시가스] ... 개발 결과서 - 박종성.docx`의 담당표와 설명을 대조했다. 직접 담당 4개 축은 **NiFi 통합 테이블 Flow**, **MDMS Event 통계 Join Key**, **GasDot CO 예방 이벤트**, **PLC Collector/CNU 미수신 재수집**이다.
- `mdms-web`·`mdms-api`의 44개 개인 커밋(그중 비병합 39개)은 대시보드 Details·Oracle Procedure 인터페이스·검색·Excel·UI 보완의 직접 코드 근거다. 공식 개발 결과서에는 통합 대시보드 화면 전체의 주 담당자가 별도로 있어 “대시보드 전체 설계·개발”이라고 쓰지 않는다.
- `mis-to-mdms-norm`과 `mis-to-gasdot-norm`의 개인 커밋은 정보 구분·공통 코드·Query 보완 참여를 증명한다. 기존 문서대로 이 작업의 전체 주 담당으로는 쓰지 않는다.
- `03` 안의 `대시보드 알람기준 표기.pptx`는 3장으로, 마지막 장에 외부 담당자의 요청 문구가 들어 있다. 따라서 **요청을 받은 자료**다. 본인의 작업은 그 요구를 `mdms-web` 코드에 반영한 `052c657`로 확인된다. PPTX 전체를 개인 작성 성과로 쓰지 않는다.

#### 3. NiFi 통합 테이블 Flow: 구성과 검증 근거 보강

##### 3.1 왜 필요한 작업이었나

- 기존 원천 검침·이벤트 테이블은 수집원과 데이터 종류에 따라 분리돼 있었고, 통합 대시보드·전처리에서 동일한 구조로 읽기 위한 통합 Raw 테이블 전환이 필요했다. 기존 문서와 `03/1차. nifi...`의 매핑 XLSX·SQL·Flow JSON·개발망 시험 DOCX가 서로 연결된다.
- 대상 범위는 기존 조사 기준 GMTR 9개·EMTR 7개·EVENT 2개 원천 테이블이다. 이는 **테이블 매핑 범위**이지 NiFi Processor 18개나 본인이 신규 작성한 기능 18개라는 뜻은 아니다.
- `MDMS - 통합 테이블 적용 및 NIFI 변경.xlsx`에는 `전처리 테이블`, `통합 테이블`, `통합테이블 NIFI 매핑 검증`, `NIFI 요약` 4개 Sheet가 있다. 이전 이력 Workbook에는 다른 팀·시기의 요구사항과 자산도 있으므로 전체를 본인 개발 근거로 귀속하지 않는다.

##### 3.2 Flow JSON이 보여주는 작업 범위

| 보존된 Flow 스냅샷 | 최상위 Group | 하위 포함 Processor 수 | 해석 |
|---|---:|---:|---|
| `NiFi_Flow_origin.json` | 7 | 120 | 기존 운영/원본 흐름 분석용 |
| `NiFi_Flow_analyze.json` | 7 | 120 | 비교·분석용 |
| `NiFi_Flow_local.json` | 4 | 56 | MDMS GMTR·EMTR·EVENT·통합 흐름 로컬 구상/시험 자산 |
| `NiFi_Flow_deploy.json` | 4 | 56 | 배포용 Export 자산 |

- 이 숫자는 각 JSON의 `flowContents`에서 중첩 Process Group까지 재귀적으로 센 **스냅샷 자산 규모**다. 56개 Processor를 모두 본인이 새로 개발했다고 해석하지 않는다. deploy/local의 Group은 MDMS GMTR·EMTR·EVENT·INTEGRATE이고, `GenerateTableFetch`, `ConvertRecord`, `ReplaceText`, `ConvertJSONToSQL`, `PutSQL`, `ExecuteSQL`, `RouteOnAttribute` 등이 포함된다.
- `GenerateTableFetch`의 Maximum Value State는 Query 조건과 별도로 증분 범위를 제어한다. 과거 행을 다시 읽으려면 Query만 고칠 것이 아니라 State와 Initial Maximum Value를 확인해야 한다. 운영 Flow의 State를 건드리지 않기 위해 시험 Flow·DB를 분리하고 Source/Target Row를 비교한 절차가 문서에 남아 있다.
- `MDMS - NIFI 개발망 테스트 결과.docx`는 EMTR·EVENT·GMTR 흐름을 각각 실행하고 결과를 확인한 기록이다. EMTR의 한 건은 FK 중복으로 7건 중 1건이 제외돼 **6건 Insert**로 기록돼 있다. 이것은 누락을 은폐하지 않은 테스트 결과이며, 전 구간 무손실 보증이나 전체 운영 성공률로 일반화하지 않는다.

#### 4. Event 통계 Join Key: 값이 바뀌는 식별자 문제

- 개인 diff `mdms-mgr-norm` `379a488`(2026-01-07)은 `EventStatisticsMapper.xml`에서 `MDMS_EVENT`와 계량기 Master의 Join을 `e.COMM_NUM = m.COMM_NUM`에서 `e.MTR_NUM = m.MTR_NUM`으로 바꾸고, null 방어 조건도 `MTR_NUM` 기준으로 맞췄다. 단순 컬럼 치환을 넘어 **통신번호는 변경 가능하지만 계량기번호는 통계 연결키로 안정적**이라는 업무 의미를 반영한 수정이다.
- `scg-mdms 이벤트 통계 조인 조건 변경 테스트.docx`에는 운영 Event를 개발망에 복제하고 AS-IS 재처리 → 대상 통신번호 변경·이벤트 유형별 Test Row 구성 → AS-IS 누락 확인 → TO-BE 재처리 → 유형 0·1 각각 +1, 유형 18의 828→827을 기대하는 순서가 있다. **기대값과 검증 절차**는 문서로 확인되나 고객 운영 통계 복구 총 건수는 없다.
- 후속 `acff29f`(2026-01-23)는 Query 가독성 개선이다. 주 성과를 “2줄 SQL 수정”이 아닌 **식별자 안정성 분석→재현 데이터→통계 정합성 수정**으로 기술할 수 있다.

#### 5. GasDot CO 예방 이벤트: 시점 비교와 표시 문구의 차이

- 개인 diff `0519d1b`는 CO 예방 이벤트 조건에 `ParamCheckCoData`, `GmtrMapper.checkCo`, `GmtrBySerialNumTask` 호출을 추가했다. 현재 이벤트 시각에서 **정확히 1시간 전** 같은 계량기의 원시 검침 `CO`가 기준 범위에 있는지 확인하고 결과가 0이면 이벤트 생성을 건너뛴다. 중복 이벤트 기존 검사와 연결된다.
- 후속 `a5637dc`는 조건 코드/쿼리 오류를 고쳤고, `03005e2`·`127017f`는 SQL 정리다. `gasdot-mgr 예방이벤트 테스트.docx`는 시간대별 입력·예상 결과·이벤트 테이블 조회를 적은 직접 수행 Test 자산이다.
- 2026-11 `mdms-web` 알람 기준 팝업에는 외부 요청 문구 그대로 “45ppm(1시간동안 농도 유지시)”가 표시된다. **코드가 실제로 증명하는 것은 현재 시점과 정확히 한 시간 전 두 시점의 조건 확인**이며, 그 사이 모든 15분 구간의 연속 유지 판정은 아니다. 포트폴리오에서 UI 설명을 Backend 알고리즘 증거로 사용하지 않는다.
- 현재값만으로 이벤트를 만들던 조건에 이전 시점 조건을 더해 일시값으로 인한 불필요 이벤트를 줄일 **가능성**이 있다. 변경 전후 이벤트 발생률의 실측치가 없어 감소율을 만들지 않는다.

#### 6. PLC Collector/CNU 재수집: 원인·재현·남은 제한

- 직접 작성한 `gasdot-plc-collector CNU API 확인.docx`는 CNU 응답 자체와 기존 Collector의 재처리 오류를 분리한다. 운영 조건을 건드리지 않기 위해 별도 테스트 프로젝트와 테이블을 만들었다고 명시한다.
- **외부 API 단독 시험:** 하루 구간의 재실행 성공, 일부 Row 삭제 후 타임아웃 실패, 같은 조건 재시험 성공; 일주일 구간의 두 차례 성공; 2주 구간의 첫 타임아웃 뒤 후속 요청 성공이 기록돼 있다. 따라서 CNU API 경로에 **간헐적 타임아웃이 관측**됐으며 완전 제거 성과로 쓰지 않는다.
- **기존 서비스의 별도 문제:** 원래 Collector는 평상시 수집은 동작했지만 재처리에서 DB 라이브러리 오류를 냈다. 문서는 DB 연결 설정이 XML과 `application.properties`에 갈라진 구조를 원인으로 기록한다. `2a2d697`(2026-01-15)은 수집 DB와 전처리 DB의 두 `DataSource`·`SqlSessionFactory`·Mapper를 분리하고 Controller/Service·설정·Profile을 재정리했다. `d381250`은 운영용 Mapper를 보정했다.
- **재구성 뒤 확인:** 테스트 문서에는 검침 API 응답 27건, 이벤트 API 응답 5건, 누락 검침/이벤트 조회 시험과 일별 반복 성공 기록이 있다. 이 수치들은 **시험 호출의 응답 사례**이지 운영 전체 재수집량·성공률이 아니다. CNU 쪽 간헐적 timeout의 장기 해소 여부는 미확인이다.
- 외부 API의 timeout과 내부 DB Bean/Mapper 문제를 갈라 진단한 점, 원본 운영 Flow에 직접 위험을 주지 않는 별도 시험 경로를 만든 점을 핵심 경험으로 기술한다. “CNU 장애를 완전히 해결”했다는 표현은 쓰지 않는다.

#### 7. MIS→MDMS 구분값과 검증 SQL

- `mis-to-mdms-norm` 개인 커밋 `3e2c385`, `e282a6f`는 공통 코드와 GasDot 계량기 분류 서브쿼리 반영, `537fab8`은 `INFO_DIV_CD` 비교를 추가했다. 현행 `GetQueryInfo.java`에는 GasDot 계량기 집합에 속하면 `SDB`, 아니면 `AMI`를 부여하는 로직이 있다.
- `03`의 영향도 평가 문서·SQL은 기존 Query, 변경 Query, 원본/결과 Count, 매칭·누락 탐색을 나란히 보관한다. `00. 테스트 시나리오 및 결과.txt`의 2025-11-20 측정은 전체 46,318건 = AMI 45,358건 + SDB 960건, GasDot 매칭 960건, 누락 탐색 0건으로 적혀 있다. 이는 **해당 개발 시험 데이터셋의 결과**이고 운영 전체 모집단 수치가 아니다.
- 시험 텍스트의 `SBD` 표기는 코드의 `SDB`와 다른 오타로 보인다. 사용자 제출 문장과 도식에는 **코드 기준 `SDB`**를 쓰고, 원본 Text의 표기를 수정하지 않는다.
- `MIS_MTR`, 이력 테이블의 Column 추가와 동기화 전후 비교는 전체 건수 보존, SDB/AMI 분할합, GasDot 대상 매칭, null/누락, `COMM_NUM` 충돌 등으로 검증했다. 공식 결과서상 주 담당이 별도이므로 개인 서술은 “분류 Query·공통 코드 및 영향도 검증에 참여”로 제한한다.

#### 8. MDMS 대시보드 API·Web과 2차 알람 기준 표시

##### 8.1 2025-12~2026-01 본인 코드 근거

- `mdms-api` `c357ac6`(2025-12-01): 미통신 설비와 지침값 코드 조회, Dashboard Detail Controller·DTO·Service·MariaDB/GasDot Mapper를 함께 변경했다. `721975a`는 Details Query와 Service를 조정했다. 이후 `acf4fcd`, `5f54a9c`, `2ecb8c0` 등은 Oracle Procedure 입력/반환 타입과 Mapper·Package 변경에 대응한다.
- `mdms-web` `12c5f06`(2025-12-05): Dashboard Detail Excel 컨트롤러·Service·DTO·JS·템플릿을 함께 변경했다. `223152c`는 CSV처럼 생성하던 산출물을 XLSX로 전환, `cfc8684`는 대시보드 전용 다운로드 경로를 분리했다. `ca94035` 날짜 입력 검증, `602ebd5` 지역·고객센터 검색 API 활용, `8d0bc18` Modal 매핑 등이 이어진다.
- 현행 `ExcelServiceImpl`의 해당 Detail 경로는 먼저 총 건수를 조회하고 **100,000건 초과 시 거부**, 한 페이지 **100건씩** API를 호출해 ExcelConverter에 누적 작성한다. 현재 Code의 제한과 루프를 확인한 것이며 실제 100,000건 성공·생성 시간의 실측 결과는 없다.
- UI 전체 화면의 주 설계/퍼블리싱 저작자는 별도다. 위 커밋이 증명하는 것은 **Details·검색·Excel·Procedure 연계와 QA**다.

##### 8.2 2026-11-09 추가 요청 `052c657`

- `03/2차. mdms-ui - 대시보드 알람기준 표기/대시보드 알람기준 표기.pptx`는 Sandbox·AMI·ALL 탭의 계량기와 경보기 옆 버튼을 누르면 기준 설명을 보이게 해 달라는 **수신 요청서**다. 3장 중 마지막 장에 요청자의 문구가 있다.
- 개인 커밋 `052c657`은 8개 파일을 변경했다. 계량기/경보기 기준을 공통 Thymeleaf Fragment(`dashboardNew_alarmStd.html`)로 작성하고 세 탭에 같은 Fragment를 삽입했다. `style.js`에서 팝업 열기/닫기, 기존 이벤트 Tooltip과의 동시 활성 상태 제거, 바깥 클릭 시 비활성화 동작을 연계했고 CSS·아이콘을 추가했다.
- **정확한 성격:** 화면에 **알람 기준 설명을 표시하는 UI 기능**이다. 계량기·경보기 임계치 판정 Backend를 이 커밋에서 새로 구현한 것은 아니다. 요청서의 수치를 공개 경력 문서에 그대로 옮길 필요는 없으며, 포트폴리오에는 “공통 Fragment로 세 탭에 일관되게 적용”을 강조한다.

#### 9. 이직 서술과 검증 경계

- **FACT:** 공식 개발 결과서의 4개 직접 담당, 27개 저장소 author 조사(10개에서 76건), `03` 직접 작업 시험/설계 자료, 대표 diff와 현재 코드. NiFi Flow JSON·XLSX는 설계·시험 자산이고 저장소 Git 커밋 수에 포함하지 않는다.
- **INFERENCE:** SCG 경험의 강점은 여러 레거시 시스템 사이의 **식별자·시간 조건·증분 State·외부 API/내부 DB 오류 경계**를 나눠 보고, 개발 데이터와 SQL/Flow를 통해 재현한 뒤 좁은 코드 수정에 연결한 점이다.
- **CLAIM 후보:** “SCG MDMS·GASDOT에서 NiFi 통합 테이블 흐름, 이벤트 통계 식별자 변경, CO 예방 이벤트, CNU 미수신 재수집을 담당하고, 대시보드 Details·Oracle 연계·Excel·검색·알람 기준 UI를 보완했다.”
- 정량 성과는 시험 조건을 같이 적는다. `46,318=45,358+960`은 정보 구분 개발 시험, NiFi `7→6`은 FK 중복 사례, CNU `27/5`는 특정 시험 응답이다. 운영 누적 처리량·성공률·발생률 감소를 추정하지 않는다.
- **제외:** SCG 전체 Architecture 설계, NiFi 자체 개발, 통합 Dashboard 전체 단독 개발, Oracle Procedure 전체 작성, CNU timeout 완전 해소, 이벤트 발생률의 정량 감소.

<a id="materials"></a>

## 지원서 제작 원고

통신번호 변경에 따른 통계 정합성과 외부 timeout·내부 DB 문제를 구분한 사례를 사용한다. 공식 사업 기간과 2026-11 후속 변경은 각각 표기한다.

### SCG 사람인 이력서·Figma 포트폴리오 제작 원고

> [기존 상세 근거](#evidence), [추가 전수조사](#follow-up), [개인 Git 색인](#git)을 바탕으로 다른 세션이 제작할 수 있게 정리했다. 회사·고객 서버 주소, 계정, 원본 데이터, 내부 화면은 공개 포트폴리오에 그대로 넣지 않는다.

#### 1. 프로젝트 카드

- **명칭:** SCG MDMS·GASDOT 개선 및 유지보수(공개 표현은 고객명 공개 허용 여부에 따라 “도시가스 AMI 관제 시스템”으로 대체 가능).
- **공식 문서상 프로젝트 기간:** 2025-10-02~2025-12-31(본인 이름의 개발 결과서 본문). **확인된 개인 Git 변경 시기:** 주요 코드 2025-11~2026-01, 후속 대시보드 UI 2026-11. 공식 사업 기간과 개인 커밋 관측 기간을 구분하고, 2026-11까지 연속 투입 개월로 계산하지 않는다.
- **핵심 책임:** NiFi 검침·이벤트 통합 테이블 Flow, Event 통계 Join Key, GasDot CO 예방 이벤트, PLC Collector 미수신 재수집. 추가 개발: MDMS Dashboard Details·Oracle Procedure 연계·검색·Excel·알람 기준 표시, MIS 동기화 구분값·공통 코드.
- **기술:** Java, Spring 계열, MyBatis, MariaDB, Oracle/PLSQL, Apache NiFi, REST API, HTML/JavaScript/CSS, XLSX, Batch/Scheduler.
- **기여 경계:** 대시보드 전체 신규 제작과 NiFi Platform 자체 개발은 본인 성과가 아니다. 2차 알람 기준 PPTX는 외부 요청서이며 구현 diff `052c657`이 개인 작업 근거다.

#### 2. 사람인용 문장

##### 2.1 한 줄

도시가스 AMI 관제 시스템에서 NiFi 수집 Flow와 통계 식별자·예방 이벤트·외부 API 재수집 문제를 해결하고, 대시보드의 조회·Excel·알람 기준 UI를 보완했습니다.

##### 2.2 세 문장

분리된 계량기·검침·이벤트 데이터를 통합 테이블로 연결하는 NiFi Flow를 개발·시험하고, 증분 State로 인한 재수집 누락 가능성을 확인했습니다. 변경 가능한 통신번호 대신 계량기번호로 Event 통계 Join을 바꾸고, CO 예방 이벤트에 현재와 한 시간 전 두 시점의 조건을 적용했습니다. CNU 미수신 재수집에서는 외부 API timeout과 내부 Collector의 DB 설정 문제를 분리해 후자를 재구성했으며, MDMS 대시보드 Details·Oracle Procedure 연계·검색·Excel·알람 기준 표시를 구현·보완했습니다.

##### 2.3 이력서 성과 항목 후보

1. **NiFi 통합 Flow:** GMTR 9·EMTR 7·EVENT 2개 원천 테이블을 통합 Raw 구조에 연결하는 Flow와 매핑·시험 자료를 작성. 개발망에서 EMTR 7건 중 FK 중복 1건을 제외한 6건 Insert를 확인하고 예외를 기록.
2. **통계 정합성:** MDMS Event와 계량기 Master의 Join을 변경 가능 `COMM_NUM`에서 `MTR_NUM`으로 교체. AS-IS/TO-BE 재처리 시험에서 통신번호 변경 시 빠지던 이벤트 유형별 통계가 기대대로 반영되는 시나리오를 구성.
3. **예방 이벤트:** GasDot CO 이벤트에 현재 시점과 정확히 한 시간 전 검침값의 기준 범위를 확인하는 SQL·Task 조건을 추가하고 후속 오류를 수정. “한 시간 동안 매 순간 연속 유지”는 코드가 검증하지 않으므로 사용하지 않음.
4. **재수집 장애 분석:** CNU API 단독 호출과 Collector 재처리를 분리 시험해 간헐적 외부 timeout과 내부 DB 연결 설정 충돌을 구별. 수집/전처리 DB의 DataSource·Mapper를 분리하고 재처리 경로를 검증.
5. **정보 구분 검증:** MIS→MDMS 동기화의 SDB/AMI 구분값과 공통 코드를 반영하고 기존/수정 Query의 Count·매칭·누락을 비교. 개발 시험 데이터 46,318건이 AMI 45,358건 + SDB 960건으로 분할되고 누락 탐색 0건인 사례를 기록.
6. **대시보드 실무:** MDMS Details API·Oracle Procedure Mapping, 검색/날짜 검증, 100건 단위 페이지 조회 기반 XLSX 생성, 최대 10만 건 초과 방어를 보완.
7. **2차 UI 요청:** Sandbox·AMI·ALL 탭의 계량기/경보기 알람 기준을 공통 Thymeleaf Fragment로 표시하고 Tooltip 간 열림 상태를 정리. 이는 기준 **표시** 기능이며 임계치 판정 엔진 변경이 아님.

##### 2.4 기술 역량별 재료

| 역량 | SCG 사례 | 뒷받침 증거 |
|---|---|---|
| 데이터 파이프라인 | Source별 검침·이벤트를 NiFi 통합 테이블로 매핑하고 State/재수집 시험 | Flow JSON 4종, 매핑 Workbook, 개발망 시험 DOCX |
| SQL 정합성 | 변하는 통신번호 대신 계량기번호 Join, 분류 Count·누락 Query | `379a488`, 정보 구분 SQL·시험 텍스트 |
| 도메인 규칙 | CO 이전 시점 검침 조건과 중복 이벤트 검사 연결 | `0519d1b`, `a5637dc`, 예방 이벤트 시험 |
| 장애 분석 | CNU API timeout과 Collector DB 연결 오류 분리 | CNU 시험 DOCX, `2a2d697`, `d381250` |
| Full-stack | Details·Procedure·검색·XLSX·Tooltip | `mdms-api`, `mdms-web` 개인 diff |

#### 3. Figma 포트폴리오 프레임별 원고

##### 프레임 1 — 프로젝트 맥락

- **제목:** “분산된 계량기·이벤트 정보를 한 흐름으로 읽게 만들기”
- **배경:** MIS Master, GasDot/MDMS 검침·이벤트, NiFi 수집, API Procedure, 대시보드가 서로 다른 저장소·DB·식별자를 사용한다.
- **내 역할:** 데이터 통합 Flow와 통계·이벤트·재수집의 공식 담당 4영역, 대시보드의 Details/Excel/검색/알람 표시 보완.
- **그림:** `원천 계량기·이벤트 → NiFi → 통합 Raw → MDMS/GasDot 처리 → Oracle/MariaDB → API → Dashboard`.
- **주의:** 그림의 전체 Architecture 자체를 개인 설계 성과로 표기하지 않는다.

##### 프레임 2 — NiFi 통합 Flow

- **문제:** 원천 테이블별 Format·증분 State가 달라 통합 Raw 구조로 옮길 때 누락·중복 위험이 있다.
- **작업:** 기존 Flow 분석, GMTR·EMTR·EVENT 구분 매핑, 통합 테이블 컬럼 대조, 별도 개발망 Flow/DB, Dummy Data 시험.
- **기술 포인트:** `GenerateTableFetch`의 Maximum Value State는 Query만 바꿔도 과거 행을 재수집하지 않을 수 있다. 운영 State를 보존하며 별도 시험 Flow로 검증했다.
- **보여줄 증거:** 매핑 Sheet 네 종류, deploy/local Flow JSON의 Group 4개/Processor 56개는 **보존 자산 규모**로만 표시. 56개 신규 개발이라고 쓰지 않는다.
- **결과:** EMTR 특정 시험 7건 중 FK 중복 1건 제외·6건 Insert. 예외까지 남긴 검증 절차를 강조.

##### 프레임 3 — 식별자 때문에 빠지던 Event 통계

- **문제:** `COMM_NUM`은 변경될 수 있어 과거 Event와 현재 계량기 Master Join이 끊긴다.
- **수정:** `MTR_NUM`을 Join·null 방어 조건에 적용. 운영 데이터의 개발망 복제→AS-IS 재처리→통신번호 변경→TO-BE 재처리로 영향 확인.
- **시각 자료:** `변경 전: 통신번호 변경 → Join 누락` / `변경 후: 계량기번호 유지 → 통계 연결`. 숫자 패널은 테스트에서 이벤트 유형 0·1 각각 +1의 기대값 및 18 유형 828→827의 별도 조건을 **시험 사례**로 표시.
- **핵심 문장:** “값이 바뀌는 필드와 안정적인 Business Identifier를 구분해 통계 정합성을 수정.”

##### 프레임 4 — CO 예방 이벤트

- **문제:** 단일 시점 CO 값만으로 예방 이벤트가 발생하면 일시적 값에 반응할 수 있다.
- **수정:** 현재 조건을 만족한 뒤 같은 장비의 정확히 한 시간 전 원시 검침값을 조회하고 기준 범위면 이벤트 생성. 기존 중복 이벤트 검사와 연결.
- **시각 자료:** `t-60분 검침 → t 현재 검침 → 두 값의 조건 판단 → 중복 검사 → 이벤트`.
- **주의:** “60분 연속 고농도 확인”이라고 쓰지 않는다. 현재 코드의 판정은 두 시점 비교다. 실제 이벤트 감소율 자료 없음.

##### 프레임 5 — CNU 재수집 문제 분리

- **문제:** 미수신 검침·이벤트를 CNU API로 다시 받아야 하는데 재처리가 실패했다.
- **진단 1:** 별도 테스트 프로젝트로 API 호출·기간·건수·timeout을 재현. 성공 사례와 간헐적 timeout을 모두 남김.
- **진단 2:** 기존 Collector는 일반 수집은 동작했지만 재처리의 DB 연결 설정이 XML/Properties로 분리돼 오류. 수집 DB·전처리 DB DataSource/Mapper를 분리.
- **시각 자료:** `외부 API 상태`와 `내부 Collector 설정` 두 갈래의 원인 트리, 각 갈래별 시험 결과. 공개본에는 내부 URL/계정/테이블 데이터 제거.
- **결론 문장:** “재수집 실패를 외부 timeout과 내부 연결 설정 문제로 분해해 내부 경로를 재구성하고 검증.” 완전 무장애 주장 금지.

##### 프레임 6 — 대시보드와 2차 UI

- **작업 1:** API의 미통신 설비·지침 정보·Procedure 매핑 ↔ Web의 Details 검색/날짜 검증/Excel 생성. 검색→페이지 조회→XLSX 다운로드 흐름을 보여 준다.
- **작업 2:** 외부의 2차 알람 기준 표시 요청을 공통 Fragment·세 탭 삽입·Tooltip 상태 정리로 구현. 탭별 개별 복제 대신 공통 Fragment를 재사용한 구조를 보여 준다.
- **경계:** 초기 통합 대시보드 전체 설계/퍼블리싱의 주 담당은 별도다. 본인 UI 성과는 후속 기능·연계·QA 중심.

##### 프레임 7 — 결과·배운 점

- **문구:** “정합성 이슈를 식별자, 시점, 증분 State, 시스템 경계로 나눠 재현하고 수정했다.”
- **숫자 카드:** 27개 Git 저장소 조사/10개 개인 변경, NiFi Source 테이블 9+7+2, 개발 시험 46,318건 분류 검증, Dashboard 후속 UI 세 탭 적용. 이 숫자들은 각각 **코드 탐색 범위/테이블 범위/특정 개발 시험/화면 범위**이며 성능 향상률·운영 성과율이 아니다.
- **후속 확인:** 운영 반영 일자, 실제 재수집 성공 건수, 이벤트 발생률 전후, 다운로드 생성 시간은 공개 성과 수치로 쓰기 전에 자료 확인 필요.

#### 4. 면접 답변의 핵심 근거

1. **NiFi에서 Query만 바꾸면 왜 안 되나?** `GenerateTableFetch`는 기존 Maximum Value State로 다음 범위를 정한다. 과거 행 재수집 시 State를 함께 고려해야 하므로 운영 Flow와 분리한 테스트 Flow/DB에서 검증했다.
2. **Join Key는 왜 `MTR_NUM`인가?** `COMM_NUM`은 통신 환경 변경으로 값이 바뀔 수 있다. Event의 역사적 연결에는 고유 계량기번호가 더 안정적이며, 변경 전후 재처리 시험으로 누락을 확인했다.
3. **CO 조건은 1시간 내내 측정하나?** 아니다. 현재값과 정확히 한 시간 전 값 두 시점을 본다. UI 문구를 코드보다 넓은 보장으로 말하지 않는다.
4. **CNU 장애는 해결됐나?** Collector 내부 DB 연결 설정·Mapper 문제를 재구성했고 특정 재처리 시험은 성공했다. 외부 API 단독 시험에는 간헐적 timeout이 남아 있어 장기 해소를 주장하지 않는다.
5. **대시보드는 어느 부분을 개발했나?** 공식 주 개발자는 별도다. 개인 Git으로 확인되는 Details/API·Procedure 매핑·검색·Excel·알람 기준 표시를 구현·보완했다.
6. **46,318건은 무슨 숫자인가?** SDB/AMI 정보 구분의 개발 시험 데이터 전체다. SDB 960, AMI 45,358의 합과 누락 탐색 0건을 비교했다. 전체 운영 계량기 수는 아니다.

#### 5. 제작 시 금지할 표현

- “서울도시가스 통합 대시보드 전체를 단독 개발”, “NiFi 엔진 자체 개발”, “CNU timeout 완전 해결”, “CO 1시간 연속 유지 판정”, “예방 이벤트 N% 감소”, “46,318건 운영 처리 성능”, “Flow Processor 56개 신규 개발”.
- 2025-11~2026-11 Git 관측 기간을 곧바로 12개월 연속 프로젝트 기간으로 쓰지 않는다.
- 외부 요청 PPTX를 개인 제작물로, 고객·회사 원본 화면을 공개 포트폴리오용 자체 디자인으로 표시하지 않는다.

<a id="git"></a>

## Git 기록

### SCG MDMS·GASDOT 개인 Git 변경 전수 목록

> 2026-11-21 로컬 저장소 전체 참조 `--all`, Git author email `jspark@4net.co.kr` 기준. 27개 저장소 중 10개에 개인 커밋 76건(비병합 71건)이 있다. Commit 제목만으로 기능 소유·성과를 확정하지 않는다. 상세 해석은 [추가 조사](#follow-up)를 참조한다.

#### 저장소별 author 조사

| 저장소 | 전체 커밋 | 개인 전체 | 개인 비병합 |
|---|---:|---:|---:|
| `gasdot/gasdot-api` | 9 | 4 | 4 |
| `gasdot/gasdot-collector-a9` | 2 | 0 | 0 |
| `gasdot/gasdot-collector-bt` | 3 | 0 | 0 |
| `gasdot/gasdot-collector-plc` | 7 | 4 | 4 |
| `gasdot/gasdot-event-monitor` | 3 | 0 | 0 |
| `gasdot/gasdot-log-sms` | 4 | 0 | 0 |
| `gasdot/gasdot-mgr-norm` | 9 | 5 | 5 |
| `gasdot/gasdot-partition-mgr` | 3 | 0 | 0 |
| `gasdot/gasdot-trans-log` | 3 | 0 | 0 |
| `gasdot/gasdot-web` | 9 | 3 | 3 |
| `gasdot/mis-to-gasdot-blad` | 3 | 0 | 0 |
| `gasdot/mis-to-gasdot-inpl` | 3 | 0 | 0 |
| `gasdot/mis-to-gasdot-norm` | 14 | 4 | 4 |
| `mdms/mdms-api` | 74 | 20 | 17 |
| `mdms/mdms-coll-info` | 3 | 0 | 0 |
| `mdms/mdms-event-monitor` | 3 | 0 | 0 |
| `mdms/mdms-log-sms` | 4 | 0 | 0 |
| `mdms/mdms-mgr-elec` | 5 | 1 | 1 |
| `mdms/mdms-mgr-norm` | 11 | 5 | 5 |
| `mdms/mdms-partition-mgr` | 3 | 0 | 0 |
| `mdms/mdms-trans-gmtr` | 4 | 0 | 0 |
| `mdms/mdms-trans-log` | 3 | 0 | 0 |
| `mdms/mdms-trans-oc` | 3 | 0 | 0 |
| `mdms/mdms-web` | 73 | 24 | 22 |
| `mdms/mis-to-mdms-blad` | 4 | 0 | 0 |
| `mdms/mis-to-mdms-inpl` | 3 | 0 | 0 |
| `mdms/mis-to-mdms-norm` | 17 | 6 | 6 |

#### gasdot/gasdot-api (4건 비병합)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-01-23 | `ef8a53f` | [env] 회사 개발 서버 123 -> 89 이전 |
| 2026-01-14 | `42a0887` | [add] 소스코드 최신화 |
| 2026-01-12 | `d4e5fdd` | [fix] 누락 조건 추가 |
| 2025-12-09 | `7bf1b6d` | 가비지 제거 |

#### gasdot/gasdot-collector-plc (4건 비병합)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-01-23 | `a84a0c6` | [env] 회사 개발 서버 123 -> 89 이전 |
| 2026-01-23 | `d381250` | [fix] 운영용으로 매퍼 수정 |
| 2026-01-15 | `2a2d697` | [fix] 리팩토링 |
| 2026-01-07 | `e8e5396` | [add] 소스 코드 최신화 |

#### gasdot/gasdot-mgr-norm (5건 비병합)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-01-23 | `127017f` | [refactor] 쿼리 가독성 |
| 2026-01-06 | `555e13e` | [add] 소스 코드 최신화 |
| 2026-01-06 | `a5637dc` | 예방 이벤트 조건 코드 오류 수정 |
| 2025-12-29 | `03005e2` | 쿼리 가독성 |
| 2025-12-23 | `0519d1b` | 예방이벤트 조건 수정 |

#### gasdot/gasdot-web (3건 비병합)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-01-14 | `7f18933` | [add] 소스코드 최신화 |
| 2026-01-12 | `fd5cb4e` | [fix] 누락 조건 추가 |
| 2025-12-09 | `93a0020` | 가비지 제거 |

#### gasdot/mis-to-gasdot-norm (4건 비병합)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2025-12-18 | `0724fc9` | 서울도시가스 출장 커밋 |
| 2025-12-09 | `9f2a2f8` | .gitignore 재적용 |
| 2025-11-20 | `d43f676` | 가스닷 공통코드 추가 (RE) |
| 2025-11-20 | `901b493` | 공통코드 'C31118', 'C31119' 추가 |

#### mdms/mdms-api (17건 비병합)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-01-23 | `f75304b` | [env] 회사 개발 서버 123 -> 89 이전 |
| 2025-12-22 | `2ecb8c0` | 오라클 패키지 이름 변경 |
| 2025-12-18 | `a64c3cf` | 2차 수정 |
| 2025-12-18 | `0890212` | 서울도시가스 출장 커밋 |
| 2025-12-09 | `5f54a9c` | 프로시저 매핑 수정 및 가독성 |
| 2025-12-09 | `98613af` | 배포 수정 |
| 2025-12-07 | `acf4fcd` | 프로시저 타입 및 vo toProc 수정 |
| 2025-12-07 | `2ee2329` | 프로시저 변경에 따른 수정 |
| 2025-12-04 | `2e573db` | 오라클 매퍼 배포용으로 변경 |
| 2025-12-04 | `0374cb1` | 리팩토링 미통신 가스닷 DTO 대문자 -> 소문자, 페이지네이션 분리 |
| 2025-12-03 | `7850955` | 리드미 수정 |
| 2025-12-03 | `e51808a` | PL/SQL 임시 반영 |
| 2025-12-03 | `e92652c` | 병합 에러 해결 |
| 2025-12-03 | `602ab83` | Detail 페이지 변수명 인터페이스에 맞춰 변경 |
| 2025-12-02 | `1086ef9` | 미통신 진행상태 처리중으로 고정 |
| 2025-12-02 | `721975a` | Details 쿼리 수정 |
| 2025-12-01 | `c357ac6` | 미통신장비 조회 및 지침값 코드 조인 |

#### mdms/mdms-mgr-elec (1건 비병합)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-01-06 | `1816cd3` | [add] 소스 코드 최신화 |

#### mdms/mdms-mgr-norm (5건 비병합)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-01-23 | `acff29f` | [refactor] 쿼리 가독성 |
| 2026-01-07 | `379a488` | [fix] 이벤트 통계 조인 조건 COMM_NUM -> MTR_NUM |
| 2026-01-06 | `268cc93` | [add] 소스 코드 최신화 |
| 2025-12-29 | `9426770` | 주석 코드 제거 |
| 2025-12-29 | `8fe0825` | 쿼리 가독성 |

#### mdms/mdms-web (22건 비병합)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-11-09 | `052c657` | New 대시보드 팝업 알림기준 추가 요청 |
| 2026-01-14 | `367fd2b` | [fix] 인터벌 주석 해제 |
| 2026-01-14 | `3decc22` | [add] 소스 코드 최신화 |
| 2026-01-12 | `296326b` | 전체건수 콤마 처리 |
| 2026-01-05 | `664b331` | [fix] Details 전체 건수 스타일 수정 |
| 2025-12-30 | `a3b82bd` | [fix] 대시보드 NEW -> NEW 대시보드 |
| 2025-12-22 | `23a9328` | pom.xml 수정 |
| 2025-12-18 | `cfc8684` | 엑셀 다운로드 현황판용 분리 |
| 2025-12-18 | `223152c` | 엑셀 생성 csv -> 엑셀 |
| 2025-12-18 | `afa89a4` | 2차 수정 |
| 2025-12-18 | `9ae35db` | 서울도시가스 출장 커밋 |
| 2025-12-09 | `8d0bc18` | 모달 매핑 적용 |
| 2025-12-09 | `b1f1af7` | 배포 수정 |
| 2025-12-09 | `0268cb9` | js 정리 |
| 2025-12-08 | `602ebd5` | 지역, 고객센터 searchTerm API 사용 |
| 2025-12-07 | `ca94035` | 검색 시작 종료 날짜 validation 추가 |
| 2025-12-07 | `f5184e3` | 프로시저 변경에 따른 수정 |
| 2025-12-05 | `12c5f06` | 엑셀 다운로드 기능 추가 |
| 2025-12-04 | `8179650` | 리팩토링 미통신 가스닷 DTO 대문자 -> 소문자, 페이지네이션 분리 |
| 2025-12-03 | `a149cf9` | Detail 페이지 변수명 인터페이스에 맞춰 변경 |
| 2025-12-02 | `24de48f` | JS 로직 버그 수정 |
| 2025-12-02 | `7a2c8ec` | Pjs |

#### mdms/mis-to-mdms-norm (6건 비병합)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2025-12-22 | `fdab167` | pom.xml 수정 |
| 2025-12-18 | `22118a1` | 2차 수정 |
| 2025-12-18 | `085f35d` | 서울도시가스 출장 커밋 |
| 2025-12-04 | `537fab8` | INFO_DIV_CD 컬럼 비교 추가 |
| 2025-11-20 | `e282a6f` | 서브쿼리 공통코드 구분 및 공통 코드 추가 |
| 2025-11-20 | `3e2c385` | 공통코드 'C31118', 'C31119' 추가 가스닷 서브쿼리 정보구준 |
