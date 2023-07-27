---
title: 5분만에 해치우는 dependencies, devDependencies
date: '2023-07-28'
author: Crong
tags: ['JavaScript', 'TypeScript']
categories: TypeScript
fileName: 'dependencies-differences'
---

# dependencies or devDependencies 차이점을 빠르게 알아보자.

<br />

- FE 및 javascript를 이용하는 BE라면 꼭 알아야 하는 중요한 녀석이다.  거의 아시다시피 package.json에 있는걸 알지만 왜 구분을 해놨는지, 그냥 몽땅 dependencies에 집어 넣어버리면 되지 않을까?(또는 단순 귀찮) 라고 생각을 해보았기에 이 글을 작성한다.

<br />

## dependencies, 앞에 dev가 붙어있는 devDependencies 뭐 하는 녀석이야?

1. devDependencies:
   - "devDependencies" 섹션은 주로 개발 과정에서 필요한 의존성 패키지를 정의하는 데 사용됩니다.
   - 개발자 도구, 테스트 프레임워크, 바벨 변환기 등과 같은 항목들이 주로 여기에 포함됩니다.
   - 이러한 패키지들은 애플리케이션의 개발, 디버깅, 테스트에 필요하지만, 실제로 프로덕션 환경에서는 사용되지 않습니다.
   - 예를 들어, 테스트를 위해 Jest나 Mocha와 같은 테스트 프레임워크를 설치할 때 devDependencies에 추가됩니다.

2. dependencies:
   - "dependencies" 섹션은 애플리케이션의 실제 운영에 필요한 의존성 패키지를 정의하는 데 사용됩니다.
   - 프로덕션 환경에서 애플리케이션의 실행, 기능 구현, 외부 API와의 상호 작용 등을 위해 필요한 패키지들이 여기에 포함됩니다.
   - 예를 들어, Express.js나 React와 같은 프레임워크 또는 라이브러리들은 dependencies에 추가됩니다.

<br />

## 이 둘의 차이가 뭐지?

이렇게 구분된 `devDependencies`와 `dependencies`는 프로젝트를 개발 및 배포할 때 중요한 역할을 합니다. **devDependencies는 개발 과정에서 필요한 도구와 라이브러리를 관리**하고, **dependencies는 애플리케이션의 실제 실행에 필요한 핵심 패키지들을 관리**합니다. 이를 통해 프로젝트의 효율성과 안정성을 높일 수 있습니다.

<br />
<br />

# 내용 요약하기.

- dependencies
  - 운영에서 실제 필요로 사용하는 라이브러리들을 추가하자.

- devDependencies
  - 개발환경에서 사용이 되는 것들만 넣자. ex:) prettier, eslint, emotion/styled etc...

<br />

### 저자의 포스트를 통해 **devDependencies**와 **dependencies**의 차이를 명확히 이해하고, 프로젝트의 패키지 관리에 대한 효율성을 향상시킬 수 있기를 바랍니다.


<br />
