import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Container paddingBlock={4} maxW={"container.sm"}>
      <Heading
        whiteSpace={"pre-line"}
      >{`반갑습니다.\n프론트엔드 개발자 임희지입니다.`}</Heading>

      <PhoneIcon />

      <UnorderedList>
        {[
          "문제 해결에 필요한 기술 습득을 좋아합니다.",
          "기술을 빠르게 배우고 적용할 수 있는 기본기를 가지고 있습니다.",
          "사용자에게 정보를 어떻게 전달하고 흥미를 이끌 것인지 고민하기를 즐깁니다.",
        ].map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </UnorderedList>

      <Heading size={"lg"}>Work Experience.</Heading>
      <Divider />

      <Flex>
        <Box boxSize={"2xl"}>
          <Image
            src={"/looko-logo.webp"}
            alt="looko-logo-image"
            width={96}
            height={96}
          />
          <Text fontSize={"3xl"}>룩코</Text>
          <Text>Frontend Engineer</Text>
          <Text>2022.01 ~ 현재</Text>
        </Box>

        <Stack spacing={"16"}>
          <Stack>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              LOOKO-AI 웹
            </Text>
            <Text color={"GrayText"}>
              중고 의류 사업자의 의류관리, 주문관리를 효율적으로 도와주는 SAAS
              제품
            </Text>

            <Stack flexDirection={"row"}>
              {["react", "typescript", "react query", "recoil"].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Stack>

            <UnorderedList>
              {[
                "의류 업로드 및 관리 페이지, 의류 이미지 조합하기 기능 구현 및 유지보수",
                "상품관리, 주문관리, 반품관리 페이지 구현 및 유지보수",
              ].map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>

            <Text fontWeight={"bold"}>이미지 로딩 최적화</Text>
            <Text>
              많은 고해상도 이미지를 노출할 때 모든 이미지를 불러와 사용자가
              페이지에 진입 후 긴 시간 동안 아무것도 클릭할 수 없는 문제가
              있었음. intersection observer를 활용해 이미지가 브라우저에
              노출되었을 때 이미지를 불러오도록 해 사용자가 기다리지 않을 수
              있도록 해결함.
            </Text>

            <Text fontWeight={"bold"}>메타데이터 캐싱</Text>
            <Text>
              앱 전역에 사용하는 데이터를 페이지를 이동할 때마다 호출하여 서버에
              부하를 주고 네트워크를 디 버깅 하는데 어려움을 겪음. 앱이 시작할
              때만 api를 호출하고 그 후에는 하루에 한 번만 호출하도 록 react
              query를 활용해 로컬 스토리지에 캐시하는 방식으로 해결했음.
            </Text>

            <Text fontWeight={"bold"}>변경에 유연한 컴포넌트 설계</Text>
            <Text>
              제품 초기 특성상 데이터와 UI 변경이 잦았고 이에 대응하는데
              어려움을 겪음. 데이터 변경에 유연 하게 대처하기 위해 서버와 데이터
              사이에 데이터 정제부를 두어 데이터가 변경되더라도 UI 코드 는
              변경할 필요가 없도록 했음. UI 변경에 대처하기 위해 컴포넌트를
              역할에 따라 분리하여 수정 범 위가 작도록 했음.
            </Text>
          </Stack>

          <Stack>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              에이클로젯
            </Text>
            <Text color={"GrayText"}>
              디지털 옷장 관리 앱, 글로벌 유저를 타겟으로 사용자의 의류 관리를
              편하게 하고 공유
            </Text>

            <Stack flexDirection={"row"}>
              {["react native", "zustand", "reanimated"].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Stack>

            <UnorderedList>
              {["앱 기능 구현 및 유지보수"].map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>

            <Text fontWeight={"bold"}>
              온보딩 개선으로 유저 이탈율 50% 감소
            </Text>
            <Text>
              온보딩에서 유저 이탈율이 높아 앱을 사용해보지 않는 문제가 있었음.
              온보딩에서 유저들의 이목을 사로잡고 정보를 잘 전달할 수 있도록
              온보딩을 개선하기로 함. reanimated를 활용해 한 컴포넌 트 안에서
              스텝으로 애니메이션을 구현했고 앞뒤로 이동할 때도 자연스러운
              사용성을 보장하도록 함. 결과 온보딩 이탈율이 50% 감소하는 성과를
              이루었음.
            </Text>

            <Text fontWeight={"bold"}>디자인 시스템 구축</Text>
            <Text>
              매번 UI 컴포넌트를 재정의하고 재개발하면서 불필요한 반복 작업이
              늘어나고 일괄 수정이 어려운 문제가 있었음. 공용 컴포넌트들에 대해
              디자인 시스템을 구축하기로 결정함. 재사용성과 확장성이 좋도록
              컴포넌트를 설계하였고 디자이너와 개발자 모두 생산성을 향상시킬 수
              있었음.
            </Text>
          </Stack>

          <Stack>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              라벨링 백오피스
            </Text>
            <Text color={"GrayText"}>
              의류 AI 학습에 필요한 데이터를 라벨링하는 제품
            </Text>
            <Stack flexDirection={"row"}>
              {["react", "typescript", "react query", "recoil"].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Stack>

            <UnorderedList>
              {[
                "라벨링 페이지 UI/UX 구상 및 구현",
                "관리자 대시보드 구현 및 유지보수",
              ].map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>

            <Text fontWeight={"bold"}>UI/UX 개선</Text>
            <Text>
              라벨러들이 사용하는 페이지의 UI 위계가 잡혀있지 않아 기능을 찾기
              어려워 라벨러 효율이 떨어 지는 문제가 있었음. 크기,색상,위치로
              UI의 위계를 나타낼 수 있도록 구상하고 구현함. 라벨러들의 작업량이
              이전보다 상승했음.
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Container>
  );
}
