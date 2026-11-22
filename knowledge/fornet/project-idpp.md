# IDPP k3s 경력 근거

[상세 근거](#evidence) · [지원서 제작 원고](#materials) · [Git 기록](#git)

## 역할과 범위

IDPP2 초기 UI·ERD·시험계획 직접 작성. 이후 k3s 인프라 구현·문서·시험을 담당. IDPP 응용 코드는 협업 범위.

## 재조사에서 확인한 근거

2026-11-22 로컬 전체 Ref와 개인 author 재집계. `06. idpp/k3s` 397건 전부 개인 작성자(비병합 394건). `477a53b`에서 MariaDB 단일 인스턴스와 Longhorn 복제 설정에 연결되는 변경을 확인했다.

기존 티켓 해석의 ‘IDPP2 추가 개발 설계 문서’는 2025년 초기 문서와 연결된다. 2026년 k3s 기여는 Git과 구축·시험 기록으로 확인한다. [업무 티켓 소스](./process-ticket.md)

<a id="evidence"></a>

## 상세 근거

### IDPP: 초기 설계 문서와 k3s 인프라 구축 근거 DB

> 조사일 2026-11-21. 이 문서는 이력서 문장을 고르기 전에 읽는 상세 근거다. `06. idpp/k3s`의 Git·스크립트·GitOps·직접 작성 문서와 `06. idpp/00. meta/01. IDPP - IDPP2 초기 설계 문서 작성 업무`를 대조했다. 사용자는 **초기 설계 문서와 k3s 문서를 직접 작성했고, IDPP 응용 프로젝트의 개발에는 참여하지 않았으며 k3s만 개발했다**고 확인했다.

#### 1. 기여 경계와 시기

| 구분 | 본인 기여 | 근거와 주의점 |
|---|---|---|
| 2025년 IDPP2 초기 설계 | 사용자 인터페이스 설계서, 엔티티 모형 기술서, 총괄시험계획서, 기능개선 발표자료 직접 작성 | Meta 01의 HWP 3종 제·개정 이력에 `박종성주임` 최초 작성 기재. PPTX 저작은 사용자 확인. 문서의 예정 기능을 실제 개발 성과로 쓰지 않는다. |
| 2026년 10~11월 IDPP3 k3s | 폐쇄망 Kubernetes 설치·GitOps·스토리지·관측·배포·검증용 코드와 문서 작성 | `k3s` Git 397건 전부 `jspark@4net.co.kr`, 2026-10-13~11-10. Git 기록은 변경 과정이며 실제 운영 완료 규모를 뜻하지 않는다. |
| IDPP 앱 6종 | 기존 앱을 컨테이너 이미지와 Helm 배포 대상으로 연결하고 설정을 주입 | tag-converter, kafka-to-iotdb, kafka-to-comp, API 2종, UI의 **기능 코드 개발은 본인 성과에서 제외**. 앱 코드는 데이터 흐름과 배포 적합성 파악용으로만 조사. |
| 기획·시험·운영 | VM 설치·장애 관찰, 구성 수정, 보고서·착수 발표자료 작성 | 원본 문서의 실측·완료·계획·재시험 대기를 아래에서 구분. |

초기 HWP는 HBase·Druid·어댑터와 수집 UI를 기술한다. 이후 k3s 저장소는 IoTDB·Kafka·Redis 중심의 3세대 인프라를 기술한다. 두 설계를 하나의 구현 상태로 합치지 않는다. 초기 총괄시험계획서의 초당 10,000건·피크 15,000건은 **검증 목표**, 2026년 착수 발표자료의 초당 100,000 Tag·8식·8주는 **제안 목표**다. k3s의 시험 VM과 운영 계획도 노드 수가 다르다.

#### 2. 증거 지도

| 주제 | 1차 근거 |
|---|---|
| 개인 변경 전체 | [397건 Git 목록](#git), `06. idpp/k3s/.git` |
| 설치 오케스트레이션 | `06. idpp/k3s/k3s.sh`, `source/script/ansible-*.yml`, `osprep.sh`, `paths.sh`, `k3s-server.yaml`, `k3s-agent.yaml` |
| GitOps와 배포 | `source/gitops/apps/argocd/{infra,data,monitoring,idpp-app}.yaml`, `apps/*/application.yaml`, `charts/*` |
| 설계·상태·남은 일 | `k3s/meta/docs/project-infra.md`, `project-improved.md`, `project-analyze.md` |
| 설치·장애·변경 시험 | `k3s/meta/docs/project-history.md`, `project-k3s.docx` |
| 초기 설계 | `00. meta/01. IDPP - IDPP2 초기 설계 문서 작성 업무/`의 HWP 3종·PPTX 1종 |
| 착수 설명 | `k3s/meta/docs/K3s & IDPP_아키텍처_착수발표자료v1.0.pptx` 8장 |

현재 k3s 작업 트리는 `project-history.md`, `project-improved.md`, `project-infra.md`, 착수 PPTX, `vault/env/global.env`가 **미커밋 수정** 상태다. Git 397건 목록은 커밋된 이력만 센다. 현재 문서의 11월 10일 상태는 별도로 읽었고 미커밋 변경을 임의로 커밋하거나 원복하지 않았다. `vault/env`의 값과 계정·IP·토큰은 이 DB에 복제하지 않았다.

#### 3. 초기 설계 문서: 실제로 작성한 범위

##### 3.1 사용자 인터페이스 설계서

- 2025-09-19 최초 작성자로 문서에 실명 기재. 데이터 관리 7개 화면(`UI-DATA#01`~`#07`), 서비스 관리 5개(`SERVICE#01`~`#05`), 시스템 관리 1개(`SYSTEM#01`)의 화면 목록과 처리 내용을 정의했다.
- 데이터 관리에서는 Modbus·DB·OPC UA/DA·PI HDA·IEC 61850 어댑터, OPC 게이트웨이, Buffer Controller의 연결·Kafka 설정·로그·HA·백업 경로 조작을 명시했다. 서비스 관리에서는 어댑터 등록·수정·삭제와 수집 반영, 시스템 관리에서는 Kafka·Redis·Druid·Tomcat·버퍼·DB 복제 상태의 모니터링을 다뤘다.
- 이는 **화면 설계·요구사항 구조화**의 증거다. 해당 UI를 구현했다는 증거가 아니다. 당시 화면 ID와 이후 3세대 UI의 메뉴를 동일 구현으로 주장하지 않는다.

##### 3.2 엔티티 관계모형 기술서

- 2025-09-19 최초 작성자로 문서에 실명 기재. `ERD#01`의 어댑터·수집 정보 영역에 엔티티 13개를 열거하고 필드명·자료형·NULL 여부·설명을 기술했다.
- 대표 엔티티: 어댑터 기본/종류/상태/상태이력, 어댑터-태그그룹 매핑, 수집서버, 태그, 압축 설정, 자산 소·대분류, 발전소 호기, 사업소, 어댑터 백업. `topic_nm`, `collect_cycle`, `deadband_deviation`, `swingdoor_deviation` 등 수집·압축 제어에 필요한 속성을 모델에 놓았다.
- 설계 산출물이다. 실제 운영 DB의 테이블 수나 배포된 스키마 수로 바꾸어 표현하지 않는다.

##### 3.3 총괄시험계획서

- 2025-09-18 최초 작성자로 문서에 실명 기재. 단위·통합·시스템 시험, 전제·제약, 결함 등록→수정→재시험→종결 흐름, 도구·환경·역할·일정을 정리했다.
- 문서 내 **단위시험 `UNITTEST#01`~`#18`**, **통합시험 `INTEGRATIONTEST#01` 이후**의 구체적 입력·절차·기대 결과를 확인했다. Modbus/DB/OPC/PI/IEC 수집과 Kafka 전달, 어댑터 백업·Buffer 복원, OPC 게이트웨이, CRUD와 모니터링이 시험 범위다.
- 성능 목표는 초당 10,000건 이상과 피크 15,000건 무손실, 가용성은 어댑터·Kafka·Redis 장애 시 연속성 확인이다. 이 문서는 **시험 계획**이므로 합격·실측 기록이라고 소개하지 않는다.

##### 3.4 기능개선 발표자료

- 5장짜리 `IDPP기능개선(20250601).pptx`를 직접 작성했다는 사용자 확인. 수집 어댑터→Kafka→DB/웹, 수집부 버퍼, 통신 복구 후 백업 파일 재전송, Prometheus/Grafana·로그 관리의 제안 구성을 설명한다.
- 슬라이드 2~5의 상당 부분은 도형/이미지여서 텍스트만으로 세부 기능 수를 확정하지 않았다. 이 자료는 제안·설계 활동의 근거로 사용한다.

#### 4. k3s 문제 정의와 선택한 구조

##### 4.1 폐쇄망 설치를 재현 가능한 절차로

- 문제: 현장 폐쇄망·다수 노드에서 미들웨어, 이미지, 차트, 인증서, 디스크 경로, 배포 순서를 수동으로 맞추기 어렵다. GitLab·레지스트리와 Kubernetes 제어 서버를 클러스터 밖에 두어야 초기 설치가 가능하다.
- 구현: 인터넷 구역에서 `k3s.sh build`로 고정 버전의 설치 자산·이미지·차트를 모으고 반입한다. 설치 구역에서는 `k3s.sh`의 단계 표(`STEPS`)로 GitLab 설치→OS 준비→k3s 초기화/합류→Cilium→스토리지→cert-manager/Argo CD→배포 준비/발행을 실행한다. 각 단계는 선행 단계·root·설정·노드 범위를 확인하고 성공 시 설치 상태를 기록한다. 로그 파일과 `status`, `verify`, `--env` 한 노드 재실행을 제공한다.
- 코드 위치: `k3s.sh`의 `run_build`, `check_gitlab`~`create_projects`, `check_k3s`~`join_k3s`, `check_storage`~`make_storage_values`, `prepare_deploy`, `run_publish`, `run_verify`, `step`, `main` 및 Ansible playbook. `db03299`, `b31fbff`, `367f668`, `da29ec5`, `05ee87b` 등의 변경 흐름을 현재 코드와 대조했다.
- 실제 검증: 변경 이력에는 단일 VM과 2대·7대 VM 재설치/재실행, 앱 Healthy 확인, reset 후 재설치 결과가 남아 있다. 예를 들어 10월 21일 2대 시험 설치 성공, 다른 7대 시험에서 13개 Application Healthy 확인이 적혀 있다. 이는 **시험 VM 범위**이며 운영 20대 전체 완료 증거가 아니다.

##### 4.2 관리 노드·네트워크·주소 체계

- 운영 **계획**은 서버 20대(마스터 3·워커 16·GitLab/제어 1), 내장 etcd, API VIP용 kube-vip, Cilium CNI/LB IPAM·kube-proxy 대체, 정적 IP 중심의 폐쇄망 구조다. `project-infra.md`의 현황/운영안이며 사용자의 VM 실측 7대·14대와 분리한다.
- k3s 기본 Flannel·Traefik·ServiceLB·local-storage·kube-proxy를 끄고 Cilium으로 연결했다. `source/script/k3s-server.yaml`, `k3s-agent.yaml`, `kube-vip.yaml`, `cilium-*.yaml`와 `k3s.sh`의 `install_cilium`을 근거로 한다.
- IoTDB처럼 서버·디스크에 묶이는 구성은 서버 IP/hostNetwork 또는 별도 LB 모드로, Kafka·Redis·MariaDB·웹은 Cilium LB 주소로 노출하도록 주소 규칙을 설계했다. `project-infra.md` 8·11장과 `source/gitops`의 설정 근거. 실제 적용 모드는 환경별 설정에 따라 다르므로 ‘항상 hostNetwork’로 단정하지 않는다.
- 인증서는 내부 CA와 cert-manager를 사용하고 Argo CD·Grafana HTTPS를 구성했다. 보안 완결이라고 쓰지 않는다. 자료에 Kafka 통신·백업·암호 관리의 남은 위험이 명시돼 있다.

##### 4.3 저장소와 상태 저장 서비스

- Kafka와 IoTDB는 서버·디스크에 고정되는 **정적 Local PV**, Redis·MariaDB·Prometheus·Grafana·Loki는 Longhorn으로 나눴다. `source/gitops/apps/storage/application.yaml`, `charts/storage`, `k3s.sh`의 `prepare_storage_paths`/`make_storage_values`, `project-infra.md` 9장 근거.
- IoTDB DataNode는 서버별 디스크 경로를 노드 파일과 스토리지 값으로 만들고 DataNode 1개를 해당 서버에 고정한다. ConfigNode·DataNode 분산, Kafka 브로커/컨트롤러 3개, Redis 3+3을 구성했다. 이는 배치·영속화 구현이며 장애 시 데이터 무손실 보증은 별도 검증이 필요하다.
- `3917981`에서는 MariaDB Galera를 시도했지만, 시험에서 볼륨 faulted·승격/재구성 문제를 보고 `477a53b`에서 **MariaDB 1대 + Longhorn 복제 2**로 변경했다. 복잡한 DB 복제를 계속 성과로 소개하면 최종 상태와 어긋난다. 문서상 서버 장애 시 재기동 시간은 약 5~6분이며, 서버 이동 재시험은 `project-improved.md` 7장에 **남음**으로 기록돼 있다.
- 11월 10일 남은 Released PV/Longhorn 볼륨 14개를 정리해 시험 VM 한 노드의 Scheduled 용량이 61.2GB에서 29.0GB로 줄었다는 기록이 있다. 이는 시험 환경의 스토리지 공간 회복 조치이며 운영 전체 최적화 수치로 쓰지 않는다.

##### 4.4 GitOps와 응용 배포 경계

- GitLab CE를 Git+이미지 레지스트리로, Argo CD를 자동 동기화 경로로 사용했다. root Application→`infra`·`data`·`monitoring`·`idpp-app` 묶음→개별 Application의 2단 App of Apps와 sync-wave를 구현했다. `apps/argocd/*.yaml`의 `include`가 배포 대상을 지정한다.
- `deploy prepare`가 환경 키를 GitOps 작업본에 채우고, `deploy publish`가 GitLab main에 push한 뒤 root가 새 커밋을 읽고 앱이 Synced/Healthy가 될 때까지 대기하도록 수정했다(`05ee87b`). `prune: false`라 끈 앱이 자동 제거되지 않는 제한은 문서에 남아 있다.
- 직접 만든 Helm 배포 차트로 기존 IDPP 앱 6개의 이미지·환경값·ConfigMap·Secret·서비스를 연결했다. 앱의 API/프런트/파이프라인 비즈니스 로직은 본인이 만들지 않았다. 외부 차트와 `source/gitops/charts`의 vendored 파일을 전부 개인 개발 코드로 세지 않는다.
- Sealed Secrets 4종과 Jasypt 연계를 배포 설정에 도입한 이력(`469` 항목, `project-history.md` 11월 4일)이 있다. **GitOps 매니페스트의 암호문**과 **별도 환경 파일의 평문**은 구분해야 한다. 현재 개선 문서 D9는 평문 비밀번호의 저장소 커밋을 운영 전 해결 과제로 기록한다. 공개 원고에는 보안 완성이라는 표현을 쓰지 않는다.

##### 4.5 관측과 운영 문서

- Prometheus/Grafana로 노드·k3s·etcd·컨테이너·Longhorn·IoTDB·Kafka·Redis를 관찰하고 Loki/Alloy 로그 수집을 선택형으로 배치했다. 대시보드 5개가 `k3s/meta/data/grafana`에 기록돼 있다. `fc3f249`로 사용하지 않는 Headlamp·kafbat·Redis Insight를 제거해 관리 대상을 줄였다.
- `project-k3s.docx`는 설치·운영·수동 설치·시험 절차를 담은 직접 작성 보고서(593 paragraphs, 164 tables). `project-infra.md`는 현행 선택과 이유, `project-history.md`는 변경·장애와 시험, `project-improved.md`는 남은 일/재시험, `project-analyze.md`는 응용 흐름을 구분한다. 8장 착수 PPTX는 목표 아키텍처 설명 자료다.
- 운영자에게 `build`, 단계별 설치, `servers`, `status`, `verify`, 노드 증설과 재배포 경로를 문서와 CLI 도움말에 함께 제공했다. 이는 도구 사용성·인수인계의 근거다.

#### 5. 깊게 말할 수 있는 문제 해결 사례

| 사건 | 관찰과 원인 | 본인 조치·판단 | 확인된 결과와 한계 |
|---|---|---|---|
| 폐쇄망 초기 설치 반복 | 차트/이미지/버전, GitLab 경로와 인증, OS·시간·SELinux·방화벽·VIP가 설치 순서에 의존 | 고정 버전 번들·선행 단계/상태 기록·재실행/노드 단위 옵션, Ansible·검증 함수. VM 시험에서 발견한 CA keyUsage, kubelet 플래그, GitLab 초기 비밀번호 설정 순서 등을 수정 | 단일·2대·7대 VM 설치/재설치와 여러 Application Healthy 기록. 운영 전체 무중단 설치 증거는 아님. |
| Kafka 디스크 고갈의 연쇄 장애 | 시험 VM에서 Kafka Local PV와 OS/Longhorn이 같은 약 82GB 루트 디스크를 공유. 1만 건/초, 168시간 보존에서 브로커당 약 9GB/h 증가해 약 7시간 만에 DiskPressure; Kafka·Longhorn 축출, MariaDB 볼륨 faulted, 적재 중단으로 연결 | 로그/Pod/볼륨을 추적해 장애 사슬을 문서화, 시험 보존 6시간과 운영 계획 24시간 분리, 전용 데이터 디스크를 운영 필수로 제안, 복제·PriorityClass·Loki 용량 변경 | 용량 회복과 자동 회복이 시험 기록에 있음. 전용 디스크가 없는 시험 VM의 재발 위험은 개선 문서 A8에 남음. 데이터 무손실은 입증되지 않음. |
| MariaDB Galera 복잡성 | 시험에서 1벌 Longhorn faulted, 승격 되돌림·replica 재구성·split-brain 위험 | Galera를 최종안에서 걷어내고 1대 + Longhorn 2벌로 단순화(`477a53b`) | 시험 VM에서 복제 2 healthy 기록. 서버 이동 5~6분 예상/과거 관찰과 **새 구성 재시험 대기**를 구분. |
| IoTDB 대량 시계열 메모리 | DataNode 3대에 약 48.7만 시계열, 2~3GB대 힙에서 GC/OOM, 적재 중단 | 서버 메모리·힙 자동 계산과 차트 환경을 조사, 16GB VM 증설과 힙 조정 후 재시작 관찰, 메모리 requests·운영 권고를 문서화 | 이력에 6개 Running·OOM/쓰기 ERROR 0으로 회복 기록. 운영 256GB 서버의 적정 힙은 시험·튜닝 필요. |
| 로그·관측 용량 | Loki 5Gi가 2일 만에 가득, Prometheus가 2Gi 메모리 한계 근접, StatefulSet PVC 값을 Git만 바꿔도 적용되지 않음 | Loki PVC/보존·Prometheus 메모리 조정, 값별 반영 단계와 StatefulSet orphan 재생성 절차 기록 | 일부 값은 VM 반영, Loki Argo OutOfSync 등은 11월 10일 문서에 남아 있어 완료 주장 금지. |
| 현행 IoTDB 이관 | 기존 Docker DataNode/ConfigNode 데이터와 신규 Pod·Local PV 경로, 메타/시계열 양립 문제 | 제자리 인수와 복사 적재 두 경로를 시험·기록. IDC 시험에서 개별 노드/6개 Pod 인수 및 원복·BPF 잔여물 조치 기록 | 시험 성공 사례와 운영 전환 결정 대기를 구분. 최종 이관 방식은 미확정. |

#### 6. 확인된 숫자와 해석

| 수치 | 의미 | 이력서에서의 안전한 쓰임 |
|---|---|---|
| Git 397건, 2026-10-13~11-10 | 단일 k3s 저장소의 개인 변경 이력. 10월 392건·11월 5건 | 범위 추적용, 생산성·품질 지표로 사용하지 않음. 중간 원복/정리 커밋 포함. |
| 초기 설계: 화면 13개, 엔티티 13개, 단위시험 18개 | 작성 문서 내 정의·계획 규모 | ‘설계/계획 문서 작성’으로만 표현. 구현·합격 개수 아님. |
| 운영안 20대, 발표안 8식 | 서로 다른 시점/제안의 서버 규모 | 시나리오/아키텍처 설계 규모. 실제 운영 설치 대수로 쓰지 않음. |
| 시험 VM 7대·13개 앱 Healthy | 특정 시험 기록 | ‘시험 VM 설치와 배포 동기화 확인’. 현장 전면 가동 완료로 쓰지 않음. |
| 1만 건/초, 약 9GB/h, 약 7시간 | Kafka 디스크 장애 시험 조건과 관찰 | 원인 분석의 정량 근거. 플랫폼 지속 처리량 성과가 아님. |
| 발표자료 10만 Tag/초 | 새 설계 목표 | 실측 10만/초 달성 주장 금지. KSTV6의 별도 성능 시험과 혼동 금지. |
| Released PV 정리 후 61.2→29.0GB | 시험 VM 한 노드의 예약 용량 변화 | 특정 공간 회복 조치. 운영 비용 절감률로 환산하지 않음. |

#### 7. 현재 남은 위험·확인 질문

1. 운영 20대 전체 설치 및 실제 전환이 이루어졌는지, 2026년 11월 10일 이후 증빙이 있는지 확인한다. 없으면 **설계·시험 VM 검증**으로 한정한다.
2. 초당 10만 Tag 처리 목표의 부하 결과·지속 시간·유실률·환경 사양이 별도로 확인되기 전에는 달성 성과로 쓰지 않는다.
3. Kafka 전용 디스크, MariaDB 이동 재시험, Longhorn 볼륨 회복, 백업 저장소, Loki/Prometheus 용량·동기화 결과는 개선 문서의 열린 항목이다.
4. 배포 구성의 암호문/평문 경계를 정리하고 운영 전 비밀번호 교체·보관 방식을 확정해야 한다. 이력서에는 구체 계정·주소·비밀값을 노출하지 않는다.
5. 초기 설계의 HBase·Druid 구성과 k3s의 IoTDB 구조 사이 전환 결정의 승인 시점은 문서로 추가 확인할 수 있다.
6. 앱 기능 코드와 인프라 차트·설정의 책임 경계를 면접에서 분명히 설명한다.

#### 8. 이 문서의 활용

- 사람인 요약·프로젝트 기술과 Figma 섹션용 문장은 [제작 원고](#materials)에 별도로 보관했다.
- 여기의 해석이나 수치가 바뀌면 Git 커밋, `project-history.md` 시험 항목, `project-improved.md` 열린 항목 순으로 확인한다. 산출물 길이를 줄이더라도 이 근거 DB를 삭제·압축하지 않는다.

<a id="materials"></a>

## 지원서 제작 원고

폐쇄망 재현 설치와 Kafka 디스크 고갈의 연쇄 장애를 사례로 쓴다. 20대와 10만 Tag/초는 계획과 목표이며 VM 시험 조건은 상세 근거에 있다.

### IDPP 초기 설계·k3s: 사람인·Figma 제작용 원고

> 이 문서는 다른 세션에서 이력서·자기소개서·포트폴리오를 제작할 때 쓰는 **편집 가능한 소재**다. 자세한 사건·근거·한계는 [상세 근거 DB](#evidence)를 먼저 확인한다. 사용자 확인: IDPP 응용 프로젝트의 기능 개발은 하지 않았고 **k3s 개발**을 맡았다. 초기 설계 HWP 3종·기능개선 PPTX와 `k3s/meta/docs` 문서도 직접 작성했다.

#### 1. 기본 표기

| 항목 | 권장 내용 |
|---|---|
| 프로젝트 | IDPP 발전운전 데이터 플랫폼: 초기 설계 문서 및 k3s 기반 배포 인프라 |
| 개인 역할 | 초기 UI·ERD·시험 계획 문서 작성; 폐쇄망 k3s 설치 자동화, GitOps, 데이터 서비스 배포·스토리지·관측 설계와 시험 VM 검증 |
| 기술 | Kubernetes/k3s, Bash, Ansible, Helm, Argo CD, GitLab CE/Registry, Cilium, kube-vip, Longhorn, Kafka/Strimzi, IoTDB, Redis, MariaDB, Prometheus/Grafana, Loki/Alloy |
| 기여 기간 | 초기 설계 문서 2025-09; k3s 저장소 개인 Git 이력 2026-10-13~11-10. 실제 배정·운영 기간은 별도 확인 필요 |
| 사용 금지 범위 | 어댑터·API·UI·데이터 파이프라인의 기능 개발, 10만 Tag/초 달성, 운영 20대 전면 구축 완료, 무중단/무손실 보장 |

#### 2. 사람인 프로젝트 기술 초안

##### 길게 쓰는 버전

IDPP 발전운전 데이터 플랫폼의 초기 단계에서 어댑터·수집 관리 UI 13개 화면, 수집/태그 관련 엔티티 13개, 단위·통합·시스템 시험 범위를 담은 설계 문서를 직접 작성했습니다. 이후 IDPP 응용 기능 개발과 별도로, 폐쇄망 환경의 k3s 배포 인프라를 구축했습니다. 고정 버전 자산 반입, GitLab 레지스트리, Bash·Ansible 기반 단계별 설치와 재실행, Cilium/kube-vip 네트워크, Kafka·IoTDB용 Local PV와 기타 상태 저장 서비스용 Longhorn, Argo CD App of Apps 배포 구성을 구현했습니다. 시험 VM 설치·재설치와 장애를 기록하며 Kafka 디스크 고갈이 Pod 축출·Longhorn·MariaDB·적재 중단으로 이어지는 원인을 분석하고, 보존 기간·디스크 분리·복제 구성을 개선했습니다. 설치·운영·시험 보고서와 아키텍처 발표자료를 작성해 이후 적용과 재시험 항목을 남겼습니다.

##### 중간 길이 버전

폐쇄망 IDPP 플랫폼의 k3s 배포 자동화와 GitOps를 담당했습니다. Bash·Ansible 설치 단계, GitLab 이미지 레지스트리, Argo CD App of Apps, Cilium 네트워크, Local PV/Longhorn 스토리지를 구성하고 시험 VM에서 설치·재설치와 장애 복구 흐름을 검증했습니다. Kafka 디스크 고갈과 MariaDB 볼륨 장애의 연쇄 원인을 분석해 운영 전 개선안을 반영했으며, 별도로 초기 UI·ERD·시험 계획 문서를 직접 작성했습니다.

##### 1~2문장 압축

IDPP의 폐쇄망 k3s 설치 자동화·GitOps·데이터 서비스 영속화와 시험 VM 검증을 담당했습니다. Kafka 디스크 고갈의 연쇄 장애를 원인별로 추적하고 스토리지·보존·복제 구성을 개선했으며, 초기 시스템 설계·시험 계획 문서도 작성했습니다.

#### 3. 성과 문장 후보: 확인 범위와 함께 쓰기

| 강조할 능력 | 사람인·면접용 문장 | 근거·한계 |
|---|---|---|
| 설치 자동화 | 폐쇄망 반입용 자산 빌드부터 GitLab·k3s·Cilium·Argo CD·데이터 서비스 배포까지 순서와 선행 조건을 스크립트로 만들고, 재실행·노드 증설 경로를 제공했습니다. | `k3s.sh`와 Ansible, Git 이력. 운영 전면 설치 결과로 확대 금지. |
| GitOps | GitLab의 Git/Registry와 Argo CD App of Apps를 연결해 인프라·데이터·관측·IDPP 앱의 배포 순서와 동기화 상태를 관리했습니다. | `apps/argocd/*.yaml`, `05ee87b`. 앱 기능 자체는 타인 개발. |
| 상태 저장 서비스 | Kafka·IoTDB는 서버/디스크 고정 Local PV, Redis·MariaDB·관측 서비스는 Longhorn으로 나누어 장애 특성에 맞는 저장소 구성을 설계했습니다. | `project-infra.md` 9장, storage 차트/스크립트. 데이터 무손실 보장 표현 금지. |
| 장애 분석 | 1만 건/초 시험 VM에서 Kafka 디스크 고갈이 Pod 축출, Longhorn·MariaDB 장애, 적재 중단으로 번진 경로를 분석하고 보존·디스크·복제 개선안을 정리했습니다. | `project-history.md`/`project-improved.md` A8. 1만 건/초는 시험 **입력 조건**. |
| 설계 문서 | 데이터 관리·서비스 관리·모니터링의 13개 UI 화면과 13개 엔티티, 단위·통합·시스템 시험 계획을 작성해 개발·검증 범위를 구조화했습니다. | 2025년 HWP 3종. 실제 구현·시험 통과 개수 아님. |
| 운영 문서 | 설치/운영 DOCX와 인프라 현황·변경 이력·개선 목록을 분리해 설치 절차와 미해결 위험을 추적했습니다. | `project-k3s.docx`, `project-*.md`. |

#### 4. 자기소개서·STAR 원재료

##### 사례 A: 디스크 고갈을 연쇄 장애로 해석

- **상황:** 시험 VM의 Kafka Local PV가 OS/Longhorn과 같은 작은 루트 디스크를 사용했고, 1만 건/초 부하와 긴 보존 기간 아래 약 7시간 만에 디스크 여유가 부족해졌다.
- **과제:** 단순 Kafka 재기동이 아니라 적재 중단까지 이어진 경로와 재발 조건을 찾는 것.
- **행동:** 브로커 디스크 증가량·DiskPressure·Evicted Pod·Longhorn 볼륨 상태·MariaDB·적재 앱의 순서를 대조했다. 시험 보존 시간을 축소하고 운영 전용 디스크 필요성을 문서화했다. 스토리지 복제·관측 용량·우선순위도 재검토했다.
- **결과:** 장애 경로와 회복 절차를 시험 기록에 남겼고, 시험 VM 재구성값과 운영 필수 조치를 구분했다. 전용 디스크가 없으면 위험이 남는다는 점도 명시했다.
- **면접 후속:** ‘디스크가 가득 차면 왜 DB까지 멈췄나?’ → Local PV/OS 공유→kubelet DiskPressure→Kafka/Longhorn Pod 축출→MariaDB 볼륨 faulted→태그 조회 실패·적재 중단의 순서로 답한다. 실제 데이터 무손실 여부는 확정하지 않는다.

##### 사례 B: 복잡한 DB 고가용성 구성 단순화

- **상황:** Galera·복제/승격과 Longhorn 볼륨 장애가 겹쳐 시험 중 재구성·split-brain 위험이 드러났다.
- **과제:** 현장의 복구 가능성과 운영 난도를 고려해 구성 선택을 다시 하는 것.
- **행동:** Galera를 최종안에서 제거하고 MariaDB 단일 인스턴스+Longhorn 복제 2로 바꾸었다. 예상 재기동 시간과 서버 이동 재시험 항목을 기록했다.
- **결과:** 시험 VM에서 Longhorn 복제 2 healthy를 확인했다. 서버 이동 최종 재시험은 남아 있어 완전한 HA 달성이라고 쓰지 않는다.
- **면접 후속:** ‘복제 2면 DB HA인가?’ → 볼륨 복제와 DB 레벨 복제를 분리해 설명한다. 인스턴스는 하나이며 장애 시 재기동 시간이 존재한다.

##### 사례 C: 문서와 실행 절차를 같은 구조로

- **상황:** 폐쇄망·다중 노드 설치에서 순서, 자산 버전, 인증서·스토리지 값 하나가 달라도 전체 설치가 실패할 수 있었다.
- **과제:** 다른 환경에서 재현 가능하고 실패 지점을 확인할 수 있는 설치 체계 만들기.
- **행동:** 단계별 CLI, 사전 점검, 상태 파일과 단계별 로그, 한 노드 재실행, verify·servers 명령을 구현했다. VM 설치와 reset/재설치에서 발견한 결함을 커밋과 보고서에 반영했다.
- **결과:** 단일/다중 VM에서 설치·재설치와 App Healthy를 확인한 기록이 있다. 검증된 환경·규모를 함께 말한다.

#### 5. Figma 포트폴리오 구성 원고

| 화면/섹션 | 전달할 내용 | 표시할 근거 |
|---|---|---|
| 1. 프로젝트 한 장 | ‘IDPP 응용 기능 개발과 구분되는 k3s 인프라 담당’. 초기 문서 설계와 후속 배포 인프라의 시기 표기 | 역할/기간 카드. ‘20대 운영 완료’ 같은 미확인 문구 제외 |
| 2. 문제 | 폐쇄망 설치, 여러 상태 저장 서비스의 디스크/네트워크 요구, 장애 시 연쇄 영향 | 설치 순서·스토리지 구분·장애 사슬 3개 카드 |
| 3. 설계 | GitLab/Registry→Argo CD App of Apps→k3s/Cilium→Kafka·IoTDB Local PV/Longhorn | 내부 IP·계정·인증서 내용 제거한 일반화 아키텍처 |
| 4. 구현 | `k3s.sh` 단계별 설치, Ansible 노드 준비, Helm/GitOps, verify/재실행 | 코드 전체 스크린샷 대신 함수·파일명과 흐름. 회사 비밀 제거 |
| 5. 검증 | 단일·다중 VM 설치/재설치, App Synced/Healthy, 디스크 사고 분석과 구조 수정 | ‘시험 VM’ 배지, 관찰/수정/남은 항목 3열 |
| 6. 별도 설계 역량 | UI 13화면·엔티티 13개·시험 계획. 2025 문서와 2026 k3s 구분 | HWP 원본은 회사 정보 비식별화 후 개념 표만 재작성 |
| 7. 회고 | Galera 대신 단일 DB+복제 볼륨, Kafka 전용 디스크, 백업/보안/성능의 남은 결정 | 선택 이유와 trade-off. 보안 완성 주장 제외 |

#### 6. 공개 전 검증·비식별화

- 발표자료의 10만 Tag/초와 운영 20대는 **목표/계획**. 실측 성과로 표시하지 않는다.
- 실제 시험 입력 1만 건/초도 처리 성공률·지속 시간·데이터 무손실을 증명하지 않는다.
- 회사/고객 이름, IDC 주소·노드 IP, 인증서·토큰·환경 파일·계정 값은 외부 포트폴리오에서 삭제한다.
- Kafka/IoTDB/Redis/IDPP 앱의 원천 기능 개발을 개인 기여로 적지 않는다. 본인 작업은 설치·배포·설정·검증·문서다.
- 운영 전 재시험 항목은 해결 완료가 아닌 **발견하고 관리한 위험**으로 설명한다.

<a id="git"></a>

## Git 기록

### IDPP k3s Git commit ledger

Scope: all refs in `06. idpp/k3s`, author `jspark <jspark@4net.co.kr>`; 397 commits between 2026-10-13 and 2026-11-10.
Commit count tracks evidence, not productivity. Reverts and interim states are included. Uncommitted changes are excluded.

| No. | Date | Hash | Subject |
|---:|---|---|---|
| 1 | 2026-10-13 | `ea0471c` | 현행 기준 설정 (Kafka 4.3.1 / Strimzi 1.2.0) |
| 2 | 2026-10-13 | `90d99dd` | 현행 동기화: 토픽 11개·IoTDB 2.0.6·Longhorn 메트릭, apps 폴더별 구조 |
| 3 | 2026-10-13 | `7aa311f` | Kafka 3.9.2 / Strimzi 0.45.2 로 낮춤 (현행 app-to-kafka 호환) |
| 4 | 2026-10-13 | `db03299` | Ansible 다중 배포 모드 + 제어 서버(Node20)에서 설치 |
| 5 | 2026-10-13 | `19cadfa` | 검증 클러스터: 워커 6대(IoTDB 3 · Kafka 3), VM 디스크 LVM 논리 볼륨 |
| 6 | 2026-10-13 | `a64a723` | HA 시나리오 docx·md 일치(9개): 중복된 ConfigNode 노드 정지 삭제, md에 마스터 정지 추가 |
| 7 | 2026-10-13 | `c86e211` | IoTDB 외부 접속: 소스 분석 결과 기록, hostNetwork 전환은 보류 |
| 8 | 2026-10-13 | `f04b1d8` | Revert "Kafka 3.9.2 / Strimzi 0.45.2 로 낮춤 (현행 app-to-kafka 호환)" |
| 9 | 2026-10-13 | `accbe47` | Kafka 4.3.1 유지 근거 기록: app-to-kafka만 비호환, 전환 전 클라이언트 업그레이드 필요 |
| 10 | 2026-10-13 | `6ef93b3` | bundle.sh: 목록에 없는 이전 버전 이미지 tar 정리 |
| 11 | 2026-10-13 | `8b6b591` | 개선 가이드(project-improve.md): 최적화·리팩토링·확장성, 우선순위 P1~P3 |
| 12 | 2026-10-13 | `1f8092d` | 개선 가이드: 요약 그림을 화살표 흐름도로(문서 규칙) |
| 13 | 2026-10-13 | `8438bad` | 보류·미결 사항을 project-improve.md E장으로 모음 |
| 14 | 2026-10-13 | `8bc3855` | docx: IDPP 설치 방법 및 스크립트 장 작성(개요·스크립트·폴더·DEPLOY_MODE·설치 순서) |
| 15 | 2026-10-13 | `836715b` | 설정 파일 setting.env 하나로 통합 + platform.sh 6단계 배포 설정 채우기 (improve B1 완료) |
| 16 | 2026-10-13 | `d8ceaba` | 입력 흐름: setting.env 에 있는 값은 묻지 않고 빈 값만 대화형으로 |
| 17 | 2026-10-13 | `ee990e4` | setting.env.example → setting.env(저장소·반입 tar에 포함, 비밀번호는 비워 두고 설치 때 입력) + 첫 서버 노드 등록 대기 |
| 18 | 2026-10-13 | `a0446f6` | 운영 환경 의존 값 전부 setting.env로 + Python 의존 제거(gitops-fill.sh) + GitLab 3단 경로 수정 |
| 19 | 2026-10-13 | `de38738` | 단일 노드 실설치 통과(11개 앱 Healthy) + kps Operator TLS 끔 + 문서 정리 |
| 20 | 2026-10-13 | `b31fbff` | 설치 스크립트를 install.sh 하나로 통합(파트별 명령) + reset·status + 이어하기 재검토 수정 |
| 21 | 2026-10-13 | `5108596` | reset: 데이터 내용 삭제 옵션(PURGE 이중 확인) + 번들 해시는 실행당 한 번 |
| 22 | 2026-10-13 | `37be155` | 문서 현황 갱신: 통합 install.sh 기준 설치 가이드·설계·gitops README·docx, improve 완료 이력 5·6과 보류 현황 |
| 23 | 2026-10-14 | `a5f7ff3` | reset all 실측: GitLab·Cilium 잔여물 정리 보강 |
| 24 | 2026-10-14 | `f628c79` | 사전 점검: 기존 Docker 등 충돌 점검(대역 겹침·포트 점유 FAIL, Docker·주소 풀·FORWARD·legacy WARN) |
| 25 | 2026-10-14 | `4b44c45` | 스크립트 하나로: bundle.sh·gitops-fill.sh 를 install.sh 에 합침 |
| 26 | 2026-10-14 | `44b276b` | 빌드 해시는 빌드당 한 번(.build-verified, BUILD_VERIFY) + 명칭 번들 → 빌드(./install.sh build) |
| 27 | 2026-10-14 | `846e8d7` | docx 설치 장: ./install.sh build·fill, 스크립트 하나, 번들 → 빌드, 사전 점검(빌드 해시·Docker 충돌) |
| 28 | 2026-10-14 | `bb3b64b` | k3s 공식 설치 스크립트를 source/bin/k3s-install.sh 로 (우리 install.sh 와 구분) |
| 29 | 2026-10-14 | `069f1a0` | source 구조 재편 + improve A1~A8 코드 반영 |
| 30 | 2026-10-14 | `f4f8a58` | 문서 역할 분리(project-history.md 신설, infra·install 압축, improve 재분석) + A1~A9 결정 반영 |
| 31 | 2026-10-14 | `6e4dd1f` | immutable/ 보관 폴더: 새 빌드로 통째 교체할 때 보관본만 백업·복원(keep 명령, all·reset 끝 자동 저장, setting.env 빈 값 병합) |
| 32 | 2026-10-14 | `9320592` | 배포 설정 저장소 내용을 source/gitlab/gitops → source/gitops 로 (사용자 지시) |
| 33 | 2026-10-14 | `e9971dc` | improve 정리: B7·C6 보류(E1-15·16), B8·C3·C4 제거, 결정 요약 history 1장 |
| 34 | 2026-10-14 | `4110562` | B6 Sealed Secrets + C2 kube-vip API VIP |
| 35 | 2026-10-14 | `b42428e` | ready: feat/secrets-vip |
| 36 | 2026-10-14 | `415d910` | Merge branch 'feat/secrets-vip' |
| 37 | 2026-10-14 | `e6d72a3` | C5 로그: Loki(단일)+Alloy 차트·Application, Grafana Loki 데이터소스 |
| 38 | 2026-10-14 | `4efc1ff` | C7 k3s 자동 업그레이드: system-upgrade-controller 매니페스트(차트로 감쌈)·Application·Plan 2개 |
| 39 | 2026-10-14 | `5005ea5` | C1·C5·C7 스크립트·설정·문서: verify Region 분포, Loki·Plan 값 채우기, build 의 SUC 감싸기, install 12·13장·10-1 로그, infra·improve·history·README |
| 40 | 2026-10-14 | `a612e28` | ready: feat/obs-upgrade |
| 41 | 2026-10-14 | `f22c0e6` | Merge branch 'feat/obs-upgrade' |
| 42 | 2026-10-14 | `e82bdf3` | B4: 자체 차트 values.schema.json·printf nn 헬퍼·part-of 라벨 (storage·kafka·redis·redis-insight) |
| 43 | 2026-10-14 | `f0a565e` | B9: IoTDB 설정 ConfigMap(iotdb-conf + idpp-conf.sh)·OnDelete·checksum (B4 스키마·nn·라벨 포함) |
| 44 | 2026-10-14 | `7194626` | B5: AppProject idpp, 앱 10개 project idpp, README 갱신 |
| 45 | 2026-10-14 | `a20e4cd` | B3·B5·B9: install.sh lint 명령·build lint 스키마, repos 에 AppProject 적용, verify 에 IoTDB 설정 반영 비교 |
| 46 | 2026-10-14 | `71ac24e` | docs: B3·B4·B5·B9 반영 (infra·install·improve·history) |
| 47 | 2026-10-14 | `21f2e89` | ready: feat/charts-lint |
| 48 | 2026-10-14 | `9f8ef8a` | Merge branch 'feat/charts-lint' |
| 49 | 2026-10-14 | `94af93f` | 통합 수정: loki·alloy·system-upgrade 앱 project idpp, AppProject 에 system-upgrade 네임스페이스, .gitignore 에 source/lint |
| 50 | 2026-10-14 | `4b776b2` | docs: improve는 보류만, 이력·미결은 history로 일원화 + 새 VM 확인 목록(3.1) |
| 51 | 2026-10-14 | `c43e763` | rename: install/install.sh → install/k3s.sh (스크립트·주석·문서·docx 참조) |
| 52 | 2026-10-14 | `31a4e3e` | fix: 설치 로그 install/log 로 + 통합·정적 분석 수정 |
| 53 | 2026-10-14 | `407747f` | docs: 통합 분석 반영(platform sealed·AppProject 단계, 흐름 그림, README 오기) + improve 새 개선 후보 N1~N5 |
| 54 | 2026-10-14 | `0c1880c` | version.env: 버전 직접 기입(CHARTS 변수 이름·k3s-upgrade 태그 치환 제거), 주석을 장별 1~3줄 요약으로 + k3s.sh chart_version |
| 55 | 2026-10-14 | `c7d9688` | k3s.sh: version.env 관련 주석 현행화 |
| 56 | 2026-10-14 | `361ba03` | setting.env·version.env 통합 + 모든 키 리터럴 |
| 57 | 2026-10-14 | `511abde` | k3s.sh 상수 → setting.env "고급: 보통 바꾸지 않음" 구역, 코드 기본값 제거 |
| 58 | 2026-10-14 | `d314a54` | 이미지 = setting.env 이미지 키(IMG_*), 차트 기본 이미지 전부 덮어씀 |
| 59 | 2026-10-14 | `4d1dcdd` | 로그 수집 선택 LOGGING_ENABLED(y/n) + Loki·Alloy 이미지 키 |
| 60 | 2026-10-14 | `d36d152` | 외부 차트: Helm 이 읽는 파일만 남김 (build chart_prune + Git 차트 정리) |
| 61 | 2026-10-14 | `e54f287` | 로그 기본 = 노드 /data/k3s/container-logs, Loki·Alloy 선택(기본 n), Loki 복제 수 키 |
| 62 | 2026-10-14 | `86e9a08` | build 하위 옵션 제거: ./k3s.sh build 하나(바뀐 것만 다시 받음) + 문서·docx |
| 63 | 2026-10-14 | `ee26f60` | k3s.sh 머리말 정리: 파트별 단계 이름 전부 명시, help 출력 패턴 수정 |
| 64 | 2026-10-14 | `b259d8f` | k3s.sh: 머리말 명령어 목록 개편, KUBECTL 대체 경로 제거, help 패턴 맞춤 |
| 65 | 2026-10-14 | `4a79103` | SSH_OPTS를 setting.env 고급 구역으로 이동 |
| 66 | 2026-10-14 | `e6c8173` | iotdb-datanodes.txt 폐지: DataNode 번호 = setting.env IOTDB_NODES 순서, 기존 PV와 순서 검사 |
| 67 | 2026-10-14 | `ed2c03d` | k3s.sh: KUBECONFIG 주석에 VIP 없을 때 주소 명시 |
| 68 | 2026-10-14 | `bdeebc4` | k3s.sh: 색 변수 줄 끝 세미콜론 제거(한 줄에 하나씩) |
| 69 | 2026-10-14 | `9352846` | k3s.sh: 한 줄 함수 46개를 여러 줄로 펼침(원문 그대로, declare -f 동일 확인) |
| 70 | 2026-10-14 | `1b5244e` | 설정 대화형 입력 폐지: setting.env 값만 사용, 빈 필수 키는 config 단계에서 모아 FAIL |
| 71 | 2026-10-14 | `c92b84c` | k3s.sh: 색 변수 삭제, [FAIL] 만 빨간색(직접 적음) |
| 72 | 2026-10-14 | `6f0316a` | k3s.sh: 본문 1~2줄 함수 35개를 한 줄로(declare -f 동일 확인) |
| 73 | 2026-10-14 | `4f3e831` | k3s.sh: ERR trap 을 main 안으로 |
| 74 | 2026-10-14 | `a039629` | k3s.sh: 키 목록 변수 삭제, setting.env 구역(현장 값·고급·IMG_*)에서 키를 읽음 |
| 75 | 2026-10-14 | `ad30f41` | k3s.sh → k3s-install.sh, build 구역을 k3s-build.sh 로 분리 |
| 76 | 2026-10-14 | `61cad0c` | Revert "k3s.sh → k3s-install.sh, build 구역을 k3s-build.sh 로 분리" |
| 77 | 2026-10-14 | `89c1d79` | 문서: 설정 비대화형 문구 재반영, history #37(분리 시도 후 되돌림) |
| 78 | 2026-10-14 | `02419ae` | OPTIONAL_KEYS 삭제: 빈 값 대신 setting.env 에 auto (빈 값은 비밀번호만) |
| 79 | 2026-10-14 | `521be99` | k3s.sh: 호출부 한 곳 함수 27개 인라인, cfg_show_secret 삭제, gitops_fill·lint 도 load_conf |
| 80 | 2026-10-14 | `9b2a97f` | k3s.sh: ask·ask_yn 을 출력 함수 옆으로(한 줄) |
| 81 | 2026-10-14 | `3e23303` | k3s.sh: cfg_show 한 줄 if 정리(then; 문법 오류 수정) |
| 82 | 2026-10-14 | `5e78c53` | k3s.sh: cfg_show 정렬 |
| 83 | 2026-10-14 | `8a9a8a3` | k3s.sh: log_file·with_log 한 줄로(declare -f 동일) |
| 84 | 2026-10-14 | `10857fc` | k3s.sh: 설정 원칙 주석 9줄 → 2줄 |
| 85 | 2026-10-14 | `d2658c9` | k3s.sh: cfg_check 를 if/else 로 |
| 86 | 2026-10-14 | `29f3ed0` | k3s.sh: cfg_check 정렬 |
| 87 | 2026-10-14 | `a65e113` | k3s.sh: setting.env 키 목록을 배열 3개(SITE·ADV·IMG)로, conf_keys 하나로 꺼냄 |
| 88 | 2026-10-14 | `5f71c16` | 문서: 키 목록 배열 방식 반영(setting.env 머리 주석·install.md·history #40) |
| 89 | 2026-10-14 | `4ddf407` | k3s.sh: conf_keys printf 형식을 '%s\n' 한 줄로(실제 줄바꿈 문자가 들어가 있던 것 수정) |
| 90 | 2026-10-14 | `b7966d1` | 옛 cluster.env 호환 제거(최초 설치 전), 사용자 수정(load_conf→cfg_load 등) 포함 |
| 91 | 2026-10-14 | `49bfb5a` | 옛 설치·옛 이름 호환 정리: etcd_migrate(SQLite→etcd) 단계·VERSIONS 별칭·history 5장 삭제 |
| 92 | 2026-10-14 | `8939930` | 설정 함수 이름 변경(사용자): show_config·check_config·load_config_keys·load_config·save_config·need_config, 문서 반영 |
| 93 | 2026-10-14 | `eac2fac` | k3s.sh: img_repo·img_tag·img_all 한 줄로(declare -f 동일) |
| 94 | 2026-10-14 | `306e203` | k3s.sh: fw_port_args 한 줄로(declare -f 동일) |
| 95 | 2026-10-14 | `88b18a0` | API 주소를 항상 kube-vip VIP 로: vip_mode·API_VIP_MODE·none(L4) 분기 삭제 |
| 96 | 2026-10-14 | `5e882d6` | history: 미결 장 소제목 번호 5.x 로, E2 #17 API VIP 결정 추가 |
| 97 | 2026-10-14 | `bcac5f9` | k3s.sh: need_vars 한 줄로(declare -f 동일) |
| 98 | 2026-10-14 | `6061fe0` | k3s.sh: 호출 없는 함수 삭제(workload_nodes·iotdb_pool_nodes·pool_or_single) |
| 99 | 2026-10-14 | `35057de` | k3s.sh: pool_nodes 한 줄로(declare -f 동일) |
| 100 | 2026-10-14 | `0e32b5a` | setting.env 이미지를 IMAGES 배열로(CONF_IMG_KEYS 삭제, 누락된 IMG_ALLOY 해소), 사용자 이름 변경(load_img_*·change_img_boot) 포함·IMG_ALLOY 치환 오류 수정 |
| 101 | 2026-10-14 | `8b1eb4f` | k3s.sh: copy_to 원격 명령을 here-string 한 줄로 |
| 102 | 2026-10-14 | `43fff4e` | k3s.sh: chart_version 한 줄로(do; 문법 오류 수정) |
| 103 | 2026-10-14 | `015c9df` | k3s.sh: remote 한 줄로(declare -f 동일) |
| 104 | 2026-10-14 | `7adf872` | k3s.sh: copy_to 한 줄로(declare -f 동일) |
| 105 | 2026-10-14 | `73dec86` | k3s.sh: ansible_iv_host·ansible_vars_save 한 줄로(declare -f 동일) |
| 106 | 2026-10-14 | `f21aa77` | k3s.sh: ansible_run 의 ansible-playbook 호출 한 줄로 |
| 107 | 2026-10-14 | `5c9ab92` | k3s.sh: wait_for 한 줄로(declare -f 동일) |
| 108 | 2026-10-14 | `6d71af2` | k3s.sh: check_charts·check_ssh 한 줄로(declare -f 동일) |
| 109 | 2026-10-14 | `5de4c4a` | k3s.sh: ip2int 한 줄로, << 대신 곱셈(편집기 구문 색 깨짐 방지) |
| 110 | 2026-10-14 | `f3b89d9` | k3s.sh: cidr_range 한 줄로, << 시프트 대신 2^32-2^(32-len) 마스크(편집기 색 깨짐 방지) |
| 111 | 2026-10-14 | `a0fd20b` | k3s.sh: ranges_overlap 한 줄로(declare -f 동일) |
| 112 | 2026-10-14 | `c381e62` | k3s.sh: check_conflicts 주석 한 줄 + VS Code 접기용 region 표시 |
| 113 | 2026-10-14 | `c9ddd5a` | k3s.sh: region 표시 제거(주석 한 줄은 유지) |
| 114 | 2026-10-14 | `74fe100` | k3s.sh: check_conflicts region 표시(# region / # endregion) |
| 115 | 2026-10-14 | `3bf0184` | k3s.sh: check_conflicts 원격 점검 스크립트를 here-string 으로(들여쓰기, 원격에 보내는 내용 동일), 사용자 함수 이름 변경(cfg_*) 반영 |
| 116 | 2026-10-14 | `4831218` | k3s.sh: check_conflicts 원격 점검 스크립트를 heredoc(EOF)로 되돌림 |
| 117 | 2026-10-14 | `7848b8a` | k3s.sh: datastore 한 줄로(원격 명령 동일, 작은따옴표 here-string) |
| 118 | 2026-10-14 | `bee9bd4` | k3s.sh: node_ready_same 한 줄로(declare -f 동일) |
| 119 | 2026-10-14 | `2fe781d` | k3s.sh: k3s_token_check 한 줄로(declare -f 동일) |
| 120 | 2026-10-14 | `0bf61c0` | k3s.sh: cfg_show_gitlab 중복 정의 해소 — 값 표시 함수는 cfg_show_gitlab_server, gitlab 파트 config 단계가 cfg_show_gitlab |
| 121 | 2026-10-14 | `3c48985` | history 3.1: VM 50.100.100.189 단일 노드 실측 결과·k3s.sh 결함 F1~F9, improve: 새 후보 N6~N9 |
| 122 | 2026-10-14 | `16a0eed` | k3s.sh: GitLab 작업 토큰 발급 원격 명령을 here-string 한 줄로(원격 명령 동일) |
| 123 | 2026-10-14 | `e635dad` | k3s.sh: VM 189 실측 수정 F1~F8 반영(F9 비밀번호 가리기는 제외) — 컨테이너 로그 SELinux 라벨, kube-vip 로컬 API, DataNode 순서 검사 템플릿, verify 인증서·스냅샷 출력, osprep.state, reset RPM 제거, build pull .part |
| 124 | 2026-10-14 | `60887ef` | k3s.sh: GitLab 작업 토큰 발급을 here-string 한 줄로 다시(원격 명령 동일) |
| 125 | 2026-10-14 | `30966ba` | k3s.sh: gl_api 한 줄로(declare -f 동일) |
| 126 | 2026-10-14 | `11a6b0f` | k3s.sh: gitlab 파트 STEPS 의 precheck 함수 이름을 gitlab_precheck 로(이름 변경 누락 수정) |
| 127 | 2026-10-14 | `9531ad1` | 문서 전수 재검토: 현재 k3s.sh 기준으로 install·infra·improve·analyze·history·gitops README 정리, history #45 |
| 128 | 2026-10-14 | `30f6215` | k3s.sh: '메뉴 1(설정)' 안내 문구를 setting.env 기준으로, 호출 없는 chart_version·redis_layout 삭제 / improve N9·N10 처리 |
| 129 | 2026-10-14 | `ee431d0` | docs: IDPP-K3S.docx 를 지금 동작에 맞게 갱신(설정 비대화형·auto·IMAGES·항상 kube-vip·gitops 개수·로그·업그레이드 행) |
| 130 | 2026-10-14 | `1cd98e2` | storage values: Kafka 디스크 크기 < KAFKA_STORAGE 면 FAIL(PVC Pending 방지), KAFKA_STORAGE 형식 검사 |
| 131 | 2026-10-14 | `d99dfab` | k3s.sh: 함수 주석은 정의 위 최대 2줄로(정의 줄 끝 주석 11곳 이동, 3줄 이상 4곳 축약, 코드 불변) |
| 132 | 2026-10-14 | `7bf0109` | lint ① 코드 규칙 검사(중복 함수·STEPS 함수 없음 FAIL, 미사용 함수·160자 줄·긴 주석 WARN), step_* → <파트>_<동작> 이름 변경 |
| 133 | 2026-10-14 | `15d71c9` | k3s.sh: 함수 이름을 동사_명사로, 접두 cfg → conf(load_conf·show_conf·check_conf_k3s·install_k3s·run_remote 등), 문서 함수 이름 반영 |
| 134 | 2026-10-14 | `1685a0d` | k3s.sh: kubelet 인자 system-reserved·kube-reserved 복원(함수 이름 변경 때 플래그 문자열까지 바뀌어 kubelet 이 'unknown flag --system-k3s_kublet_reserved' 로 기동 실패, VM 189 실측) |
| 135 | 2026-10-14 | `782553f` | 빌드를 k3s-build.sh 로 완전히 분리(k3s.sh 와 독립), 빌드 목록·버전을 version.env 로 분리, 이미지 표시 '# version.env IMG_', 이름 변경 누락(ips·sub) 수정 |
| 136 | 2026-10-14 | `c639b21` | k3s-build.sh: 빌드 설명 8줄 블록을 run_build 위 2줄로, PLATFORM 은 파일 앞 변수로 |
| 137 | 2026-10-14 | `c351c23` | Revert "k3s-build.sh: 빌드 설명 8줄 블록을 run_build 위 2줄로, PLATFORM 은 파일 앞 변수로" |
| 138 | 2026-10-14 | `06e8720` | Revert "빌드를 k3s-build.sh 로 완전히 분리(k3s.sh 와 독립), 빌드 목록·버전을 version.env 로 분리, 이미지 표시 '# version.env IMG_', 이름 변경 누락(ips·sub) 수정" |
| 139 | 2026-10-14 | `4fe7913` | k3s-build.sh·version.env 분리 되돌림 후 함께 있던 버그 수정 재반영(ips·sub 호출, lint load_part_* 예외) |
| 140 | 2026-10-14 | `1291ca8` | k3s.sh: 함수 위 주석을 함수 전체 요약 1~2줄로(130개, 안쪽 주석 요점 포함, 코드 불변), 구역 제목은 빈 줄로 분리 |
| 141 | 2026-10-14 | `08a3983` | k3s.sh: 구역 제목을 region/endregion 으로 통일, help 단계 목록을 STEPS 에서 생성, CONF_BUILD_KEYS + setting.env 키↔배열 lint |
| 142 | 2026-10-14 | `c447cd0` | k3s.sh: 요약과 겹치는 안쪽 주석 26줄 삭제, 160자 넘는 줄 91 → 58(한 줄 함수 펼침·sed 식 인자 나눔·명령 이어쓰기, 코드 불변) |
| 143 | 2026-10-14 | `d13c32a` | history: 새 VM(189 원복) 처음부터 설치 시험 결과(build·all·verify·lint·reset PURGE 재설치 통과), 4장 #55 kubelet 인자 복원 |
| 144 | 2026-10-14 | `d6575c2` | k3s.sh: 첫 서버 재실행 — config.yaml 이 바뀌었거나 k3s 가 멈춰 있으면 묻지 않고 다시 적용(같으면 확인만, 합류 단계와 같은 방식) |
| 145 | 2026-10-14 | `0ae88cf` | k3s.sh build: helm pull --untar 가 남기는 빈 <차트>-<버전>.tgz 디렉터리 정리(build 재실행 시 already exists FAIL) |
| 146 | 2026-10-14 | `9088078` | k3s.sh: 160자 넘는 줄 58 → 37(안내 문구 줄이기·case/for/if 여러 줄·이어쓰기), install.md 재적용·ansible-core·Argo CD 우회, history #56·#57 |
| 147 | 2026-10-14 | `876ca2d` | history: 원복 VM 2차 설치 시험 결과(build 재실행 결함 0ae88cf, server_init 재실행은 k3s 재시작 없음), 4장 #58 |
| 148 | 2026-10-14 | `8464003` | k3s.sh: 설정 재적용 때 k3s 재시작(INSTALL_K3S_FORCE_RESTART=true, 쉘·ansible 합류), history #59 |
| 149 | 2026-10-14 | `7d0cef3` | k3s.sh: 첫 서버 건너뛰는 반복 3곳을 list_join_servers 로 |
| 150 | 2026-10-14 | `5731951` | k3s.sh: run_build 를 BUILD_STEPS 6단계(bin·charts·schemas·images·rpms·package)로 나눔, ./k3s.sh build <단계> 로 한 단계만 다시, help 에 목록 |
| 151 | 2026-10-14 | `fcd13a6` | k3s.sh: run_lint 를 LINT_STEPS 6검사(lint_shell·charts·render·schemas·ansible·images)로 나눔, make_k3s_install_cmd 여러 줄 |
| 152 | 2026-10-14 | `f3f5a93` | k3s.sh: make_k3s_install_cmd 줄 이음 백슬래시 복원(직전 커밋에서 \n 로 깨짐) |
| 153 | 2026-10-14 | `0dfee63` | k3s.sh: fill_gitops_values 를 FILL_STEPS 10단계 함수로 나누고 안쪽 도우미 4개(stop_fill·check_ips·replace_lines·replace_list)를 밖으로 |
| 154 | 2026-10-14 | `ff8cedc` | k3s.sh: 원격 heredoc 9곳을 함수(declare -f)로 — run_remote_func 호스트 함수 인자…(인자 %q), 원격 코드도 ShellCheck 대상 |
| 155 | 2026-10-14 | `58482ea` | k3s.sh: build 부분 실행 되돌림(#31 결정), install.md 빌드 표 순서·FORCE_RESTART, history #60~#62 |
| 156 | 2026-10-15 | `0ab7e1e` | 버전·이미지·차트·RPM 목록을 setting.env 에서 k3s.sh 로(개발 때 고정), setting.env = 현장·고급 값만(배열 0개) |
| 157 | 2026-10-15 | `df5a137` | history #63: 버전 목록을 k3s.sh 로 |
| 158 | 2026-10-15 | `cc0b01e` | build 를 독립 스크립트 k3s-build.sh 로, 버전 값은 쓰는 파일에 직접(치환 없음), 빌드 해시·k3s 자동 업그레이드 삭제 |
| 159 | 2026-10-15 | `499aaf6` | k3s-build.sh: 차트 목록 CHARTS 배열 → BOOT_CHART_*·APP_CHART_*="<저장소>/<차트>:<버전>" 키=값, history #65 |
| 160 | 2026-10-15 | `0643125` | k3s-build.sh: 빌드 6단계 함수를 run_build 하나로, 인자 없이 실행하면 전부, history #66 |
| 161 | 2026-10-15 | `20156d4` | k3s-build.sh: 맨 끝 main 함수(ERR trap·.work·run_build), history #67 |
| 162 | 2026-10-15 | `cd10d38` | k3s-build.sh: 외부 차트 정리(prune_chart) 삭제 — 받은 차트 그대로, history #68 |
| 163 | 2026-10-15 | `1027e0d` | k3s-build.sh: SCRIPT_DIR 와 같은 INSTALL_DIR 삭제, history #69 |
| 164 | 2026-10-15 | `61dccdf` | k3s-build.sh: lint 스키마를 통째 받기(k8s strict 폴더 sparse clone + CRD 카탈로그), 렌더링·get_app_values 삭제, history #70 |
| 165 | 2026-10-15 | `c5dadc3` | k3s-build.sh: get_image_tag 삭제, kubeseal 버전 = IMG_SEALED_SECRETS_TAG(list_images 는 _TAG 제외), history #71 |
| 166 | 2026-10-15 | `a82f663` | k3s-build.sh: run_build 안팎 주석을 info 출력으로, history #72 |
| 167 | 2026-10-15 | `245b8ab` | k3s-build.sh: 반복문 풀기 — 차트 helm pull 11줄·이미지 crane pull 44줄(매번 전부), list_images·차트 변수 삭제, history #73 |
| 168 | 2026-10-15 | `f4cde7d` | k3s-build.sh: 주석·구역 정리, run_build 단계·소단위별 빈 줄, history #74 |
| 169 | 2026-10-15 | `c3bf9b0` | k3s-build.sh 검증 단계·묶기 삭제·출력 정리, apply_immutable 단순화(보관본이 늘 이김)·.fresh-build 삭제, history #75·#76 |
| 170 | 2026-10-15 | `37bb83a` | k3s.sh: 단계 함수(STEPS·main 명령 44개)의 함수 위·안쪽 주석을 info 출력으로, history #77 |
| 171 | 2026-10-15 | `9547751` | install/source 최신화: k3s-build.sh VM 실측 결과, 외부 차트 원본 그대로 다시 받음, history #78 |
| 172 | 2026-10-15 | `d5dc26a` | docs: 빌드 구조 변경 반영(install 0절·infra 반입 흐름·docx), history #79 |
| 173 | 2026-10-15 | `1afdceb` | DNS 안 씀: GitLab·Argo CD 를 IP 로만(FQDN·WRITE_HOSTS·hosts/CoreDNS 등록 삭제, 인증서 SAN=IP), Argo CD 화면 인증서를 cert-manager idpp-ca 로, history #80 |
| 174 | 2026-10-15 | `48a8f7b` | docs: 현황 갱신·정리(코드 대조) — install·infra·analyze·improve 정정, improve N7 삭제, history #81 |
| 175 | 2026-10-15 | `56d49b0` | VM 설치 시험(#80 DNS 안 씀) 결함 수정: storage-values 에 섞인 info 줄, Argo CD 화면 인증서 Secret 라벨(part-of=argocd), history #82 |
| 176 | 2026-10-15 | `63d9344` | k3s.sh: 내부 CA 자동 생성·immutable 보관(ensure_ca), awk 안에 잘못 들어간 info 바로잡기, 옛 문구 정리 |
| 177 | 2026-10-15 | `e467f66` | Grafana: 기본 대시보드(약 26종) 끄고 idpp-dashboard.yaml 하나만, Longhorn 대시보드 삭제 |
| 178 | 2026-10-15 | `f174351` | iotdb: ConfigNode 우선 배치(pool=system preferred) 삭제, 서로 다른 노드 규칙은 유지 |
| 179 | 2026-10-15 | `10bfa52` | docs: 재검수·요약 정리(코드 대조) — install·infra 요약, 이력 표현 정리, improve 문구 갱신, history #86·#87 |
| 180 | 2026-10-15 | `4b0b5ac` | gitops README: 직접 적용 리소스(idpp-dashboard·Loki SC), 없는 7-1 sed 참조 삭제 |
| 181 | 2026-10-15 | `d9d2021` | Grafana·Headlamp HTTPS: cert-manager idpp-ca 인증서(grafana-tls·headlamp-tls, SAN=LB IP), Grafana·sidecar·Headlamp TLS 설정 |
| 182 | 2026-10-15 | `0ed7938` | Argo CD 노드 고정(pool=system) 삭제 |
| 183 | 2026-10-15 | `aa72933` | docs: Grafana·Headlamp HTTPS 접속·포트, Argo CD 고정 삭제 반영 점검, history #90 |
| 184 | 2026-10-15 | `6556509` | 보관 폴더 immutable/ → backup/ (BACKUP_DIR·save_backup·apply_backup), 문서·.gitignore |
| 185 | 2026-10-15 | `d49fcf2` | docker: 현행 compose·redis.conf(DataNode 볼륨·Redis 설정 마운트를 운영과 같게, 이미지 tar 제외), analyze 7장 현행 ↔ k3s 비교 |
| 186 | 2026-10-15 | `d62ebac` | docs: 현행 Docker ↔ k3s 비교를 analyze 7장 → infra 11장으로 이동 |
| 187 | 2026-10-15 | `075e5fe` | 현행 Docker 기준: IoTDB 2.0.5·Redis 7.4·Kafka 3.9.0(Strimzi 0.47.0, v1beta2), Kafka 토픽 자동 생성, DataNode 경로 /dataN/data |
| 188 | 2026-10-15 | `da06bca` | IoTDB 복제·힙, Redis 설정을 현행 Docker 에 맞춤 (history #95) |
| 189 | 2026-10-15 | `dbae766` | improve 새 후보 N1~N8 처리: 로그 색 코드·journald 디스크·done < <( 3곳 (history #96) |
| 190 | 2026-10-15 | `1b75de4` | project-improve.md 삭제: 보류 → history 5.4, 참조·낡은 5장 항목 정리 (history #97) |
| 191 | 2026-10-15 | `ebd2026` | md 재검수·요약, k3s.sh → k3s-deploy.sh, Grafana 인증서 dnsNames = prometheus-grafana |
| 192 | 2026-10-15 | `d04cd11` | history 번호 목록 재구성, 남은 일 → infra 12장, gitops README → install 7-0 |
| 193 | 2026-10-15 | `a2cdf31` | k3s-build [0/5] tar·xz 확인, 문서 최종 점검, VM 재빌드로 source 갱신 (history 66) |
| 194 | 2026-10-15 | `daf4ea5` | k3s IoTDB DataNode 경로 = <디스크>/k3s/iotdb-datanode<NN>, 라벨·PURGE 도 그 하위만 (history 67) |
| 195 | 2026-10-15 | `580f21a` | IoTDB k3s 경로 /dataN/k3s/iotdb-datanode<NN>, LOCAL_IOTDB_DEVICES = /data1~8 (history 68) |
| 196 | 2026-10-15 | `f4de461` | VM 설치 시험 반영: Kafka KRaft 주석, CONFIGNODE_JMX_OPTS, Longhorn 지표 허용, 9963 포트 (history 69) |
| 197 | 2026-10-15 | `121b962` | 내부 CA keyUsage(sidecar HTTPS reload), precheck 시각·NTP 확인, VM 2차 시험 (history 70) |
| 198 | 2026-10-15 | `f654a36` | infra 9.10 서버 용량 산정, 12.1 #20·#21 (history 71) |
| 199 | 2026-10-15 | `2febde9` | UI_ADMIN_PASSWORD(Argo CD·Grafana), Headlamp 고정 관리자 토큰, IoTDB 힙 auto (history 72) |
| 200 | 2026-10-15 | `0835245` | 문서: UI_ADMIN_PASSWORD·Headlamp 고정 토큰·IoTDB 힙 auto, 남은 일 정리 (history 73) |
| 201 | 2026-10-16 | `a535a65` | Grafana 대시보드 4종(개요·IoTDB·Kafka·Redis), etcd 수집 job kube-etcd (history 74) |
| 202 | 2026-10-16 | `9cd437a` | 문서: 선택 화면 키(KAFKA_UI_ENABLED·REDIS_INSIGHT_ENABLED), Y/N 대문자 (history 75) |
| 203 | 2026-10-16 | `84dbacb` | 문서: 최근 변경 반영(CA keyUsage·IoTDB 힙 auto·KRaft 주석·문제 해결·VM 재시험 목록) (history 76) |
| 204 | 2026-10-16 | `2d4a910` | Grafana 대시보드 4개 → IDPP 하나(섹션 개요·IoTDB·Kafka·Redis) (history 77) |
| 205 | 2026-10-16 | `4ce62fb` | kps: Grafana admin 주석 정정(UI_ADMIN_PASSWORD·SealedSecret) |
| 206 | 2026-10-16 | `81de8e1` | infra·analyze 풀스캔: IoTDB 경로·힙·복제 2 반영, Headlamp 고정 토큰, 위험·장애 시험 표 정정 |
| 207 | 2026-10-16 | `678831a` | infra 12.4 #10(docx 그림 수정) 삭제 |
| 208 | 2026-10-16 | `8c83e69` | install.md 현황 갱신(Y/N·GitLab 비밀번호만 빈 값·로그인·선택 앱 삭제 절차·9963·keyUsage 등) (history 78) |
| 209 | 2026-10-16 | `84eaff8` | history 79: 문서 풀스캔·정적 분석·12.4 #10 삭제 |
| 210 | 2026-10-16 | `70a1757` | IoTDB 힙 auto 최대치 = 한도 80%(MEMORY_SIZE, env.sh 반영), DataNode 128Gi (history 80) |
| 211 | 2026-10-16 | `ecf9c10` | infra: containerd·registries.yaml 설명을 받는 곳·예외·이유로 나눔 |
| 212 | 2026-10-16 | `3d49cc7` | 설치 순서 GitLab → k3s, 노드 이미지 tar 폐지 — 모든 이미지는 GitLab 레지스트리 (history 81) |
| 213 | 2026-10-16 | `98e94d2` | 정적 검사(lint) 통째로 삭제 (history 82) |
| 214 | 2026-10-16 | `f16aecd` | GitLab root 비밀번호 기본값 (history 83) |
| 215 | 2026-10-16 | `478053f` | 레지스트리 정리(gitlab-gc) 삭제 (history 84) |
| 216 | 2026-10-16 | `7b6caf8` | VM 4차 시험 결과, 12.5 정리 (history 85) |
| 217 | 2026-10-19 | `1592ef0` | etcd 조각 모음(etcd-defrag) 삭제 (history 86) |
| 218 | 2026-10-19 | `8055d15` | GitLab 백업 매월 1회, 보관 45일 (history 87) |
| 219 | 2026-10-19 | `bc1e82a` | k3s 설치 구성 정리·문서 전수조사 (history 88~118) |
| 220 | 2026-10-19 | `d7a3dd9` | history 119: docx 개요 보강 |
| 221 | 2026-10-19 | `0cb734d` | 빌드 출력 로그 파일 (history 120) |
| 222 | 2026-10-19 | `5d3de05` | kubeconfig 도 vault/ 에서 (history 121) |
| 223 | 2026-10-19 | `c1c87fe` | 화면 출력: ✓✗ → O/X, echo → info·ok·warn·die (history 122) |
| 224 | 2026-10-19 | `753e8b1` | 빌드: 시계 확인, dnf·curl 진행 출력 줄임 (history 123) |
| 225 | 2026-10-19 | `543e826` | k3s-deploy.sh 함수 순서: 공통 → gitlab → k3s → storage → platform (history 124) |
| 226 | 2026-10-19 | `19b084e` | gitlab.rb: GitLab 19 키 이름(gitlab_rails['nginx'], registry['nginx']) (history 125) |
| 227 | 2026-10-19 | `117ae8f` | k3s·kubectl 체크섬 검사(빌드), k3s 실행 검사(precheck) (history 126) |
| 228 | 2026-10-19 | `8c3a63f` | 단계 제목: [PART] 로그 함수 (history 127) |
| 229 | 2026-10-19 | `ba0e039` | 단계 제목 [STEP], == 소제목 정리 (history 128) |
| 230 | 2026-10-19 | `14fd8ee` | gitlab 파트 출력 정리: crane·dnf 출력 숨김, CA 없음 INFO (history 129) |
| 231 | 2026-10-19 | `b00d752` | 파트 apps(5/5): publish + Argo CD 동기화 확인, publish 는 늘 push·idpp-root refresh (history 130) |
| 232 | 2026-10-19 | `a4a749d` | install-state·storage-values.yaml 도 vault/ 에서, keep 삭제, setting.env 동기화 규칙 (history 131) |
| 233 | 2026-10-19 | `2d50940` | apps sync: Headlamp 토큰을 vault/headlamp-token 에 저장 (history 132) |
| 234 | 2026-10-19 | `a2f24e3` | 파트 이름 apps → deploy (history 133) |
| 235 | 2026-10-19 | `0bf5437` | infra 9.11 이름 규칙(파드·PVC·PV) 정리 (history 134) |
| 236 | 2026-10-19 | `45caf5f` | 이름 정리: 모니터링 짧은 이름(grafana·prometheus-monitoring 등), redis-insight 번호 제거 (history 135) |
| 237 | 2026-10-19 | `2eece70` | publish_gitops: need_conf 먼저(deploy publish 단독 실행 오류) (history 135) |
| 238 | 2026-10-19 | `89f06df` | infra 12.5 #21: 오후 변경 VM 재시험 항목 |
| 239 | 2026-10-19 | `389b588` | 문서 전수조사·최신화 (history 136) |
| 240 | 2026-10-19 | `e8ddc03` | VM 시험 스크립트 test/single-vm.sh → k3s-test.sh (history 137) |
| 241 | 2026-10-19 | `466f33f` | 문서: k3s-test.sh 이름·위치 반영 (history 137) |
| 242 | 2026-10-19 | `d126b1d` | infra·test/setting.env: k3s-test.sh 이름 반영 (history 137) |
| 243 | 2026-10-19 | `a052001` | 수동 설치 절차 k3s-self.txt 추가 — 스크립트 없이 명령으로 (history 138) |
| 244 | 2026-10-19 | `505fc90` | 로컬 폴더 정리: idpp-k3s/ → k3s/ 바로 아래, test/test-single.sh, 도움말은 vault·work 안 만듦, 반입 묶기 방법 (history 139) |
| 245 | 2026-10-19 | `6dadfb0` | 문서: 폴더 정리·test-single.sh·반입 묶기 반영 (history 139) |
| 246 | 2026-10-19 | `2befd90` | docx 이름 IDPP-K3S.docx → project-k3s.docx (history 140) |
| 247 | 2026-10-19 | `9678666` | 수동 설치 절차 k3s-self.txt → docs/project-self.txt (history 141) |
| 248 | 2026-10-19 | `97338c8` | 문서 전수조사·최신화·요약 (history 142) |
| 249 | 2026-10-19 | `c4e49db` | 터널 Grafana 포트 3443 → 3000 (Windows 예약 범위, history 143) |
| 250 | 2026-10-19 | `b52f906` | test/test-data.sh: VM 시험용 간이 데이터(IoTDB·Redis·Kafka) |
| 251 | 2026-10-19 | `30f9f59` | test-data.sh: IoTDB 로그인·넣기 결과 판정 수정(pipefail) |
| 252 | 2026-10-20 | `888d306` | 문서: test/test-data.sh 반영 (history 144) |
| 253 | 2026-10-20 | `7ef1581` | setting.env: GitLab 키를 맨 위로 묶음 (history 145) |
| 254 | 2026-10-20 | `eb42d58` | gitlab config: GitLab 값만 표시(노드는 k3s 파트), GitLab 데이터·백업 값 표시 (history 146) |
| 255 | 2026-10-20 | `2de3c90` | 이름 통일 규칙, Kafka 노드 ID 1부터, Grafana PVC grafana-pvc01 (history 147) |
| 256 | 2026-10-20 | `932015b` | 이름 완전 통일 보류(12.4 #20), VM 재시험 12.5 #23 (history 148) |
| 257 | 2026-10-20 | `12a5d07` | 이름 규칙 A: StatefulSet 하나·번호 1부터, PVC <용도>-<파드>, 정적 PV = PVC 이름, Redis 짝은 초기화 Job (history 149) |
| 258 | 2026-10-21 | `caaf8aa` | 이름 규칙 A 되돌림 — 예전 구조로 (history 150) |
| 259 | 2026-10-21 | `7091215` | IoTDB 메타 볼륨 이름 -pvc00·-pv00 (history 151) |
| 260 | 2026-10-21 | `b74269a` | Prometheus PVC 이름 data-prometheus-monitoring-0 (history 152) |
| 261 | 2026-10-21 | `897a2f1` | 서버 구성을 노드 파일로: env/root.env(공통) + env/nodeNN.env(서버별), test/ 삭제 |
| 262 | 2026-10-21 | `239f104` | 문서: 노드 파일(env/root.env + env/nodeNN.env) 반영, test/ 절 삭제 (history 154) |
| 263 | 2026-10-21 | `67f748a` | env/root.env → env/k3s.env, GitLab 키는 env/gitlab.env, env/README 는 install 로 (history 154) |
| 264 | 2026-10-21 | `d34d131` | --node <노드>[,…]: 노드 단위 단계만 고른 노드에 (history 155) |
| 265 | 2026-10-21 | `c48b275` | history 152 누락 보충, infra 0장 마스터 줄(Taint 없음) |
| 266 | 2026-10-21 | `bdb0f10` | env: node01 IP 50.100.100.101, GITLAB_HOST 50.100.100.100 (시험 환경) |
| 267 | 2026-10-21 | `fbb4560` | 2대 시험 설치 성공, VIP 안내·인벤토리 이름·ssh 로그·servers.yml·tar 소유자 수정 (history 156) |
| 268 | 2026-10-22 | `e9653d8` | 마스터만 먼저 설치 지원(need_app_roles·is_all_in_one), reset 이 deploy 단계 기록도 지움, infra 마스터 Taint 정정 (history 157) |
| 269 | 2026-10-22 | `aa56f9f` | Cilium operator 마스터 Taint 허용, 디스크 수 grep 오류 표시 (history 158) |
| 270 | 2026-10-23 | `90ad617` | env/node01.env: 시험 VM 과 같게(마스터 전용 server·INIT, 50.100.100.101) |
| 271 | 2026-10-23 | `e75446b` | 로컬 env/ 를 시험 설정으로 덮어씀, 운영 값은 67f748a (history 159) |
| 272 | 2026-10-23 | `93333f7` | --node 옵션을 --env <노드파일> 로 변경 (history 160) |
| 273 | 2026-10-23 | `a91157b` | 전체 실행 명령 all 삭제, 파트를 차례로 실행 (history 161) |
| 274 | 2026-10-23 | `3274a47` | install 단일 노드 절의 all 표기 정리 (history 161) |
| 275 | 2026-10-23 | `fc5c974` | Sealed Secrets 제거, Grafana admin Secret 은 platform deploy 가 직접 생성 (history 162) |
| 276 | 2026-10-23 | `c506860` | 마스터 Taint 유지 결정 기록 (history 163) |
| 277 | 2026-10-23 | `6ad073a` | 마스터 Taint 제거(디스크 역할 금지는 유지), 서버 kubelet 에 max-pods·kube-reserved (history 164) |
| 278 | 2026-10-23 | `0c2d21e` | 검증 클러스터 VM 7대(마스터 3·워커 3·GitLab) 계획 반영 (history 165) |
| 279 | 2026-10-23 | `f33de54` | k3s-deploy.sh: 설정 파일 변수 CONF → K3S_CONF (GITLAB_CONF 와 짝) |
| 280 | 2026-10-23 | `60c140d` | env/gitlab.env 주석 정리, k3s-build.sh repo heredoc 들여쓰기 정리 (사용자 수정) |
| 281 | 2026-10-23 | `dca9aa0` | install: 보고서 project-k3s.docx → struct·install 두 파일로 표기 |
| 282 | 2026-10-23 | `f5f7361` | 옛 보고서 project-k3s.docx 삭제 반영(struct·install 두 파일로 분리, docx 는 git 에 넣지 않음) |
| 283 | 2026-10-23 | `dbd1212` | 시험 워커 env/node02.env, Kafka 1 2 3 전체 검사를 need_app_roles 로 (history 166) |
| 284 | 2026-10-23 | `c694680` | 노드 파일 틀 env/nodeNN.env.template 추가, install 안내 |
| 285 | 2026-10-23 | `7039e68` | 노드 파일 틀 이름 node.env.template(사용자 변경)에 문서·안내 맞춤, node02 주석 정리 |
| 286 | 2026-10-23 | `707046a` | k3s precheck 에서 모든 노드 서버 정보(servers.yml) 수집 (history 167) |
| 287 | 2026-10-23 | `2bdfd71` | 시험 노드: node01~03 마스터(.101~.103), node04 워커(.104) (history 168) |
| 288 | 2026-10-23 | `0db096c` | 노드 파일 POOL·IOTDB_CONFIGNODE·REDIS → LONGHORN(Y/N) 하나로 (history 169) |
| 289 | 2026-10-23 | `94548ab` | 시험 LB 풀 50.100.100.130~150·API VIP .151, L2 광고 Y (history 170) |
| 290 | 2026-10-23 | `cb71281` | SSH 키 자동 등록: 노드 파일 SSH_USER·SSH_PASSWORD, 빌드에 sshpass (history 171) |
| 291 | 2026-10-23 | `9f80c35` | 시험 노드 파일 SSH_PASSWORD 값(사용자 지정) |
| 292 | 2026-10-23 | `68a5bc7` | server_init 는 첫 서버만으로 VIP 인터페이스, 합류 마스터는 join 때 비교 (history 172) |
| 293 | 2026-10-23 | `abc93d6` | 시험 워커 node05(.105, DataNode02·Kafka 2)·node06(.106, DataNode03·Kafka 3) |
| 294 | 2026-10-23 | `6061953` | 시험 env: LOGGING_ENABLED=Y (Loki·Alloy 설치) |
| 295 | 2026-10-23 | `79b32bc` | Redis Operator 도입 안 함(검토 결과·보류) (history 173) |
| 296 | 2026-10-23 | `634eba9` | firewalld LB 막힘 고침(trusted lxc+·정책 idpp-pods), Longhorn 복제 = 디스크 노드 수 기준, 문서 전수 점검 반영 (history 174) |
| 297 | 2026-10-23 | `d4e148b` | analyze 저장소 19개(generator 없음), infra 12.1 #19 삭제 (history 175) |
| 298 | 2026-10-23 | `6ba1f8e` | analyze 재분석(origin/master 기준), app-to-kafka 미사용 추정, infra 12.2 #17~19 (history 176) |
| 299 | 2026-10-23 | `d36f368` | app-to-kafka 로컬 삭제 반영(analyze 18개, infra 12.1 #1·12.2 #17 삭제) (history 177) |
| 300 | 2026-10-23 | `21e2b5f` | 웹 API 폴더 이름 변경 반영(idpp-api-service·idpp-api-public) (history 178) |
| 301 | 2026-10-23 | `544aee4` | infra 문서 압축(구조·번호 유지), 4장 삭제 (history 179) |
| 302 | 2026-10-23 | `4981158` | project-install.md 를 project-infra.md 2부로 합침, 참조 갱신 (history 180) |
| 303 | 2026-10-23 | `0551dd2` | docs: infra 2부(설치·운영) 압축, project-self.txt → k3s-self.txt (#181) |
| 304 | 2026-10-26 | `badf3c5` | docs: 현행(Docker) ↔ k3s 장단점·기대효과 정리 (infra 11.5) |
| 305 | 2026-10-26 | `6315593` | refactor: 설정 global.env 하나로, 서버별 값은 노드 파일에만, 스크립트 정리 |
| 306 | 2026-10-26 | `dfbc00c` | refactor: 설정 vault/env 로 통합, DataNode 별 디스크 수, Kafka 외부(NAT) 창구 |
| 307 | 2026-10-26 | `450b9d2` | feat: Prometheus LB 노출, IOTDB_DATANODE 번호 1~99, get_vip_iface 한 줄 |
| 308 | 2026-10-26 | `a70b166` | refactor: 설정 형식 정리·빌드 목록 분리·k3s-deploy.sh 가독성·경량화 |
| 309 | 2026-10-26 | `a085e73` | refactor: reset·검증 로직 정리, 한 단계씩 실행, k3s-self.txt 수동 구축 절차서 |
| 310 | 2026-10-26 | `80ae6c7` | refactor: main 에 모든 명령을 직접 적고 파트 표(load_part·STEPS) 삭제 |
| 311 | 2026-10-26 | `c1e4a19` | refactor: help·status 를 info(명령 목록 + 진행 상황) 하나로 |
| 312 | 2026-10-26 | `3513155` | refactor: info 목록을 [INFO] 로 출력, prepare 를 step 안으로 |
| 313 | 2026-10-26 | `c792709` | fix: UNKNOWN_COMMAND 철자 |
| 314 | 2026-10-26 | `9f0f8da` | refactor: print_info 를 print_help·print_status 로 분리 |
| 315 | 2026-10-26 | `f0f9690` | refactor: 운영 명령 함수 이름을 명령에 맞춤(run_verify·run_servers·run_publish) |
| 316 | 2026-10-26 | `ee11f5f` | refactor: prepare → prepare_root |
| 317 | 2026-10-26 | `3a49eb7` | refactor: precheck → prepare(명령·함수) |
| 318 | 2026-10-26 | `312ae2a` | refactor: fill 명령 삭제(platform deploy 와 중복) |
| 319 | 2026-10-26 | `1cd867d` | refactor: print_help 를 cat heredoc 으로 단순화 |
| 320 | 2026-10-26 | `d847c65` | refactor: Grafana admin Secret 을 platform argocd 로, platform deploy 는 채우기만 |
| 321 | 2026-10-26 | `ca77c4c` | refactor: deploy sync 를 deploy publish 에 합침(push → 동기화 대기 → Headlamp 토큰) |
| 322 | 2026-10-26 | `5466bd9` | refactor: info 를 help·status 두 명령으로 분리 |
| 323 | 2026-10-26 | `fb39e0f` | refactor: verify 준비(prepare_root·need_kubeconfig)를 run_verify 안으로 |
| 324 | 2026-10-26 | `0009fac` | refactor: main verify 는 run_verify 만(로그 파일 없이 화면) |
| 325 | 2026-10-26 | `fe7179d` | refactor: publish 별칭 삭제(deploy publish 로 통일) |
| 326 | 2026-10-26 | `4ab7b31` | refactor: get_conf_word 를 호출부에 병합 |
| 327 | 2026-10-26 | `034cfc1` | refactor: load_nodes 를 load_conf 에 합침 |
| 328 | 2026-10-26 | `7ede13b` | refactor: main servers 는 run_servers 만(prepare_root 는 함수 안) |
| 329 | 2026-10-26 | `afb8204` | refactor: fill_* 9개와 fill_gitops_values 를 fill_gitops 하나로 |
| 330 | 2026-10-26 | `4cb5d43` | refactor: run_servers 는 servers 명령으로만(k3s·storage prepare 에서 삭제) |
| 331 | 2026-10-26 | `60fea59` | refactor: config 단계를 각 파트 prepare 첫머리(show_conf)로 |
| 332 | 2026-10-26 | `484fed3` | refactor: k3s server_init → k3s init |
| 333 | 2026-10-26 | `4fe1b53` | refactor: 빈 값 검사를 show_conf 로 합치고 prepare_root 를 호출부에 풀어 넣음 |
| 334 | 2026-10-26 | `c3f2ab9` | refactor: show_gitlab_resources 삭제 |
| 335 | 2026-10-26 | `dccbad0` | refactor: make_gitops 를 prepare_deploy 에 합침 |
| 336 | 2026-10-26 | `6ba65b3` | refactor: GitLab 설치·k3s 첫 서버 설치를 Ansible 플레이북(gitlab.yml·k3s.yml)으로 |
| 337 | 2026-10-26 | `225904b` | refactor: gitlab gitlab → gitlab install |
| 338 | 2026-10-26 | `ce0e9d8` | fix: k3s-self.txt 진행 기록 키 gitlab → install |
| 339 | 2026-10-26 | `d4f716e` | revert: GitLab·k3s 첫 서버 설치 Ansible 전환 되돌림(ssh 로), 문서 현행 전수 조사·갱신 |
| 340 | 2026-10-26 | `42b6986` | docs: 원격 실행 방식 문구(Ansible·ssh) 현행화 |
| 341 | 2026-10-26 | `57547e8` | docs: 차트 버전 위치(k3s-build.sh helm pull) 바로잡음, docx 설치 장 현행화 기록 |
| 342 | 2026-10-26 | `28658d6` | platform deploy → deploy prepare (진행 기록 안 함) |
| 343 | 2026-10-26 | `eff3da9` | infra: repoURL 샘플 설명 deploy prepare 로 |
| 344 | 2026-10-26 | `cf4b634` | fill_gitops: repoURL 바꾸기 sed 한 줄로 |
| 345 | 2026-10-26 | `7a348c8` | repoURL 자리 표시를 GITLAB_HOST/GITLAB_GROUP/GITOPS_REPO 로 |
| 346 | 2026-10-26 | `2a8cdf6` | prepare_deploy·fill_gitops 합침, Longhorn defaultDataPath 보류(infra 12.4 #23) |
| 347 | 2026-10-26 | `97cf990` | 클러스터에 바로 넣는 설정 4개를 source/bootstrap/ 파일로 |
| 348 | 2026-10-26 | `0d90828` | storage paths 디스크 포맷 기능 삭제(IOTDB_DEVICES 는 마운트 경로만) |
| 349 | 2026-10-26 | `b4296bf` | join_k3s_nodes → join_k3s |
| 350 | 2026-10-26 | `d573c6f` | k3s 서버 config.yaml 을 source/bootstrap/k3s-server.yaml + sed 로 |
| 351 | 2026-10-26 | `309d051` | 스크립트 안 YAML heredoc 을 source/bootstrap/ 으로(registries·kube-vip·k3s agent·Cilium 풀·L2), make_k3s_config |
| 352 | 2026-10-26 | `5490265` | 명령 목록을 source/bootstrap/help.txt 로 |
| 353 | 2026-10-27 | `bf39c1a` | 함수 안 주석 + info 중복 → info 하나로 |
| 354 | 2026-10-27 | `8072d2b` | 개선 6가지: osprep.sh·paths.sh·gitlab.rb 를 bootstrap 으로, 공통 준비 main 한 곳, 한 번 쓰는 함수 인라인, verify 정리 |
| 355 | 2026-10-27 | `8f70545` | 경량화: fill_keys 하나로 틀 채우기(apps 키 이름), helm 값 파일·gitlab-install.sh, 빌드는 ./k3s-deploy.sh build, 알림 줄임, 주석 의존 제거·YAML 주석은 맨 위로 |
| 356 | 2026-10-27 | `7534b93` | 문서: 경량화 반영(fill_keys·값 파일·gitlab-install.sh·build 명령·주석 규칙), 수동 가이드 4-4·helm 단계 |
| 357 | 2026-10-27 | `0676c82` | BOOTSTRAP_DIR 변수(스크립트·Ansible bootstrap 변수) |
| 358 | 2026-10-27 | `4c8c1fa` | 가독성: 단계 표 하나·기록 자동(명령 전체 키), 파트별 lib/*.sh, ensure_gitlab, wait_for 재사용, publish 매번 새 clone, storage-values 틀, 긴 한 줄 풀기, 노드 파일 검사 줄임 |
| 359 | 2026-10-27 | `1e4ad65` | 문서: 단계 표·기록 키(명령 전체)·lib/ 구조·검사 줄임 반영 |
| 360 | 2026-10-27 | `1e80269` | 가독성: help 를 단계 표에서(help.txt 삭제), 설정 표시는 빈 값만, 작업 토큰 EXIT 에 폐기, k3s init 늘 다시 적용, 긴 줄 나눔·dnf_local |
| 361 | 2026-10-27 | `e2cd0b2` | 문서: help·설정 표시·k3s init 재실행·토큰 폐기 반영 |
| 362 | 2026-10-27 | `367f668` | lib/*.sh 를 다시 한 파일로 합치고 k3s-deploy.sh → k3s.sh |
| 363 | 2026-10-27 | `8731f47` | k3s.sh 정리: help printf 줄바꿈·ask_yn 인자 바로잡음, 배치(전역→공통→파트→단계 표·main), REGISTRY·GITOPS_URL 변수, registry_ok, save_kubeconfig <주소>, 경로 크기 Mi, --env 풀기 |
| 364 | 2026-10-27 | `ccb9a83` | 값은 global.env 로 통일: 틀이 GITLAB_* 키 직접(registries·gitlab.rb), 자동 계산(복제 수 낮춤·배치·메모리 80%·heap auto·operator 수·Argo CD 서비스 형식) → global.env 키 |
| 365 | 2026-10-27 | `febbf5d` | k3s-self.txt: 4-4 계산 값은 노드 목록만, Cilium operator·Argo CD 서비스 반영 |
| 366 | 2026-10-27 | `198ff51` | k3s.sh 정리: 한 곳만 쓰는 함수 인라인(is_single_node·make_log_file·encode_url_path), ensure_gitlab 결과로 그룹 ID, 크기는 numfmt, storage 경로는 paths.sh 가 만듦 |
| 367 | 2026-10-27 | `373c730` | 문서 요약·경량화(infra·analyze·history), A·B·k3s.sh 정리 반영, history #253 |
| 368 | 2026-10-27 | `5c6be26` | build.sh: 시계 어긋남 안내를 웹 시각 date -s 명령으로(NTP 막힌 빌드 호스트에서 makestep 이 안 고침) |
| 369 | 2026-10-27 | `8200c99` | build.sh: 시계가 5분 넘게 어긋나면 스스로 맞춤(chronyc makestep → 안 되면 웹 시각 date -s, hwclock 저장) |
| 370 | 2026-10-27 | `0348bcc` | gitlab-install.sh: firewall-cmd --add-service 와 --add-port 를 나눠 실행(한 번에 쓰면 오류) |
| 371 | 2026-10-27 | `a9cb74d` | gitlab install: gitlab.rb 를 RPM 설치 뒤에 넣음(먼저 두면 RPM 이 GITLAB_ROOT_PASSWORD 없이 reconfigure → root 비밀번호 무작위) |
| 372 | 2026-10-27 | `5b73f3b` | k3s prepare: 함수 마지막 줄 [[ ]] && die 가 거짓이면 함수가 1 을 돌려 FAIL → [[ != ]] // die |
| 373 | 2026-10-27 | `237e066` | ensure_ssh_keys: 키 문제가 아닌 실패(접속 불가·호스트 키 바뀜)는 원인대로 안내, 키 등록 실패는 ssh-copy-id 마지막 오류 줄 표시 |
| 374 | 2026-10-27 | `904bb82` | ensure_ssh_keys: ssh 오류의 \r 제거(화면 줄 앞을 덮어써 노드 이름이 가려짐), 접속 안 됨 안내에 ARP flush |
| 375 | 2026-10-27 | `9076cc3` | storage prepare: y/N 묻기 전에 앱 디스크 경로별 마운트(장치)·크기·여유 표시 |
| 376 | 2026-10-27 | `94501e6` | help: 구축 뒤 운영(워커 추가·재배포) 순서 |
| 377 | 2026-10-27 | `010239d` | ask_yn: [Y/N], 대문자 Y 만 진행(소문자 변환 없음) |
| 378 | 2026-10-27 | `abbd8fd` | infra: 확인 입력 Y/N(대문자 Y 만) |
| 379 | 2026-10-27 | `e2cb8a0` | help: 마스터(server) 추가 순서 |
| 380 | 2026-10-27 | `f8b3f85` | storage prepare: Y/N 질문 삭제(바꾸는 것 없는 점검 단계), 다른 prepare 와 같게 표시만 |
| 381 | 2026-10-27 | `da29ec5` | prepare 명령 4개 없앰: 각 파트 첫 단계가 사전 점검을 먼저(--env 면 그 노드만), 문서·history #254 |
| 382 | 2026-10-27 | `4b5bd13` | k9s 추가: build.sh 가 받고 bootstrap/k9s.sh 로 제어 서버에 등록(k3s.sh 명령 없음) |
| 383 | 2026-10-27 | `237ef22` | vault/env: VM 시험 노드 파일(node04~09) 반영 |
| 384 | 2026-10-27 | `3917981` | MariaDB Galera 추가(mariadb-operator 26.10.1, 선택 MARIADB_ENABLED) |
| 385 | 2026-10-27 | `1418d79` | MariaDB 앱 사용자 없앰: 앱도 root 로 접속 |
| 386 | 2026-10-27 | `629dae7` | MariaDB 키: MARIADB_USER(root)·MARIADB_PASSWORD, root 가 아니면 앱 사용자 추가 |
| 387 | 2026-10-27 | `05ee87b` | deploy publish: AppProject 먼저 적용, idpp-root 가 push 커밋을 읽을 때까지 대기 |
| 388 | 2026-10-27 | `b470310` | k3s.sh 주석에서 원인 설명 뺌 |
| 389 | 2026-10-27 | `50d7dd6` | gitlab-install.sh 주석에서 원인 설명 뺌 |
| 390 | 2026-10-27 | `c68c6ff` | build.sh 주석에서 원인 설명 뺌 |
| 391 | 2026-10-27 | `ff75c04` | docs: 오늘 VM 시험·결정 내용 반영(MariaDB·NAT·GitLab 재설치·k9s·막히는 지점) |
| 392 | 2026-10-27 | `a23b445` | history: docx 설치 장 갱신 |
| 393 | 2026-11-10 | `8289709` | 스냅샷: kafbat·redis-insight·headlamp 제거 전 현재 상태 |
| 394 | 2026-11-10 | `fc3f249` | Headlamp·kafbat·Redis Insight 제거(앱·차트·스크립트·env·문서) |
| 395 | 2026-11-10 | `d0c91fb` | docx·history: Headlamp·kafbat·Redis Insight 제거 반영 |
| 396 | 2026-11-10 | `477a53b` | MariaDB 1대 + Longhorn 2벌, Grafana Recreate, 컨테이너 로그 bind 제거, 대시보드 디스크 패널 정리 |
| 397 | 2026-11-10 | `a63ca91` | 자체 차트 주석을 머리로 정리, 개선점 문서에 전수조사·시험 VM 실측 반영 |
