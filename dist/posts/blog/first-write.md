---
title: 블로그를 작성해 보자.
date: '2022-06-02'
author: Crong
tags: ['tutorial', 'blog', 'test']
categories: blog
fileName: 'first-write'
---

# 블로그에 글을 작성해 보자!

### 블로그에 글을 작성 하려면 필요한 내용은 이렇습니다.

- public 폴더에 원하는 폴더명 + 파일명.md
  - ex:) `public/test/test.md`

- src/postsData.ts에 오브젝트 형식으로 만들어, 마크다운의 글을 긁어다가 붙혀넣기를 합니다.

```typescript
{
  title: '레포지토리 이미지 테스트용 md파일 2132121321321',
  date: '2022-06-26',
  author: 'Crong',
  tags: ['tutorial', 'blog', 'test'],
  categories: 'test',
  fileName: 'image-test',
},
```

<br />

