# ZIPPOP 요구사항정의서 XLSX 변경안

## 1. 작업 범위

- 최종 반영 대상: `spring-service-zippop/meta/doc/v2/zippopv2-요구사항정의서.xlsx`
- 참고 문서: `요구사항정의서.md`, `zippopv2-요구사항정의서.html`
- 최종 사실 기준: 현재 `backend/src/main` 소스
- 작성일: 2026-10-05
- 이 문서는 변경 지시서이며 XLSX 원본은 수정하지 않았다.

## 2. 인벤토리와 판정

- XLSX: 시트 1개, 데이터 행 49개, 고유 요구사항 ID 49개
- Markdown 백엔드: 고유 요구사항 ID 50개
- HTML: 요구사항 표가 아니라 백엔드 API 명세 참고본
- 차이: XLSX에는 `BE_COMMON_004`가 없고, 로그아웃·소셜 로그인 ID가 Markdown과 반대로 배정되어 있다.
- 백엔드 테스트: `backend/gradlew.bat test` 성공
- XLSX SHA-256: `F2389CC456821B91293A8C9CE0F4420F419C1BD14080E8BCD28963570CA3FD47`

## 3. 반드시 변경할 셀

| 셀·범위 | 요구사항 | 변경 지시 |
| --- | --- | --- |
| `H4` | 헤더 | `우선 순위`를 `상태`로 변경한다. 실제 값이 `0`, `X`, `△`인 구현 상태이므로 우선순위가 아니다. |
| `H5:H8`, `H10:H60`의 숫자 상태 셀 | 상태 표시 | `0.0`으로 보이는 셀은 값 또는 표시 형식을 `0`으로 통일한다. 소셜 로그인은 아래 별도 지시를 적용한다. |
| `F5` | BE_AUTH_001 | `고객·기업 테이블 통합 기준 중복 불가`를 삭제한다. 실제 고객 가입은 `CustomerRepository`에서만 userId와 email을 검사한다. 고객·기업 간 동일 userId/email은 차단하지 않는다. |
| `F6` | BE_AUTH_002 | userId·email 중복 검사는 기업 테이블 내부에서만 수행한다고 정정한다. `crn`은 저장되지만 DTO에 필수·형식 검증이 없다는 현재 구현 사실도 명시한다. |
| `F7` | BE_AUTH_003 | 중복된 `isEmailAuth=false && isInActive=true` 상태 설명을 제거한다. `인증 전/비활성: false/true`, `활성: true/false` 두 상태와 Redis UUID 검증, 성공 시 활성화·Redis 삭제, 실패 시 오류 URL 리다이렉트만 남긴다. |
| `F8` | BE_AUTH_004 | `동일 userId 교차 중복 불가`를 삭제한다. 로그인은 고객 테이블을 먼저 조회하고 없으면 기업 테이블을 조회하므로 교차 중복이 생기면 고객 계정이 우선되는 구현 위험을 적는다. |
| `E9`, `E10` | 소셜 로그인·로그아웃 | Markdown의 ID 체계와 맞춰 `E9=BE_AUTH_006`, `E10=BE_AUTH_005`로 교환한다. |
| `H9` | 소셜 로그인 | `X`를 `△`로 변경한다. Kakao는 구현되어 있고 Naver·Google은 registration만 존재하므로 부분 구현이다. |
| `F10` | 로그아웃 | Controller API처럼 `POST/GET`으로 단정하지 말고 `Spring Security logout URL /api/v1/auth/logout`로 표현한다. ATOKEN·RTOKEN·WTOKEN·JSESSIONID 삭제, RTOKEN의 userId로 Redis `refreshToken:{userId}` 삭제, 성공 코드 `1006` 반환을 추가한다. |
| `F22` | BE_CART_004 | query enum을 소문자 `increment/decrement`에서 실제 값 `INCREMENT/DECREMENT`로 변경한다. 대소문자가 일치해야 한다. |
| `G27:G28` | BE_STORE_002~003 | 비어 있는 담당자를 다른 백엔드 행과 동일하게 `박종성`으로 입력한다. |
| `E36` | BE_GOODS_001 | 앞쪽 공백을 제거해 정확히 `BE_GOODS_001`로 저장한다. |
| `F36` | BE_GOODS_001 | 입력의 `files`를 `files(선택)`으로 정정한다. Controller의 MultipartFile 배열은 `required=false`다. |
| `F42` | BE_ORDERS_001 | 예약 주문 검증에 `reserveIdx 존재`, `요청 popup과 예약 popup 일치`, `예약 시간 범위`, `잔여 인원`, `Redis working 큐 멤버십`, `굿즈 popup 일치`, `GOODS_RESERVED`를 추가한다. 재고 주문에는 `굿즈 popup 일치`와 `GOODS_STOCK` 검증을 추가한다. |
| `F43` | BE_ORDERS_002 | body의 status는 취소 분기 판별에만 사용하고 실제 취소 상태는 기존 주문 종류에서 서버가 결정한다고 정정한다. 예약 주문 취소 시 재고·사용 포인트는 복구하지만 예약 구매로 적립한 5% 포인트는 현재 회수하지 않는 구현 차이를 표시한다. |
| `F44` | BE_ORDERS_003 | `status`가 취소값이 아니면 요청값 자체를 적용하지 않고 역할과 기존 주문 상태로 배송/완료 상태를 결정한다고 정정한다. 기업은 READY 또는 COMPLETE도 DELIVERY로 바꿀 수 있고, 고객은 READY만 COMPLETE로 바꿀 수 있다. |
| `F48` | BE_RESERVE_001 | `reservePeople > 0`, 시작일과 시작시각 날짜 일치, 종료시각이 시작시각 이후, 슬롯 인원이 팝업 잔여 인원을 넘지 않음을 추가한다. 성공 HTTP 상태는 실제 구현대로 `200 OK`라고 명시한다. |
| `E50`, `E51`, `E52`, `E60` | 예약·공통 ID | 뒤쪽/앞쪽 공백을 제거해 각각 `BE_RESERVE_003`, `BE_RESERVE_004`, `BE_RESERVE_005`, `BE_COMMON_003`으로 저장한다. |
| `F50` | BE_RESERVE_003 | 시작 전은 오류 `7019`, 종료·마감은 `7020`으로 거부한다고 추가한다. 예약 주문 생성 시에도 시간·잔여 인원·popup 일치·Redis working 멤버십을 다시 검증한다고 추가한다. |
| `F51` | BE_RESERVE_004 | working 이탈 시 WTOKEN이 쿠키에 있을 때만 블랙리스트 처리하고 쿠키를 만료시킨다고 구체화한다. 대기자 승격은 동일 Redisson lock에서 수행하지만 ZSET remove/add 두 명령이 Lua로 원자화된 것은 아니라는 구현 위험을 표시한다. 알림 목적지는 `/user/queue/reserve/status`다. |
| `F52` | BE_RESERVE_005 | 서버 전송 호출이 `convertAndSendToUser(email, "/queue/reserve/status", payload)`이고 클라이언트 구독 주소가 `/user/queue/reserve/status`임을 구분한다. 두 큐에 없는 사용자의 상태 조회는 `RESERVE_ACCESS_FAIL`로 실패한다고 추가한다. |
| `F59` | BE_COMMON_002 | 매 10분마다 당일 예약만 조회해 종료된 큐를 삭제하고, 아직 종료되지 않았는데 키가 없는 working/waiting 큐를 남은 시간 TTL로 복구한다고 구체화한다. |

## 4. 새 행 추가

현재 마지막 데이터 행 60 다음에 `BE_COMMON_004`를 추가한다.

| 셀 | 입력값 |
| --- | --- |
| `B61` | `스케줄러 / 공통` 구분의 병합 범위를 새 행까지 확장한다. 기존 `B58:C60` 병합은 `B58:C61`로 변경한다. |
| `D61` | `공통 응답·예외 분리` |
| `E61` | `BE_COMMON_004` |
| `F61` | 아래 상세 문구를 입력한다. |
| `G61` | `박종성` |
| `H61` | `0` |

`F61` 권장 문구:

```text
[ 공통 응답·예외 ]

1. 성공: SuccessResponse<T> — success, code, message, result
2. 사용자 정의 오류: ServiceException + ServiceErrorCode, HTTP 400
3. 서버·외부 연계 오류: ServerException + ServerErrorCode, 오류별 HTTP status
4. ErrorResponse — success=false, status, errorCode, code, message, details, path, timestamp
5. Validation·JSON·인증·권한·JWT·DB·Redis·파일·메일·PortOne 오류를 GlobalExceptionHandler에서 구분 처리
```

## 5. 유지해도 되는 범위

다음 요구사항은 핵심 설명이 현재 소스와 일치하므로 위 변경 외에는 유지한다.

- 회원: BE_AUTH_007~013
- 장바구니: BE_CART_001~003, BE_CART_005~006
- 팝업: BE_STORE_001~009
- 굿즈: BE_GOODS_002~005
- 주문 조회: BE_ORDERS_004~005
- 예약: BE_RESERVE_002, BE_RESERVE_006
- 정산: BE_PAYOUT_001~002
- 공통: BE_COMMON_001, BE_COMMON_003

## 6. XLSX 수정 후 검증 체크리스트

1. 고유 요구사항 ID가 50개인지 확인한다.
2. 모든 ID에 선행·후행 공백이 없는지 확인한다.
3. `BE_AUTH_005=로그아웃`, `BE_AUTH_006=소셜 로그인`인지 확인한다.
4. 담당자 공란이 없는지 확인한다.
5. 상태 열이 `0`, `△`, `X`만 사용하는지 확인한다.
6. `operation=INCREMENT/DECREMENT`, `/user/queue/reserve/status`, `files(선택)` 표기가 남아 있는지 확인한다.
7. 새 `BE_COMMON_004` 행과 병합 범위 `B58:C61`을 확인한다.
8. 긴 상세 셀의 줄바꿈과 행 높이를 조정해 F열 문구가 잘리지 않는지 렌더링으로 확인한다.
9. 수정 전후 값 변경이 본 문서의 지정 셀과 새 행으로 제한되는지 비교한다.
10. 백엔드 테스트를 다시 실행하고 XLSX 최종 SHA-256을 기록한다.

## 7. 구현 위험으로 남길 내용

- 고객·기업 테이블 사이의 userId/email 중복을 서버가 통합 검사하지 않는다.
- 주문 갱신 API는 취소 상태 외의 임의 status 문자열을 역할 기반 확정 처리로 보낸다.
- 예약 주문 취소 시 적립된 5% 포인트를 회수하지 않는다.
- 대기자 승격의 Redis ZSET remove/add는 같은 Redisson lock 안에서 실행되지만 단일 Lua 명령은 아니다.
