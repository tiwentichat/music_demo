---
id: index
title: Home Page
slug: /
---

import AudioPlayer from '@site/src/components/AudioPlayer';

本页面为Suno样本音乐示例，更多标签选择请移步：https://sunotag.gowithai.help

### 用法
先选类型，比如 数字 ， 再选具体音乐。

<AudioPlayer  
  categories={["数字", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U"]}
  audioFiles={[

    { category: "数字",  label: "16-bit", url: "https://cdn1.suno.ai/99f0acf0-d67c-4a9d-bbf8-361e95a7665f.mp3" },

    { category: "数字",  label: "16-bit celtic", url: "https://cdn1.suno.ai/39c8895f-e6bc-4312-89ab-db20458f2a74.mp3" },

    { category: "数字",  label: "16-bit roots reggae", url: "https://cdn1.suno.ai/54a0ef87-e299-4cff-a17c-84b4748ef8a8.mp3" },

    { category: "数字",  label: "2-step", url: "https://cdn1.suno.ai/e30c4b4c-4723-45a0-b355-19a98448b4fd.mp3" },

    { category: "数字",  label: "2-step country", url: "https://cdn1.suno.ai/3d232df0-69f4-4b52-9acc-00ac06cd72fe.mp3" },

    { category: "数字",  label: "2-step surf", url: "https://cdn1.suno.ai/1d2261ec-ac0f-4fc8-893f-bf9f462e383f.mp3" },




    { category: "A",  label: "acoustic acid rock", url: "https://cdn1.suno.ai/39511c71-5419-4b5f-b9cd-222ebe4c281f.mp3" },

    { category: "A",  label: "acoustic afropiano", url: "https://cdn1.suno.ai/8064954c-3ce4-4b5e-bfaf-d33c4d6d386b.mp3" },

    { category: "A",  label: "acoustic ambient trance", url: "https://cdn1.suno.ai/aade4133-187d-4bcb-ac5f-7f86540b4441.mp3" },

    { category: "A",  label: "acoustic blues glitch hop", url: "https://cdn1.suno.ai/2df0abef-6f0b-4972-a758-af2e4721b591.mp3" },

    { category: "A",  label: "acoustic blues mariachi", url: "https://cdn1.suno.ai/85745248-5b1c-496a-9dcb-8f2fcb3a9015.mp3" },

    { category: "A",  label: "acoustic blues slushwave", url: "https://cdn1.suno.ai/0db345b1-762a-4860-a96f-35a067940781.mp3" },

    { category: "A",  label: "acoustic carnatic", url: "https://cdn1.suno.ai/f76f6f84-45b2-4e26-b084-71e47f9a104a.mp3" },

    { category: "A",  label: "acoustic chicago blues", url: "https://cdn1.suno.ai/dbb0a7cb-fef1-4f46-bd36-9920ea854d81.mp3" },

    { category: "A",  label: "acoustic chicago blues algorave", url: "https://cdn1.suno.ai/017b7138-880c-4179-8504-2b8231e43ef8.mp3" },

    { category: "A",  label: "acoustic chicago blues cape verdean", url: "https://cdn1.suno.ai/512ff9f2-3990-4005-b410-5f56a81eea45.mp3" },

    { category: "A",  label: "acoustic chicago blues motown", url: "https://cdn1.suno.ai/3de0a8fe-261a-4e93-88b7-ff1710f793d1.mp3" },

    { category: "A",  label: "acoustic chicago blues reggaeton", url: "https://cdn1.suno.ai/b84e80c2-4932-44f0-9eb4-021c8eb93945.mp3" },

    { category: "A",  label: "acoustic classical", url: "https://cdn1.suno.ai/e942062e-a696-4ea2-a395-d550802a287d.mp3" },

    { category: "A",  label: "acoustic raga", url: "https://cdn1.suno.ai/b9b15560-1cc2-4386-8201-96f7fe60ec50.mp3" },

    { category: "A",  label: "acoustic rock", url: "https://cdn1.suno.ai/1f763b10-0291-4708-9573-1911d9d3e2d6.mp3" },

    { category: "A",  label: "acoustic rock afro-jazz", url: "https://cdn1.suno.ai/6b6fd343-5dbb-4edd-b747-d1844b1b4c3b.mp3" },

    { category: "A",  label: "acoustic rock chillsynth", url: "https://cdn1.suno.ai/9361bd7f-0d2e-4989-b3d8-c8bf83c9adb8.mp3" },

    { category: "A",  label: "acoustic rockabilly", url: "https://cdn1.suno.ai/b8d91ad4-09fa-4f9b-870d-2f04e15c3824.mp3" },

    { category: "A",  label: "acoustic slushwave", url: "https://cdn1.suno.ai/abf692de-41d9-49d9-981b-6de07493dcf9.mp3" },

    { category: "A",  label: "acoustic texas blues", url: "https://cdn1.suno.ai/44070140-19a4-4fa0-8b2d-14021c503ade.mp3" },

    { category: "A",  label: "acoustic texas blues afrobeat", url: "https://cdn1.suno.ai/b5d36bbb-42f0-442c-93c9-3bc4a09c8b49.mp3" },

    { category: "A",  label: "acoustic texas blues chillstep", url: "https://cdn1.suno.ai/7a8e8dfb-5418-41fe-9190-890e4ccb3404.mp3" },

    { category: "A",  label: "accordion 16-bit", url: "https://cdn1.suno.ai/4490b803-493e-4ca5-b1bb-10ead2d1f568.mp3" },

    { category: "A",  label: "accordion african folk", url: "https://cdn1.suno.ai/3a250876-b8ff-40f5-87ff-8a517568aea8.mp3" },

    { category: "A",  label: "accordion afro trap", url: "https://cdn1.suno.ai/abbfbb18-b787-4d99-be5e-280faaab116a.mp3" },

    { category: "A",  label: "accordion ambient techno", url: "https://cdn1.suno.ai/46d1a363-bf3e-477b-aad9-2327f4d976b1.mp3" },

    { category: "A",  label: "accordion delta blues", url: "https://cdn1.suno.ai/14c496e7-4ae1-4f86-bb7e-40501d74faba.mp3" },

    { category: "A",  label: "accordion drill", url: "https://cdn1.suno.ai/dbe8e311-7f07-4696-a764-3a1679fbf9ad.mp3" },

    { category: "A",  label: "accordion hawaiian", url: "https://cdn1.suno.ai/571d4350-38a9-4371-ac03-33d777c5ad3c.mp3" },

    { category: "A",  label: "accordion jungle", url: "https://cdn1.suno.ai/c9af6f9d-94ef-4d90-8e72-3864f30064f6.mp3" },

    { category: "A",  label: "accordion rap", url: "https://cdn1.suno.ai/9c1972d9-1cb6-498b-8623-8e7e960b2286.mp3" },

    { category: "A",  label: "accordion tango", url: "https://cdn1.suno.ai/b5402712-1f4c-45e5-ae01-b7123a718d85.mp3" },

    { category: "A",  label: "acid breaks alt-country", url: "https://cdn1.suno.ai/9f894ab6-c901-4b90-aa48-c89d31f580d1.mp3" },

    { category: "A",  label: "acid house", url: "https://cdn1.suno.ai/c129b023-c7ae-4aba-bd05-da6e17657f5b.mp3" },

    { category: "A",  label: "acid house boom bap", url: "https://cdn1.suno.ai/af2208e2-46a0-493a-bdf5-532d3b8b1d3d.mp3" },

    { category: "A",  label: "acid jazz crunk", url: "https://cdn1.suno.ai/cd164a53-9471-4f4e-a57e-e7f31b618a89.mp3" },

    { category: "A",  label: "acid rock city pop", url: "https://cdn1.suno.ai/4aaf14ca-ea58-4e97-87e3-b19aca31595a.mp3" },

    { category: "A",  label: "acid rock p-funk", url: "https://cdn1.suno.ai/ef2e9b97-1c22-4c32-8ee6-97bcb80c7d20.mp3" },

    { category: "A",  label: "acid techno", url: "https://cdn1.suno.ai/65f9bd46-ce57-472f-b59a-4228c98e6848.mp3" },

    { category: "A",  label: "acid techno avant-garde jazz", url: "https://cdn1.suno.ai/45d2c50c-7ddd-4ca1-bd4c-c3c0a3435f0a.mp3" },

    { category: "A",  label: "acid techno psybient", url: "https://cdn1.suno.ai/f6a4d25b-a63c-4e40-b0c0-ae037caeeaa0.mp3" },

    { category: "A",  label: "acid trance", url: "https://cdn1.suno.ai/b138c212-5837-422d-9837-f22c78590728.mp3" },

    { category: "A",  label: "african folk drill", url: "https://cdn1.suno.ai/aa80f06d-872f-465e-94f6-fccbbcaff7e8.mp3" },

    { category: "A",  label: "african folk math rock", url: "https://cdn1.suno.ai/1c3f5b6a-d39a-446e-a3d5-53fc106a6ed4.mp3" },

    { category: "A",  label: "afrikaner folk", url: "https://cdn1.suno.ai/a03e762c-4daf-4d3d-a007-fa9cf23d6448.mp3" },

    { category: "A",  label: "afrikaner folk drill", url: "https://cdn1.suno.ai/a3079dde-f541-48a2-a566-404b90dc4c0a.mp3" },

    { category: "A",  label: "afrikaner folk pacific reggae", url: "https://cdn1.suno.ai/dade8f12-5a8f-4adf-89f9-2935b33f2cec.mp3" },

    { category: "A",  label: "afrikaner folk tango", url: "https://cdn1.suno.ai/683333fe-1fdd-4cf2-9654-e6c8ac33467c.mp3" },

    { category: "A",  label: "afro house dembow", url: "https://cdn1.suno.ai/f60f6756-6b89-47db-b2b5-f40ed8553209.mp3" },

    { category: "A",  label: "afro house drill and bass", url: "https://cdn1.suno.ai/bf291966-9096-4470-b993-54bb057d26d5.mp3" },



    { category: "A",  label: "afro house acoustic blues", url: "https://cdn1.suno.ai/6072c9cf-57b0-45ef-8238-68c6da63e4df.mp3" },

    { category: "A",  label: "afro house rock", url: "https://cdn1.suno.ai/2da777e5-bab9-435b-a7cf-c397e1f482bd.mp3" },

    { category: "A",  label: "afro trap r&b", url: "https://cdn1.suno.ai/fbece422-3bf2-4354-963c-8f681e15ab36.mp3" },

    { category: "A",  label: "afro-cuban jazz", url: "https://cdn1.suno.ai/9a38915d-e419-4e36-92cd-00abe14623b0.mp3" },

    { category: "A",  label: "afro-cuban jazz crunk", url: "https://cdn1.suno.ai/f3113a82-e71b-4da7-9767-cda8fdc772ce.mp3" },

    { category: "A",  label: "afro-cuban jazz doo-wop", url: "https://cdn1.suno.ai/c08fb91a-225c-4774-8133-2e68a033800e.mp3" },

    { category: "A",  label: "afro-cuban jazz griot", url: "https://cdn1.suno.ai/f0cbffc2-09b6-4aba-96bb-87a2b269f179.mp3" },

    { category: "A",  label: "afro-funk", url: "https://cdn1.suno.ai/5eb780c9-646e-4c48-83d8-033a8a4c10c6.mp3" },

    { category: "A",  label: "afro-jazz", url: "https://cdn1.suno.ai/4815c59a-56ad-4870-92c2-8a4713d8da88.mp3" },

    { category: "A",  label: "afro-jazz blues rock", url: "https://cdn1.suno.ai/43d544e4-c921-4b7c-8bae-e39e55e0aefe.mp3" },

    { category: "A",  label: "afro-jazz carnatic", url: "https://cdn1.suno.ai/f09ac0e4-df21-4468-8213-9a82c5c2afa1.mp3" },

    { category: "A",  label: "afro-jazz drill", url: "https://cdn1.suno.ai/76cad73e-bc51-4ce8-a88e-9d283caa62ce.mp3" },

    { category: "A",  label: "afro-rock", url: "https://cdn1.suno.ai/78db74d6-0db3-45ef-929a-55e64ce54a3d.mp3" },

    { category: "A",  label: "afro-rock ambient dub", url: "https://cdn1.suno.ai/d3508ff1-73cd-444b-8fdb-189c79e67b94.mp3" },

    { category: "A",  label: "afro-rock bachata", url: "https://cdn1.suno.ai/94bf89d6-eea6-472f-961e-f0248fe451dc.mp3" },

    { category: "A",  label: "afrobeat", url: "https://cdn1.suno.ai/2d8d8df5-49bd-4324-85a5-5516dee83dd8.mp3" },

    { category: "A",  label: "afrobeat disco", url: "https://cdn1.suno.ai/61c10b94-1278-4908-844d-1da2412f1099.mp3" },

    { category: "A",  label: "afrobeat garage", url: "https://cdn1.suno.ai/b2f604a5-a0dd-4b8a-b91e-23410a18d0c2.mp3" },

    { category: "A",  label: "afrobeat griot", url: "https://cdn1.suno.ai/3cdd93a5-2f27-4259-af29-7f6e17daeb7a.mp3" },

    { category: "A",  label: "afrobeat new jack swing", url: "https://cdn1.suno.ai/cdbcc216-5f86-439f-bccd-26453b29517f.mp3" },

    { category: "A",  label: "afrobeat rockabilly", url: "https://cdn1.suno.ai/5c893f61-2559-4a67-a2b0-2af26f5fa706.mp3" },

    { category: "A",  label: "afrobeat swing", url: "https://cdn1.suno.ai/23c1454b-d8d7-45f0-9c83-2b4369cdb6c7.mp3" },

    { category: "A",  label: "afropiano", url: "https://cdn1.suno.ai/3af74da3-7e9f-46f1-9fe0-2fa24ba18486.mp3" },

    { category: "A",  label: "afropiano blues rock", url: "https://cdn1.suno.ai/a6072f6a-6ff8-4492-8767-4d97a01c07fa.mp3" },

    { category: "A",  label: "afroswing", url: "https://cdn1.suno.ai/579d7767-0e26-41ba-983a-fb26a9eb09a2.mp3" },

    { category: "A",  label: "afroswing k-pop", url: "https://cdn1.suno.ai/690791ff-430a-4c28-9374-44d123c4837f.mp3" },

    { category: "A",  label: "afroswing new wave", url: "https://cdn1.suno.ai/1f57e9d6-7f54-42ee-a28f-a53c8c691235.mp3" },

    { category: "A",  label: "algorave", url: "https://cdn1.suno.ai/16ab4c40-e75e-4a06-bd2f-ee59c868bc9e.mp3" },

    { category: "A",  label: "algorave acid jazz", url: "https://cdn1.suno.ai/b7ad33c3-06ad-43b6-b4f4-b5de5f532880.mp3" },

    { category: "A",  label: "algorave garage", url: "https://cdn1.suno.ai/3cb008bc-660d-4f0d-92f1-a0f9a62f914c.mp3" },

    { category: "A",  label: "algorave hawaiian", url: "https://cdn1.suno.ai/6d1653f1-c032-4a90-a8ed-f342ba0b5316.mp3" },

    { category: "A",  label: "algorave psybient", url: "https://cdn1.suno.ai/15a0ef03-28d2-43fc-82c1-78fdeac86254.mp3" },

    { category: "A",  label: "alt-country 2-step", url: "https://cdn1.suno.ai/aefa3ed0-ee82-4a64-b22a-b638dd4406ba.mp3" },

    { category: "A",  label: "alt-country disco", url: "https://cdn1.suno.ai/0628751b-9e6f-4a73-9a22-794e9db27d99.mp3" },

    { category: "A",  label: "alt-country dubstep", url: "https://cdn1.suno.ai/592cbad5-42bd-444a-bcfa-a2d30a57ef50.mp3" },

    { category: "A",  label: "alt-country surf rock", url: "https://cdn1.suno.ai/c5491afb-7024-4353-94d5-2becad80e7b4.mp3" },

    { category: "A",  label: "alt-pop afropiano", url: "https://cdn1.suno.ai/0297119e-af5d-4f2c-939f-d2e02c603d2f.mp3" },

    { category: "A",  label: "alternative r&b", url: "https://cdn1.suno.ai/57d9b3d6-fe89-4791-9478-96d0330edd65.mp3" },

    { category: "A",  label: "alternative r&b dembow", url: "https://cdn1.suno.ai/9b21a66d-2234-4193-83df-d274301de9da.mp3" },

    { category: "A",  label: "alternative r&b griot", url: "https://cdn1.suno.ai/9d71202f-2b1d-43a3-944e-153cc7b48a65.mp3" },

    { category: "A",  label: "alternative rock", url: "https://cdn1.suno.ai/44f80d97-ae0f-4347-9c83-41bd631916af.mp3" },

    { category: "A",  label: "ambient dub bachata", url: "https://cdn1.suno.ai/47eb53f4-07ae-4a52-8d08-9c00354073e7.mp3" },

    { category: "A",  label: "ambient dub bedroom pop", url: "https://cdn1.suno.ai/53162e89-8304-42d5-b0be-142d1aa578e8.mp3" },

    { category: "A",  label: "ambient dub boogie", url: "https://cdn1.suno.ai/aa9d426d-5c91-4981-8ad0-d3394091eda4.mp3" },

    { category: "A",  label: "ambient dub techno", url: "https://cdn1.suno.ai/877003d6-9daf-44d5-b8aa-8ca528ed4044.mp3" },

    { category: "A",  label: "ambient house 16-bit", url: "https://cdn1.suno.ai/fe2e6d06-1dd5-4458-8426-6cb742fce01c.mp3" },

    { category: "A",  label: "ambient house breakstep", url: "https://cdn1.suno.ai/839e41d2-f4c3-412d-8ba8-8da91ddfa34f.mp3" },

    { category: "A",  label: "ambient house cajun", url: "https://cdn1.suno.ai/9cb66a63-752e-4948-8676-efd151895442.mp3" },

    { category: "A",  label: "ambient house electropop", url: "https://cdn1.suno.ai/68bbdfe7-dcc7-4ef0-b73d-0405615d2aef.mp3" },

    { category: "A",  label: "ambient house p-funk", url: "https://cdn1.suno.ai/791e901c-07fd-4c2e-bf9b-fd2365e9993c.mp3" },

    { category: "A",  label: "ambient noise wall chanson", url: "https://cdn1.suno.ai/633b1c75-e4bf-47dc-8f75-5e9070ee975b.mp3" },

    { category: "A",  label: "ambient techno", url: "https://cdn1.suno.ai/4d4667a8-e624-44fe-a71f-dd1d17544e3f.mp3" },

    { category: "A",  label: "ambient techno afroswing", url: "https://cdn1.suno.ai/cff64b61-4e4c-485f-87b1-01e5ef487ec0.mp3" },

    { category: "A",  label: "ambient techno chanson", url: "https://cdn1.suno.ai/6a2120cd-878d-4f03-b995-b57a8afb5870.mp3" },

    { category: "A",  label: "ambient techno hyphy", url: "https://cdn1.suno.ai/ae42d217-ab86-4f1f-bbd4-8555cc95c007.mp3" },

    { category: "A",  label: "ambient techno mento", url: "https://cdn1.suno.ai/2c9af050-0b64-4db7-a6fb-de6143885590.mp3" },

    { category: "A",  label: "ambient trance alternative rock", url: "https://cdn1.suno.ai/0539561a-1e66-498a-a38f-6bbe379ef51f.mp3" },

    { category: "A",  label: "ambient trance chanson", url: "https://cdn1.suno.ai/47d39d18-1dac-4cd8-8344-5744f3b06963.mp3" },

    { category: "A",  label: "ambient trance folk", url: "https://cdn1.suno.ai/4aa642f3-23fd-4c1c-9739-d6de48ce33c9.mp3" },

    { category: "A",  label: "ambient trance jungle", url: "https://cdn1.suno.ai/cf4413e6-d7ce-4136-b757-e0e9cb683ca5.mp3" },

    { category: "A",  label: "ambient trance mento", url: "https://cdn1.suno.ai/e92468e1-ab80-4f6e-83c3-8a1087d49b39.mp3" },

    { category: "A",  label: "american primitivism 2-step", url: "https://cdn1.suno.ai/862d1a4a-9e42-43ae-8aac-812adb9c5c47.mp3" },

    { category: "A",  label: "american primitivism bedroom pop", url: "https://cdn1.suno.ai/811a714c-86ba-4911-987d-2f75bdc35118.mp3" },

    { category: "A",  label: "american primitivism illbient", url: "https://cdn1.suno.ai/d2edd371-6bc1-4cc3-b82b-197e1072bf79.mp3" },

    { category: "A",  label: "americana jungle", url: "https://cdn1.suno.ai/62a6329b-4b7d-4b0a-b8f3-c35f9adbf239.mp3" },

    { category: "A",  label: "americana soul", url: "https://cdn1.suno.ai/395a2365-d2a9-4f36-9e3b-8c3829a2a35d.mp3" },

    { category: "A",  label: "anti-folk", url: "https://cdn1.suno.ai/ef8511b8-2589-44a0-942f-acb47a926559.mp3" },

    { category: "A",  label: "anti-folk big band", url: "https://cdn1.suno.ai/58589063-e9ac-4f31-bfc9-b8ef5f25bcf3.mp3" },

    { category: "A",  label: "anti-folk drumstep", url: "https://cdn1.suno.ai/c59047bb-f762-4162-8cd5-744a0541a963.mp3" },

    { category: "A",  label: "anti-folkwave", url: "https://cdn1.suno.ai/109a4e9c-cf0b-48cd-b8bb-e2391fd6556a.mp3" },

    { category: "A",  label: "appalachian folk anti-folk", url: "https://cdn1.suno.ai/43200448-dabc-47bd-ac73-ee1267a65da1.mp3" },

    { category: "A",  label: "appalachian folk cloud rap", url: "https://cdn1.suno.ai/133df93f-a38b-4ec0-b898-6df369cd1f56.mp3" },

    { category: "A",  label: "appalachian folk flamenco", url: "https://cdn1.suno.ai/603d70ff-8e35-4b61-aa18-471dcdfa19a0.mp3" },

    { category: "A",  label: "arabic 16-bit", url: "https://cdn1.suno.ai/b35f0ffd-f791-4061-8cf5-95900694c6ba.mp3" },

    { category: "A",  label: "arabic acid house", url: "https://cdn1.suno.ai/0d97f46e-0028-4701-b3b3-edd5056078c0.mp3" },

    { category: "A",  label: "arabic african folk", url: "https://cdn1.suno.ai/d77e6074-b537-43f3-afe1-83c23072f4c4.mp3" },

    { category: "A",  label: "arabic afrobeat", url: "https://cdn1.suno.ai/e5096793-ea74-4805-86ed-8f0bc0dfc902.mp3" },

    { category: "A",  label: "arabic ambient techno", url: "https://cdn1.suno.ai/0e7f344d-a3c2-4b83-9719-18a18fc53a4c.mp3" },

    { category: "A",  label: "arabic classical", url: "https://cdn1.suno.ai/6b1226b5-1ecb-441b-8e6d-7fb52809f470.mp3" },

    { category: "A",  label: "arabic egyptian", url: "https://cdn1.suno.ai/9d9899d5-7d8b-4c04-9f85-29df9cba9966.mp3" },

    { category: "A",  label: "arabic mariachi", url: "https://cdn1.suno.ai/0ddd6b13-8f4f-4535-984b-745b1e7aa693.mp3" },

    { category: "A",  label: "arabic pop", url: "https://cdn1.suno.ai/5ec855e4-feb3-45a2-96b1-c43b517c11c0.mp3" },

    { category: "A",  label: "arabic reggae", url: "https://cdn1.suno.ai/06221f5c-c70d-45c5-9e77-6c193e526e30.mp3" },

    { category: "A",  label: "avant-garde jazz", url: "https://cdn1.suno.ai/663bca80-9afb-4efc-8c5d-823b8585912f.mp3" },

    { category: "A",  label: "avant-garde jazz disco", url: "https://cdn1.suno.ai/6ac95be7-7357-496a-9bdb-48414573b771.mp3" },

    { category: "A",  label: "avant-garde jazz griot", url: "https://cdn1.suno.ai/0187d8a3-c757-49d1-a154-6501c19a3329.mp3" },

    { category: "A",  label: "avant-garde jazz illbient", url: "https://cdn1.suno.ai/3381c492-22b7-4ba4-a982-5f1ec3856e43.mp3" },

    { category: "A",  label: "avant-garde jazz rap", url: "https://cdn1.suno.ai/5ef55335-941f-43e1-b91d-f2d1dd0bc82b.mp3" },





    { category: "B",  label: "bachata", url: "https://cdn1.suno.ai/a6bab092-25e6-40b5-9af3-78637a154a22.mp3" },

    { category: "B",  label: "balkan brass band classical", url: "https://cdn1.suno.ai/0775b150-9395-4bcd-8b4f-fee76795bd37.mp3" },

    { category: "B",  label: "balkan brass band raga", url: "https://cdn1.suno.ai/155009eb-d17e-4cb0-97d1-1216a771661b.mp3" },

    { category: "B",  label: "barbershop balkan brass band", url: "https://cdn1.suno.ai/76863cd2-98c8-4bb5-982c-a6b672fe0518.mp3" },

    { category: "B",  label: "barbershop breakbeat", url: "https://cdn1.suno.ai/fd343167-4a98-4abc-84dd-3cef45d3af79.mp3" },

    { category: "B",  label: "bedroom pop", url: "https://cdn1.suno.ai/2361f433-25aa-473d-82c6-621ae8e1782a.mp3" },

    { category: "B",  label: "bedroom pop new jack swing", url: "https://cdn1.suno.ai/5dbf6543-ec40-45cb-ab6d-1ee656bdb0ca.mp3" },

    { category: "B",  label: "bedroom pop samba", url: "https://cdn1.suno.ai/707997d9-11f1-4d53-b5fd-79fc2b6660f1.mp3" },

    { category: "B",  label: "bedroom pop ska", url: "https://cdn1.suno.ai/bdf05c08-3651-4924-8901-da4c7ec1d35e.mp3" },

    { category: "B",  label: "bengali afroswing", url: "https://cdn1.suno.ai/c2bec826-8b84-4110-953c-f7e6725f3ec0.mp3" },



    { category: "B",  label: "bengali acoustic chicago blues", url: "https://cdn1.suno.ai/a0b152d6-a785-4346-8cf1-ed8be7cab0b0.mp3" },

    { category: "B",  label: "bengali american primitivism", url: "https://cdn1.suno.ai/6bd1e2b7-1bad-43f0-a1cd-8410086c735e.mp3" },

    { category: "B",  label: "bengali barbershop", url: "https://cdn1.suno.ai/669ae248-682d-4854-b660-d1eaa3490e6d.mp3" },

    { category: "B",  label: "bengali cape verdean", url: "https://cdn1.suno.ai/0d2e9040-206f-47db-b71b-a86977009ddb.mp3" },

    { category: "B",  label: "bengali drill", url: "https://cdn1.suno.ai/61b0a101-1fed-40ce-9403-e804070d25cf.mp3" },

    { category: "B",  label: "bengali egyptian", url: "https://cdn1.suno.ai/bce6b8a1-3775-4b2a-96ac-935a8ec6e5f6.mp3" },

    { category: "B",  label: "bengali electropop", url: "https://cdn1.suno.ai/1c9a2d99-8374-49bc-9f76-bec1b231f8a0.mp3" },

    { category: "B",  label: "bengali grunge", url: "https://cdn1.suno.ai/38eeed21-7480-45cb-a0d6-0d7b849f9b9b.mp3" },

    { category: "B",  label: "bengali math rock", url: "https://cdn1.suno.ai/b98baf27-eab8-479e-8836-877efc145e26.mp3" },

    { category: "B",  label: "bengali psybient", url: "https://cdn1.suno.ai/6eba89cb-030d-4344-bcd6-d5b3fceecaaa.mp3" },

    { category: "B",  label: "bengali surf", url: "https://cdn1.suno.ai/8aa1ccea-73df-45c9-bcad-cdc1e98cee07.mp3" },

    { category: "B",  label: "bengali surf rock", url: "https://cdn1.suno.ai/1064107c-8614-47f5-9539-757ccad18163.mp3" },

    { category: "B",  label: "bengali swamp blues", url: "https://cdn1.suno.ai/69d0b7de-3978-46cd-b0dd-9f913533ad26.mp3" },

    { category: "B",  label: "big band alt-country", url: "https://cdn1.suno.ai/f4b812bc-6a54-46e2-bef7-156e0a6e16a2.mp3" },

    { category: "B",  label: "big band ambient house", url: "https://cdn1.suno.ai/822dfd9a-00f9-458e-b609-cda66770a37c.mp3" },

    { category: "B",  label: "big band boogie", url: "https://cdn1.suno.ai/adbe73b1-6733-4655-86d9-543dbaa502ac.mp3" },

    { category: "B",  label: "big band cumbia", url: "https://cdn1.suno.ai/c0c8f676-65d0-46ad-b429-a3967e3236aa.mp3" },

    { category: "B",  label: "big band grunge", url: "https://cdn1.suno.ai/7bed26bd-3e02-4490-b092-38ac6e19c2be.mp3" },

    { category: "B",  label: "big band new jack swing", url: "https://cdn1.suno.ai/3115b0ad-50ad-4a7b-b04e-f264ae363eec.mp3" },

    { category: "B",  label: "bluegrass", url: "https://cdn1.suno.ai/018f0051-466b-4d30-b737-f2bce206b95a.mp3" },

    { category: "B",  label: "bluegrass bubblegum bass", url: "https://cdn1.suno.ai/a11656f2-daa7-4233-8b0c-7a55134e5e34.mp3" },

    { category: "B",  label: "bluegrass k-pop", url: "https://cdn1.suno.ai/4b61aaa2-fb64-4cb2-ab03-4c02ecbad8bb.mp3" },

    { category: "B",  label: "bluegrass punk", url: "https://cdn1.suno.ai/ca47df8d-c31c-48ae-8a31-6a92334468b7.mp3" },

    { category: "B",  label: "bluegrass rock", url: "https://cdn1.suno.ai/06da9892-c83f-4b91-aa4e-c0433718356f.mp3" },

    { category: "B",  label: "blues afro house", url: "https://cdn1.suno.ai/488cb900-0447-455f-8967-d733448b3168.mp3" },

    { category: "B",  label: "blues folk", url: "https://cdn1.suno.ai/3a396959-3ba4-4d5d-a8f0-a2e6492d1bc4.mp3" },

    { category: "B",  label: "blues rock", url: "https://cdn1.suno.ai/792c4f16-97b1-4857-a434-1afbb026d53f.mp3" },

    { category: "B",  label: "blues rock afropiano", url: "https://cdn1.suno.ai/2ce1071a-e4a8-43e4-a1c3-0f104d755829.mp3" },

    { category: "B",  label: "blues rock american primitivism", url: "https://cdn1.suno.ai/91875cf4-a8ac-43f1-9f22-b93e0ecda095.mp3" },

    { category: "B",  label: "boogie caribbean", url: "https://cdn1.suno.ai/e64d534c-b1e1-46c1-9471-39e00484f3ff.mp3" },

    { category: "B",  label: "boogie celtic", url: "https://cdn1.suno.ai/ee7a5c49-4e43-43e9-877c-84e9c670a574.mp3" },

    { category: "B",  label: "boom bap celtic", url: "https://cdn1.suno.ai/9eb9b9a1-a6f5-4796-9f7b-85e893ffae43.mp3" },

    { category: "B",  label: "boom bap p-funk", url: "https://cdn1.suno.ai/997e0359-8457-4c24-9b6a-42ba76a7ee0d.mp3" },

    { category: "B",  label: "bossa nova merengue", url: "https://cdn1.suno.ai/c3cbd4f0-45ce-4cd6-a1b7-dba4537213b6.mp3" },

    { category: "B",  label: "breakbeat balkan brass band", url: "https://cdn1.suno.ai/6dfd0632-ebec-4a05-a0ea-2153d0028d75.mp3" },

    { category: "B",  label: "breakbeat coptic", url: "https://cdn1.suno.ai/5b105cdd-dbd7-411b-aff4-a569d3380e22.mp3" },

    { category: "B",  label: "breakbeatwave", url: "https://cdn1.suno.ai/c85c4de5-b3d9-4eea-aff0-8f1bbe20ed30.mp3" },

    { category: "B",  label: "breakstep samba", url: "https://cdn1.suno.ai/e71ac3d0-8af4-4a12-ae43-709f230a2bb1.mp3" },

    { category: "B",  label: "breakstep synthwave", url: "https://cdn1.suno.ai/7f2a5d52-b8da-494d-b98a-809dc6be90b5.mp3" },

    { category: "B",  label: "bubblegum bass", url: "https://cdn1.suno.ai/c20d86aa-3936-4f0d-86c4-6e52f802aaa6.mp3" },

    { category: "B",  label: "bubblegum bass grime", url: "https://cdn1.suno.ai/854689aa-4894-454a-9f77-194f1b0771ee.mp3" },

    { category: "B",  label: "bubblegum bass symphonic metal", url: "https://cdn1.suno.ai/6fd235bf-5ef5-477e-8872-925aa9fb5c81.mp3" },

    { category: "B",  label: "bubblegum dance", url: "https://cdn1.suno.ai/3e8492dd-3ee4-4ecd-92b5-453f44b09e17.mp3" },

    { category: "B",  label: "bubblegum dance chanson", url: "https://cdn1.suno.ai/82348836-1d02-438b-af17-438ab47062b5.mp3" },


    
    { category: "C",  label: "cabaret americana", url: "https://cdn1.suno.ai/2f0669c7-4f76-4738-8657-33cd27faf107.mp3" },

    { category: "C",  label: "cabaret rock", url: "https://cdn1.suno.ai/5ab90657-7b93-496e-887f-b41b374a90f7.mp3" },

    { category: "C",  label: "cajun acid rock", url: "https://cdn1.suno.ai/64c77ce8-8913-41e9-90c3-ccdcc36881e3.mp3" },

    { category: "C",  label: "cajun afrikaner folk", url: "https://cdn1.suno.ai/149013d1-56bd-4c20-b7fd-1e0721581fd4.mp3" },

    { category: "C",  label: "cajun griot", url: "https://cdn1.suno.ai/c5637ef5-c9d6-44ea-919b-1aa35bf1c18c.mp3" },

    { category: "C",  label: "cajun new wave", url: "https://cdn1.suno.ai/41486951-06e8-481d-8c88-4bc63a6eab7a.mp3" },

    { category: "C",  label: "cajun synthpop", url: "https://cdn1.suno.ai/eee6884e-c3af-4ace-a585-910c788e61aa.mp3" },

    { category: "C",  label: "calypso afroswing", url: "https://cdn1.suno.ai/20c8f316-882f-466b-b61f-d7ffd5d346f7.mp3" },

    { category: "C",  label: "calypso bachata", url: "https://cdn1.suno.ai/c3dc6aef-4aee-4d87-976f-021609d99f02.mp3" },

    { category: "C",  label: "calypso opera", url: "https://cdn1.suno.ai/0557b07d-29c0-4254-bc1f-e50493fa624e.mp3" },

    { category: "C",  label: "calypso surf", url: "https://cdn1.suno.ai/ee461d27-c76c-4ada-9534-66fa004d314d.mp3" },

    { category: "C",  label: "cape verdean", url: "https://cdn1.suno.ai/a59da58c-06c2-4176-b6af-e967297dac59.mp3" },


    { category: "C",  label: "cape verdean acoustic rock", url: "https://cdn1.suno.ai/ee11d932-caed-41ce-8a53-41ac1f01668a.mp3" },

    { category: "C",  label: "caribbean", url: "https://cdn1.suno.ai/845ddad1-c35b-4fb3-815c-7a71d118b129.mp3" },

    { category: "C",  label: "carnatic", url: "https://cdn1.suno.ai/dc9c6940-3529-4698-b109-aada3b9c3724.mp3" },

    { category: "C",  label: "carnatic acid trance", url: "https://cdn1.suno.ai/0bcfd856-4558-424c-852c-906d3e9e968a.mp3" },

    { category: "C",  label: "carnatic glitch hop", url: "https://cdn1.suno.ai/a46ac74f-458a-4e95-be1e-e53bae6b8c04.mp3" },

    { category: "C",  label: "celtic", url: "https://cdn1.suno.ai/eaacbb75-25a9-4a43-8cd1-082a4f49355f.mp3" },

    { category: "C",  label: "celtic cloud rap", url: "https://cdn1.suno.ai/5f2c93df-9085-4854-bc7d-69814024695c.mp3" },

    { category: "C",  label: "celtic tango", url: "https://cdn1.suno.ai/7efabde7-6f6e-4a31-a426-53106343faa2.mp3" },

    { category: "C",  label: "chanson", url: "https://cdn1.suno.ai/5fa44776-7676-4210-9cc2-3830e695b2a8.mp3" },

    { category: "C",  label: "chanson alt-pop", url: "https://cdn1.suno.ai/2971cad5-afcf-4ac5-b5da-04205d3aa75d.mp3" },

    { category: "C",  label: "chanson funk", url: "https://cdn1.suno.ai/c01e7ab1-823a-4243-86a0-d3a3449dc7c4.mp3" },

    { category: "C",  label: "chanson soul", url: "https://cdn1.suno.ai/58d827ce-0cf1-47a5-9655-5337aaa2f638.mp3" },

    { category: "C",  label: "chillstep", url: "https://cdn1.suno.ai/c5deaabe-ffe9-4952-a9ac-079b8929235f.mp3" },

    { category: "C",  label: "chillstep chillwave", url: "https://cdn1.suno.ai/11407711-1aab-46e0-8f67-1836de1486ad.mp3" },

    { category: "C",  label: "chillsynth", url: "https://cdn1.suno.ai/cf3c86f7-f240-43bb-afa7-f7a86b0af37e.mp3" },

    { category: "C",  label: "chillsynth mento", url: "https://cdn1.suno.ai/da39c8d4-ad1f-4ed4-ac4c-9c216e2f5b0a.mp3" },

    { category: "C",  label: "chillwave bubblegum bass", url: "https://cdn1.suno.ai/e6710e2a-8dbb-4d4a-b58f-1cfd88d6ec9e.mp3" },

    { category: "C",  label: "chillwave caribbean", url: "https://cdn1.suno.ai/c75d41a9-5bf7-4975-b96e-47acfa324f81.mp3" },

    { category: "C",  label: "chillwave egyptian", url: "https://cdn1.suno.ai/9ed623e3-02ee-4215-85ec-d644e5565184.mp3" },

    { category: "C",  label: "chillwave samba", url: "https://cdn1.suno.ai/78f57c17-328c-45c3-9754-8e60eb2eedfa.mp3" },

    { category: "C",  label: "chillwave swing", url: "https://cdn1.suno.ai/f0b81f7b-0172-4129-9d92-645032883cc5.mp3" },

    { category: "C",  label: "chillwavewave", url: "https://cdn1.suno.ai/de5812b3-2d83-4164-a6e7-5275c8cabd8a.mp3" },

    { category: "C",  label: "choral 16-bit", url: "https://cdn1.suno.ai/1b6cafb4-ccc0-496e-b686-ac202a53e132.mp3" },

    { category: "C",  label: "choral afro-jazz", url: "https://cdn1.suno.ai/173dadd4-a581-42d0-9147-b79196d708f5.mp3" },

    { category: "C",  label: "choral alt-country", url: "https://cdn1.suno.ai/e120af21-c960-4670-bb2d-c5a7970b5c4d.mp3" },

    { category: "C",  label: "choral ambient noise wall", url: "https://cdn1.suno.ai/40994406-acd0-4497-8edf-6d7da192379c.mp3" },

    { category: "C",  label: "choral ambient techno", url: "https://cdn1.suno.ai/94889837-00ce-4382-9095-765730ab0cd3.mp3" },

    { category: "C",  label: "choral bedroom pop", url: "https://cdn1.suno.ai/408dcab7-6a87-42dc-90a7-4b628948cdd3.mp3" },

    { category: "C",  label: "choral big band", url: "https://cdn1.suno.ai/5ac3788f-a66e-430f-aa6c-d479a4204490.mp3" },

    { category: "C",  label: "choral celtic", url: "https://cdn1.suno.ai/a5472e36-b177-42e2-b67a-d2876cce9120.mp3" },

    { category: "C",  label: "choral chanson", url: "https://cdn1.suno.ai/58019450-9761-493b-8c74-549688cc2871.mp3" },

    { category: "C",  label: "choral chillsynth", url: "https://cdn1.suno.ai/638b7ef2-8a6a-4832-954e-8faaa54fb952.mp3" },

    { category: "C",  label: "choral country", url: "https://cdn1.suno.ai/bb0b85e0-b71a-4ae7-a589-294d6959c216.mp3" },

    { category: "C",  label: "choral drill and bass", url: "https://cdn1.suno.ai/ac260f61-eea4-4dd7-af81-f4a78b2a2b6d.mp3" },

    { category: "C",  label: "choral folk", url: "https://cdn1.suno.ai/0fc9affe-3bb6-4d88-a8e4-fe9d19073c22.mp3" },

    { category: "C",  label: "choral reggae", url: "https://cdn1.suno.ai/ff60b1cb-d8df-4bf5-b241-a8569c6a0630.mp3" },

    { category: "C",  label: "city pop breakbeat", url: "https://cdn1.suno.ai/4885957e-f784-492b-9da4-cd544421eec8.mp3" },

    { category: "C",  label: "city pop classical", url: "https://cdn1.suno.ai/2ddb422e-9578-4429-8465-1727c4885d9d.mp3" },

    { category: "C",  label: "city pop psybient", url: "https://cdn1.suno.ai/11f54fd5-071b-4e27-84ab-23c63ca930b5.mp3" },

    { category: "C",  label: "city pop symphonic metal", url: "https://cdn1.suno.ai/98d4e657-8430-46da-8332-374663110043.mp3" },

    { category: "C",  label: "classical", url: "https://cdn1.suno.ai/6bb15e9b-1c6c-484e-b015-cbb64ed076dc.mp3" },

    { category: "C",  label: "classical boom bap", url: "https://cdn1.suno.ai/fffa4503-1bed-438f-96b4-e3b57e0561d2.mp3" },

    { category: "C",  label: "classical caribbean", url: "https://cdn1.suno.ai/d0b684a4-6ddd-4d91-908f-979aab7c1c58.mp3" },

    { category: "C",  label: "classical cumbia", url: "https://cdn1.suno.ai/473533fe-907c-4168-a1ef-fd40c4a5ac15.mp3" },

    { category: "C",  label: "classical dirty south", url: "https://cdn1.suno.ai/07023096-5b12-456a-a927-f8af29a30a56.mp3" },

    { category: "C",  label: "classical folk", url: "https://cdn1.suno.ai/8ca25126-ff81-41f7-8d27-73ad35ad0f69.mp3" },

    { category: "C",  label: "classical grime", url: "https://cdn1.suno.ai/701627e0-74f1-4d9c-b2c9-b07a9e189e26.mp3" },

    { category: "C",  label: "classical surf", url: "https://cdn1.suno.ai/c2174de9-b747-4cb2-a786-da6eb28dfdd8.mp3" },

    { category: "C",  label: "classicalwave", url: "https://cdn1.suno.ai/7f3de428-a3db-4392-aa65-397636c97962.mp3" },

    { category: "C",  label: "cloud rap", url: "https://cdn1.suno.ai/52b8e447-4b88-4e11-8fac-8b8779f9496d.mp3" },

    { category: "C",  label: "cloud rap slushwave", url: "https://cdn1.suno.ai/d779a0b9-0142-4617-a214-d4379cc3b6b9.mp3" },

    { category: "C",  label: "cloud rap symphonic metal", url: "https://cdn1.suno.ai/abf21eae-ac63-4e41-882c-6f9200caf72d.mp3" },

    { category: "C",  label: "coptic", url: "https://cdn1.suno.ai/91e5ad59-7a2d-4467-9661-a03673199161.mp3" },

    { category: "C",  label: "coptic afro-rock", url: "https://cdn1.suno.ai/d0b5d683-87a7-413d-821b-ec4cfa347171.mp3" },

    { category: "C",  label: "coptic flamenco", url: "https://cdn1.suno.ai/faae960d-f7f9-41b2-842d-9e642f915226.mp3" },

    { category: "C",  label: "coptic grunge", url: "https://cdn1.suno.ai/0d9eb7e3-6a68-41cb-a179-c162a6ead6d4.mp3" },

    { category: "C",  label: "country afro-cuban jazz", url: "https://cdn1.suno.ai/2f373cca-53b1-485c-830e-d6e22c621d6e.mp3" },

    { category: "C",  label: "country dancehall", url: "https://cdn1.suno.ai/8964e3a9-1131-4428-b7b4-12867d6d4ae4.mp3" },

    { category: "C",  label: "country jazz", url: "https://cdn1.suno.ai/04a24925-256b-470f-baf5-19f8f8e0f795.mp3" },

    { category: "C",  label: "crunk calypso", url: "https://cdn1.suno.ai/bc094e55-367b-4fac-a2e4-4eb01655d29a.mp3" },

    { category: "C",  label: "crunk goa trance", url: "https://cdn1.suno.ai/281674f9-e522-4e0c-939c-92472a50e689.mp3" },

    { category: "C",  label: "crunk punk", url: "https://cdn1.suno.ai/9d6e412e-994c-4621-bed9-7cf434ee9cd2.mp3" },

    { category: "C",  label: "crunk swamp blues", url: "https://cdn1.suno.ai/e86e02c7-6be8-43be-98a5-6ebf18901aa1.mp3" },

    { category: "C",  label: "cumbia", url: "https://cdn1.suno.ai/729e9335-8a3f-43f7-9f4a-f89d638fc528.mp3" },


    { category: "C",  label: "cumbia acoustic blues", url: "https://cdn1.suno.ai/a084cc5d-44ca-4e4a-9495-39d51ade4d9c.mp3" },

    { category: "C",  label: "cumbia metal", url: "https://cdn1.suno.ai/1d3a4232-4563-4fdc-ba83-7531999f6b6e.mp3" },



    
    { category: "D",  label: "dakar afro-cuban jazz", url: "https://cdn1.suno.ai/1cc1da66-1b48-4277-a658-28a77e13059d.mp3" },

    { category: "D",  label: "dakar afrobeat", url: "https://cdn1.suno.ai/f0c95493-58bf-4c43-bbd8-24ef15fb653f.mp3" },

    { category: "D",  label: "dakar ambient dub", url: "https://cdn1.suno.ai/b581c0ba-09b1-4aba-983c-bd38a97987f7.mp3" },

    { category: "D",  label: "dakar boom bap", url: "https://cdn1.suno.ai/c07c29dd-d760-42f3-8b42-95a8b9f8602c.mp3" },

    { category: "D",  label: "dakar drumstep", url: "https://cdn1.suno.ai/501353ed-4db0-4a35-aa5e-136af7b65d47.mp3" },

    { category: "D",  label: "dakar flamenco", url: "https://cdn1.suno.ai/4438aada-0659-45ea-afdc-24ad03ff1f9b.mp3" },

    { category: "D",  label: "dakar future bass", url: "https://cdn1.suno.ai/c83ad17d-e25e-4db6-93b0-c94771476014.mp3" },

    { category: "D",  label: "dakar gospel", url: "https://cdn1.suno.ai/fce7cd00-7446-48c2-ab76-a5cd9643a4ca.mp3" },

    { category: "D",  label: "dakar house", url: "https://cdn1.suno.ai/5e041d51-9025-4733-9cae-fb64cd52a622.mp3" },

    { category: "D",  label: "dakar j-pop", url: "https://cdn1.suno.ai/c8e404d4-1a46-4e04-be4e-ab920f11315a.mp3" },

    { category: "D",  label: "dakar math rock", url: "https://cdn1.suno.ai/2ce27bd5-0c9a-48b1-a6a8-9dec523b847a.mp3" },

    { category: "D",  label: "dakar new wave", url: "https://cdn1.suno.ai/a406f68e-87d4-49ed-ae63-4285b256ae33.mp3" },

    { category: "D",  label: "dakar raga", url: "https://cdn1.suno.ai/27f30972-07fa-4023-a06f-2ec2f646fe8b.mp3" },

    { category: "D",  label: "dance", url: "https://cdn1.suno.ai/b9e04338-e3b9-491a-8305-4621c86e3587.mp3" },

    { category: "D",  label: "dance drill", url: "https://cdn1.suno.ai/59be6dd8-bebc-4ac9-a40d-1445874616f6.mp3" },

    { category: "D",  label: "dance illbient", url: "https://cdn1.suno.ai/8ad56740-1d8b-443b-8c84-858998c41be1.mp3" },

    { category: "D",  label: "dance southern rock", url: "https://cdn1.suno.ai/9c830b39-34f5-438c-9e7a-19aa63a19e84.mp3" },

    { category: "D",  label: "dancecore", url: "https://cdn1.suno.ai/5e40ed8e-9ed0-4129-acee-bf233e55eca3.mp3" },

    { category: "D",  label: "dancehall", url: "https://cdn1.suno.ai/2d83a787-d440-4a71-b6fc-18be69a1526b.mp3" },


    { category: "D",  label: "dancehall acoustic texas blues", url: "https://cdn1.suno.ai/4197cbba-71e5-4ea9-a612-cef5bc5f1040.mp3" },

    { category: "D",  label: "dancehall city pop", url: "https://cdn1.suno.ai/780a8ebe-19e7-4c45-bd99-6f740f9c2938.mp3" },

    { category: "D",  label: "dancehall country", url: "https://cdn1.suno.ai/4c75e375-57a8-4d3c-8f12-7a295794da40.mp3" },

    { category: "D",  label: "dancehall flamenco", url: "https://cdn1.suno.ai/e2b5067e-e343-4c0a-bdda-6493285301f9.mp3" },

    { category: "D",  label: "dancehall new wave", url: "https://cdn1.suno.ai/93fa1cc7-cfeb-4701-99c0-dee72d37cbcd.mp3" },

    { category: "D",  label: "dancehall synthwave", url: "https://cdn1.suno.ai/43503f44-1d7d-4392-85e6-52811e0dc9f2.mp3" },

    { category: "D",  label: "dancepop", url: "https://cdn1.suno.ai/ae2c2b89-3f3e-4ae7-adbd-7916aeade0f0.mp3" },

    { category: "D",  label: "dancepop breakbeat", url: "https://cdn1.suno.ai/b4b26541-7faa-4712-af8e-cc7fb9f3be48.mp3" },

    { category: "D",  label: "dark acid house", url: "https://cdn1.suno.ai/dae7e2c0-4960-4ce7-88c4-5b603d05a3e5.mp3" },

    { category: "D",  label: "dark acid jazz", url: "https://cdn1.suno.ai/8b1ef904-3109-4772-9fac-c210047f15d1.mp3" },

    { category: "D",  label: "dark alt-pop", url: "https://cdn1.suno.ai/5d09be4b-7146-42c3-864d-f0a7338f3469.mp3" },

    { category: "D",  label: "dark alternative rock", url: "https://cdn1.suno.ai/7357825f-3c13-4097-a1f8-f1032865b6f0.mp3" },

    { category: "D",  label: "dark blues", url: "https://cdn1.suno.ai/17ff6b48-f0ca-4f2e-ae8e-fc9d99ce988e.mp3" },

    { category: "D",  label: "dark chillstep", url: "https://cdn1.suno.ai/814784d3-701d-462d-8164-b1faa914eb67.mp3" },

    { category: "D",  label: "dark coptic", url: "https://cdn1.suno.ai/5a4342af-8285-45d5-a5d4-2fd7729f5d3c.mp3" },

    { category: "D",  label: "dark dance", url: "https://cdn1.suno.ai/7e9b9cc8-068f-455f-ba12-d2affa0f07da.mp3" },

    { category: "D",  label: "dark drum and bass", url: "https://cdn1.suno.ai/629472cc-4962-4dd1-af3f-ca040d4d9efc.mp3" },

    { category: "D",  label: "dark electropop", url: "https://cdn1.suno.ai/e64031e0-70d8-4356-8968-8cc0eac548b8.mp3" },

    { category: "D",  label: "dark goa trance", url: "https://cdn1.suno.ai/94ef9440-4757-4ed6-8595-59f6c5b8adf8.mp3" },

    { category: "D",  label: "dark jazz", url: "https://cdn1.suno.ai/3e788ff9-ea3e-40e4-be30-9990f7e5a4be.mp3" },

    { category: "D",  label: "dark merengue", url: "https://cdn1.suno.ai/e157b4d4-15a8-42ff-aacd-a880cc72251a.mp3" },

    { category: "D",  label: "dark reggaeton", url: "https://cdn1.suno.ai/f35d8a91-16e4-43a7-a9c3-a8900c9c2854.mp3" },

    { category: "D",  label: "dark salsa", url: "https://cdn1.suno.ai/8ef97831-7102-497b-a5b7-8f3aa89c59c4.mp3" },

    { category: "D",  label: "delta blues house", url: "https://cdn1.suno.ai/9548adf6-3a8c-4a52-a216-627099241e8e.mp3" },

    { category: "D",  label: "dembow", url: "https://cdn1.suno.ai/a1b0d96b-e1f4-4539-8b4c-a2adb9d78677.mp3" },

    { category: "D",  label: "dembow balkan brass band", url: "https://cdn1.suno.ai/b53ae54f-9166-48b3-9a49-2593e3f8c9c9.mp3" },

    { category: "D",  label: "dembow punk", url: "https://cdn1.suno.ai/8f52799f-cc16-4038-b743-2faecf00ae9f.mp3" },

    { category: "D",  label: "dirty south", url: "https://cdn1.suno.ai/a32f90c1-3e85-4d9d-bb61-da8a1c3e812e.mp3" },

    { category: "D",  label: "dirty south balkan brass band", url: "https://cdn1.suno.ai/3cea5bf5-edd9-45f8-8755-e5e125eedb5f.mp3" },

    { category: "D",  label: "dirty south boom bap", url: "https://cdn1.suno.ai/2440b880-6ec5-44d4-9787-57bc2c2d6bce.mp3" },

    { category: "D",  label: "disco alternative r&b", url: "https://cdn1.suno.ai/f024cbf8-bf5e-4e8b-8212-22b96fe1a274.mp3" },

    { category: "D",  label: "disco cloud rap", url: "https://cdn1.suno.ai/96ed80c0-2132-4a4e-ae28-30a1cd64f7f2.mp3" },

    { category: "D",  label: "doo-wop pop", url: "https://cdn1.suno.ai/4781a786-34c2-4da5-9066-4b12c4c4a127.mp3" },

    { category: "D",  label: "dream pop appalachian folk", url: "https://cdn1.suno.ai/aa4c464e-e502-4425-8d0a-6e039d9802a2.mp3" },


    { category: "D",  label: "dreamy acoustic rock", url: "https://cdn1.suno.ai/fc049eda-c970-44dc-8e7f-9cd524bfda32.mp3" },

    { category: "D",  label: "dream pop g-funk", url: "https://cdn1.suno.ai/5df166b6-88d1-45ca-96e9-6e062a136335.mp3" },

    { category: "D",  label: "dreamy acid house", url: "https://cdn1.suno.ai/f643e847-3512-43ba-ae7c-87f3ec4be885.mp3" },

    { category: "D",  label: "dreamy boom bap", url: "https://cdn1.suno.ai/6d9d0a8c-e854-42a5-87f1-fc630eb61c11.mp3" },

    { category: "D",  label: "dreamy bubblegum dance", url: "https://cdn1.suno.ai/d402a9c8-1d95-43ad-8511-9fc5f3ad5c27.mp3" },

    { category: "D",  label: "dreamy chillwave", url: "https://cdn1.suno.ai/d3806e56-0e48-4724-ad8f-1fb65307b82c.mp3" },

    { category: "D",  label: "dreamy drum and bass", url: "https://cdn1.suno.ai/fa5e40b4-4e2b-4031-8ef0-369ad1d98f09.mp3" },

    { category: "D",  label: "dreamy fife and drum blues", url: "https://cdn1.suno.ai/a0021a2c-3cf1-4ce1-af1d-9ad5aeaab838.mp3" },

    { category: "D",  label: "dreamy pacific reggae", url: "https://cdn1.suno.ai/4e00b4e9-f2be-4bd5-8fea-50f817579c5a.mp3" },

    { category: "D",  label: "dreamy shoegaze", url: "https://cdn1.suno.ai/b68dbaa0-5fe8-4f76-b1b3-3439c35bbf90.mp3" },

    { category: "D",  label: "dreamy swing", url: "https://cdn1.suno.ai/d23550cc-fcf6-4868-8204-6f9616e09fd7.mp3" },

    { category: "D",  label: "dreamy trance", url: "https://cdn1.suno.ai/7660b111-81a9-44d5-b2dd-cd28bb134e8c.mp3" },

    { category: "D",  label: "drill and bass balkan brass band", url: "https://cdn1.suno.ai/fc272376-eda2-4994-840a-5deda89f3814.mp3" },

    { category: "D",  label: "drill and bass gnawa", url: "https://cdn1.suno.ai/e3827ab2-c030-4794-b246-f7bcf64fe198.mp3" },

    { category: "D",  label: "drill breakbeat", url: "https://cdn1.suno.ai/6e036719-59ae-461b-aeeb-655bc5ec2219.mp3" },

    { category: "D",  label: "drill bubblegum dance", url: "https://cdn1.suno.ai/805742ee-e682-4a5a-a60b-c07f3ef8b36d.mp3" },

    { category: "D",  label: "drill chillwave", url: "https://cdn1.suno.ai/f55decfc-7dd3-4fb8-80e1-e133844e75d1.mp3" },

    { category: "D",  label: "drill raga", url: "https://cdn1.suno.ai/b2bf79a8-82e7-4b49-a638-3caf37ebe950.mp3" },

    { category: "D",  label: "drill sertanejo", url: "https://cdn1.suno.ai/604e0a6d-8448-43e6-aa34-a37cbb2072af.mp3" },


    { category: "D",  label: "drum and bass acoustic rock", url: "https://cdn1.suno.ai/0d2c1f21-f9cd-4ee6-8012-cce3bea9658c.mp3" },

    { category: "D",  label: "drum and bass goa trance", url: "https://cdn1.suno.ai/3fabca39-295e-4c4c-b78b-d13c29e323d3.mp3" },

    { category: "D",  label: "drum and bass swing", url: "https://cdn1.suno.ai/04a48c64-23bf-4b3f-8386-507d6631f51c.mp3" },

    { category: "D",  label: "drumstep chillsynth", url: "https://cdn1.suno.ai/4d8be4fa-04e2-4db7-8a0c-afba32006935.mp3" },

    { category: "D",  label: "drumstep soul", url: "https://cdn1.suno.ai/4d14a3c8-d6e4-44ef-a50c-832ae780bc94.mp3" },

    { category: "D",  label: "dubstep", url: "https://cdn1.suno.ai/8ecbc526-d6ab-4d66-9dc6-ed544aca704e.mp3" },

    { category: "D",  label: "dubstep kawaii future bass", url: "https://cdn1.suno.ai/bfdf9757-cd77-4f2e-9676-b41598292ccb.mp3" },

    { category: "D",  label: "dubstep rock", url: "https://cdn1.suno.ai/065463a2-a74a-41c6-8e69-d72fcbf10a20.mp3" },

    { category: "D",  label: "dubstep samba", url: "https://cdn1.suno.ai/decee489-4f4c-4529-bc49-ce124a5cb0fd.mp3" },

    { category: "D",  label: "dubstepcore", url: "https://cdn1.suno.ai/9eb8372a-6a9a-4c5b-95ca-3d93d106f6fe.mp3" },


    
    { category: "E",  label: "edm", url: "https://cdn1.suno.ai/f368c423-d7cc-47f4-8d85-8a17ed6c1bff.mp3" },

    { category: "E",  label: "edm anti-folk", url: "https://cdn1.suno.ai/fd957d98-ec8a-4d45-b4de-14ab327cc7b5.mp3" },

    { category: "E",  label: "edm breakbeat", url: "https://cdn1.suno.ai/b1124004-4d5e-4a21-8b22-5721a45e4f73.mp3" },

    { category: "E",  label: "edm disco", url: "https://cdn1.suno.ai/5040fa43-b34c-4a6f-af91-a36404fc43a3.mp3" },

    { category: "E",  label: "edm g-funk", url: "https://cdn1.suno.ai/95288e28-eaf9-4f2b-b9d6-d2821ee152c9.mp3" },

    { category: "E",  label: "edm grime", url: "https://cdn1.suno.ai/f2093ff7-e142-44e1-8120-34db8ed54cb5.mp3" },

    { category: "E",  label: "edm jungle", url: "https://cdn1.suno.ai/f08dfceb-b6af-4f14-bf67-a1a70b80fe43.mp3" },

    { category: "E",  label: "edm swamp blues", url: "https://cdn1.suno.ai/097f5775-2f28-4598-9dca-9139e5594e48.mp3" },

    { category: "E",  label: "egyptian", url: "https://cdn1.suno.ai/057343b3-edbd-4eaa-adbc-fc767b561ea4.mp3" },

    { category: "E",  label: "egyptian flamenco", url: "https://cdn1.suno.ai/d49869e4-261b-4252-ab94-878531e00996.mp3" },

    { category: "E",  label: "egyptian swing", url: "https://cdn1.suno.ai/52f5fbff-8c63-46ba-993d-62bc4abd9aee.mp3" },

    { category: "E",  label: "electro-acid house", url: "https://cdn1.suno.ai/5279a938-22ed-4f43-8f03-fa3783193a5a.mp3" },

    { category: "E",  label: "electro-alternative r&b", url: "https://cdn1.suno.ai/bb1a926e-6328-4934-bafb-7780395adf68.mp3" },

    { category: "E",  label: "electro-bossa nova", url: "https://cdn1.suno.ai/97d5273c-9d8c-4989-84d8-fdda3eb090b1.mp3" },

    { category: "E",  label: "electro-chanson", url: "https://cdn1.suno.ai/1864fe38-c5d0-4819-b0ee-7ea4722d3a64.mp3" },

    { category: "E",  label: "electro-classical", url: "https://cdn1.suno.ai/e5e7fe59-12ef-44e8-a357-dec6af01e7b2.mp3" },

    { category: "E",  label: "electro-jungle", url: "https://cdn1.suno.ai/cc57128a-6514-44c2-8c48-3448378f3341.mp3" },

    { category: "E",  label: "electro-new wave", url: "https://cdn1.suno.ai/bb728a1f-4808-4ce6-9a8f-2323619b2937.mp3" },

    { category: "E",  label: "electro-techno", url: "https://cdn1.suno.ai/77a524c1-67e8-44c2-b847-f45dc6bf66a6.mp3" },

    { category: "E",  label: "electronic disco", url: "https://cdn1.suno.ai/22498551-18aa-45e2-bc29-dd054d620123.mp3" },

    { category: "E",  label: "electronic grunge", url: "https://cdn1.suno.ai/07dd3e24-964c-45e8-989c-bad7045b56fc.mp3" },

    { category: "E",  label: "electronic math rock", url: "https://cdn1.suno.ai/df4a4100-f9ed-4f9e-a6f7-67cd70fa9ffa.mp3" },

    { category: "E",  label: "electropop grunge", url: "https://cdn1.suno.ai/cb4ecf87-c537-4e03-8b5e-64455910c599.mp3" },




    
    { category: "F",  label: "fife and drum blues acid breaks", url: "https://cdn1.suno.ai/7d14e2ac-df6f-4425-9599-d42a405389d1.mp3" },

    { category: "F",  label: "fife and drum blues p-funk", url: "https://cdn1.suno.ai/c1de4670-5bd6-49b5-81a1-b3c6014084bb.mp3" },

    { category: "F",  label: "flamenco hip hop", url: "https://cdn1.suno.ai/8ad580e2-db01-40f1-98c5-aa253f622e05.mp3" },

    { category: "F",  label: "french afro-rock", url: "https://cdn1.suno.ai/50a59986-c4c7-40f9-b68b-c8778e887b6f.mp3" },


    { category: "F",  label: "french acoustic chicago blues", url: "https://cdn1.suno.ai/260c17e9-1906-4aa6-877f-da5b99a4b726.mp3" },

    { category: "F",  label: "french big band", url: "https://cdn1.suno.ai/a3b6f9c4-1186-46bb-9fa6-e88dfd3ad1cd.mp3" },

    { category: "F",  label: "french dembow", url: "https://cdn1.suno.ai/ea1fc18c-b7f8-4ff4-a3bf-70e3f234520f.mp3" },

    { category: "F",  label: "french dubstep", url: "https://cdn1.suno.ai/7bd6d4dc-4e7a-4dd4-af9a-f269eee9f0b2.mp3" },

    { category: "F",  label: "french glitch hop", url: "https://cdn1.suno.ai/1577ffb0-a621-4244-b57e-704e05a49aa6.mp3" },

    { category: "F",  label: "french grunge", url: "https://cdn1.suno.ai/912e70bb-19c8-4cae-8b5f-d657aaf9eb5d.mp3" },

    { category: "F",  label: "french psybient", url: "https://cdn1.suno.ai/dc0ade08-5488-4b5c-b2e5-c18ad8cb1568.mp3" },

    { category: "F",  label: "french samba", url: "https://cdn1.suno.ai/6b37f617-5b14-4d25-9e6e-b2dee39a944e.mp3" },

    { category: "F",  label: "french shoegaze", url: "https://cdn1.suno.ai/fdbb02b8-0c24-4cf4-88b0-3e0e08caad89.mp3" },

    { category: "F",  label: "funk bedroom pop", url: "https://cdn1.suno.ai/45a7328c-d8c1-4649-94de-47a78cd8e0c7.mp3" },

    { category: "F",  label: "future chillwave", url: "https://cdn1.suno.ai/7d733dc7-7bea-4a98-8ba0-9139f073577c.mp3" },

    { category: "F",  label: "future egyptian", url: "https://cdn1.suno.ai/e7545974-7172-41fe-9b67-623947a90305.mp3" },


    
    { category: "G",  label: "garage", url: "https://cdn1.suno.ai/c0a547f7-6419-4a28-b043-802ad69cb050.mp3" },

    { category: "G",  label: "garage tango", url: "https://cdn1.suno.ai/e8d3fbb6-c427-47dc-9710-07b239504551.mp3" },


    { category: "G",  label: "glitch hop acoustic texas blues", url: "https://cdn1.suno.ai/239e127b-b72b-4867-adc2-8aa586b1d746.mp3" },


    { category: "G",  label: "glitch hop 2-step", url: "https://cdn1.suno.ai/9bdbbe14-4c6e-4d67-abb1-7adf8f220678.mp3" },

    { category: "G",  label: "glitch hop swing", url: "https://cdn1.suno.ai/3d334974-8883-4645-aed3-797be906194a.mp3" },

    { category: "G",  label: "gnawa", url: "https://cdn1.suno.ai/9f0d50a6-03b3-45bc-80ce-d9ebbf861372.mp3" },

    { category: "G",  label: "gnawa afrobeat", url: "https://cdn1.suno.ai/42ffbd1c-a375-4c1b-9292-18c6c0580dfc.mp3" },

    { category: "G",  label: "gnawa bubblegum bass", url: "https://cdn1.suno.ai/7630bcda-5a32-47df-ae0d-45f706113072.mp3" },

    { category: "G",  label: "gnawa funk", url: "https://cdn1.suno.ai/4d3e14c0-1ba4-4508-94f3-fa062bfc3b64.mp3" },

    { category: "G",  label: "gnawawave", url: "https://cdn1.suno.ai/0ba2a0ca-c05c-496e-97c7-cc038231e3e9.mp3" },

    { category: "G",  label: "goa trance", url: "https://cdn1.suno.ai/b705fc15-51af-4f63-b9de-d443969d3f59.mp3" },

    { category: "G",  label: "goa trance afro-cuban jazz", url: "https://cdn1.suno.ai/f29277d5-eb0b-45d7-9ba7-aecf2f141b49.mp3" },

    { category: "G",  label: "gospel acid breaks", url: "https://cdn1.suno.ai/b1203372-e5dc-48f3-9284-332f468441d7.mp3" },

    { category: "G",  label: "gospel disco", url: "https://cdn1.suno.ai/e328b80f-189c-49be-b06e-c2e5b0e6b1a7.mp3" },

    { category: "G",  label: "gospel dream pop", url: "https://cdn1.suno.ai/54b40008-4eaf-4029-83a1-032f62aa68aa.mp3" },

    { category: "G",  label: "gospel shoegaze", url: "https://cdn1.suno.ai/9349fe05-64e4-4bb1-a6f1-b6e94505a38e.mp3" },

    { category: "G",  label: "gospelwave", url: "https://cdn1.suno.ai/37f8a694-9c86-42b4-92ba-261a33ccfb78.mp3" },

    { category: "G",  label: "grime", url: "https://cdn1.suno.ai/7d84b863-71f8-4ee4-a41f-6c1bb33de600.mp3" },

    { category: "G",  label: "grime 2-step", url: "https://cdn1.suno.ai/bae2bccb-9ece-4318-b0c9-342631210a3c.mp3" },

    { category: "G",  label: "grime avant-garde jazz", url: "https://cdn1.suno.ai/42bd0808-8155-4333-8cda-7187d1470551.mp3" },

    { category: "G",  label: "grime calypso", url: "https://cdn1.suno.ai/358c7e1f-899c-4d34-bc2e-f736e30f0f6e.mp3" },

    { category: "G",  label: "grime norte\u00f1o", url: "https://cdn1.suno.ai/223a9ec9-1f41-43f7-a554-92c792fba6f1.mp3" },

    { category: "G",  label: "grime reggae", url: "https://cdn1.suno.ai/885534e7-45bf-4c0f-a5a0-8100c1879de9.mp3" },

    { category: "G",  label: "grime reggaeton", url: "https://cdn1.suno.ai/4d507fa4-c926-4ddc-97c5-ce3266f6b2d9.mp3" },

    { category: "G",  label: "grime surf rock", url: "https://cdn1.suno.ai/6d71c2e1-ef4d-45a6-adb7-47089ac8d834.mp3" },

    { category: "G",  label: "grime synthpop", url: "https://cdn1.suno.ai/43c9b1f2-57a7-4be5-8a65-72d3da6ea767.mp3" },

    { category: "G",  label: "grime tango", url: "https://cdn1.suno.ai/f3b00280-466f-421a-8371-2316ecbce53e.mp3" },

    { category: "G",  label: "griot", url: "https://cdn1.suno.ai/c4faa260-cce9-400d-8c04-4a52e411bc38.mp3" },

    { category: "G",  label: "griot indie", url: "https://cdn1.suno.ai/fbbc1893-472f-4da6-9479-1faacf91f95c.mp3" },

    { category: "G",  label: "griot reggae", url: "https://cdn1.suno.ai/dbc35943-97c9-4bb8-9623-8c1a64a17045.mp3" },

    { category: "G",  label: "griot shoegaze", url: "https://cdn1.suno.ai/44fe8c52-c473-446a-9ab5-456078ed35be.mp3" },

    { category: "G",  label: "grunge", url: "https://cdn1.suno.ai/e6c550ff-266a-41ce-9b10-08e167aa1b18.mp3" },

    { category: "G",  label: "grunge african folk", url: "https://cdn1.suno.ai/7690fb93-01e3-4e20-96aa-9fc9cbadb957.mp3" },

    { category: "G",  label: "grunge afro-cuban jazz", url: "https://cdn1.suno.ai/be2f294b-92da-4db9-ab92-3017d41bae16.mp3" },

    { category: "G",  label: "grunge american primitivism", url: "https://cdn1.suno.ai/28b9292f-d669-4850-bfeb-765803b2fbc4.mp3" },

    { category: "G",  label: "grunge americana", url: "https://cdn1.suno.ai/51d4fca4-5764-4566-b15d-b8e4b8e378c0.mp3" },

    { category: "G",  label: "grunge bedroom pop", url: "https://cdn1.suno.ai/b39bc09f-d43e-4d1a-b149-322d30531bd6.mp3" },

    { category: "G",  label: "grunge cumbia", url: "https://cdn1.suno.ai/9ad57e9d-fdc3-4b2a-a5db-6eced4889deb.mp3" },

    { category: "G",  label: "grunge funk", url: "https://cdn1.suno.ai/6b2b0a0a-5bf6-419f-8806-cc0541a24a69.mp3" },

    { category: "G",  label: "grunge new jack swing", url: "https://cdn1.suno.ai/4b488110-422b-4f64-9d5e-6945fe7f4400.mp3" },



    
    { category: "H",  label: "harpischord acid jazz", url: "https://cdn1.suno.ai/16c6d151-1076-438c-ab3a-39c31e6414bb.mp3" },

    { category: "H",  label: "harpischord ambient house", url: "https://cdn1.suno.ai/c0c26f3b-ac71-468e-909a-d6e5290eb842.mp3" },

    { category: "H",  label: "harpischord anti-folk", url: "https://cdn1.suno.ai/63cd6c7a-5651-4269-a3bf-5a6613fd3773.mp3" },

    { category: "H",  label: "harpischord boogie", url: "https://cdn1.suno.ai/98e22e5e-1644-4ef4-a8c4-b4e433da80dc.mp3" },

    { category: "H",  label: "harpischord doo-wop", url: "https://cdn1.suno.ai/aaf05eb9-a043-452f-9b40-771f7e7d7dc9.mp3" },

    { category: "H",  label: "harpischord drill", url: "https://cdn1.suno.ai/ba456874-12ed-4c6b-a1bb-e46d4e1e8799.mp3" },

    { category: "H",  label: "harpischord drill and bass", url: "https://cdn1.suno.ai/cfaa73c8-890c-4527-bb60-b36defde82a1.mp3" },

    { category: "H",  label: "harpischord g-funk", url: "https://cdn1.suno.ai/8f001697-d2f9-4e9a-a939-70892ef7966e.mp3" },

    { category: "H",  label: "harpischord gospel", url: "https://cdn1.suno.ai/9ef112dd-7bcb-4319-837f-3ae4b825140c.mp3" },

    { category: "H",  label: "harpischord hip hop", url: "https://cdn1.suno.ai/eddac67a-045d-4e28-9496-7ef4f21298aa.mp3" },

    { category: "H",  label: "harpischord klezmer", url: "https://cdn1.suno.ai/3708420b-1e7f-4136-b80a-e006e29242c3.mp3" },

    { category: "H",  label: "harpischord symphonic metal", url: "https://cdn1.suno.ai/f1915c18-1c25-4cb9-949b-db89a63cacc1.mp3" },

    { category: "H",  label: "havana 2-step", url: "https://cdn1.suno.ai/8c323493-e54a-47cc-8888-ac342f4d1634.mp3" },

    { category: "H",  label: "havana american primitivism", url: "https://cdn1.suno.ai/32edb075-5f19-42be-9db1-d84b0c48b999.mp3" },

    { category: "H",  label: "havana bedroom pop", url: "https://cdn1.suno.ai/27197652-e9e7-4ef6-880d-c4ff7d1793c1.mp3" },

    { category: "H",  label: "havana bubblegum bass", url: "https://cdn1.suno.ai/d2e7aa50-9afc-4ff4-af64-78d8216b920b.mp3" },

    { category: "H",  label: "havana cajun", url: "https://cdn1.suno.ai/022e6d56-21d5-42c2-8035-2f358185d2b4.mp3" },

    { category: "H",  label: "havana chillstep", url: "https://cdn1.suno.ai/be18e513-5c09-4816-9639-a9ec11a0e36b.mp3" },

    { category: "H",  label: "havana electropop", url: "https://cdn1.suno.ai/cfca3ad5-f1fc-4762-b356-5c395628c15b.mp3" },

    { category: "H",  label: "havana funk", url: "https://cdn1.suno.ai/4aa2bcbc-398e-45f3-a23f-0d3a5b8d683c.mp3" },

    { category: "H",  label: "havana glitch hop", url: "https://cdn1.suno.ai/463748bf-fca3-45b4-8a92-958c7bec11e5.mp3" },

    { category: "H",  label: "havana grime", url: "https://cdn1.suno.ai/a7fe050c-c702-4f65-b7f5-f738de3a6873.mp3" },

    { category: "H",  label: "havana synthwave", url: "https://cdn1.suno.ai/e9315e52-28af-4017-8682-7570392a621a.mp3" },

    { category: "H",  label: "havana techno", url: "https://cdn1.suno.ai/fd08edde-40e6-4ed1-80a9-e7a11bddda92.mp3" },

    { category: "H",  label: "havana trap", url: "https://cdn1.suno.ai/f6dbcf11-84ad-44f0-808f-c8a0413d568b.mp3" },

    { category: "H",  label: "hawaiian electropop", url: "https://cdn1.suno.ai/3bb19185-b2cc-4577-8dcd-a0da1a90c621.mp3" },

    { category: "H",  label: "hawaiian merengue", url: "https://cdn1.suno.ai/39b0dc2c-2e56-4e24-a8aa-522d46ec08c4.mp3" },

    { category: "H",  label: "hawaiian r&b", url: "https://cdn1.suno.ai/fa955427-53cb-464a-abfb-247fd54439bb.mp3" },

    { category: "H",  label: "hindi acoustic rock", url: "https://cdn1.suno.ai/b160dbb7-80ac-49fb-bcb7-a226db6168f4.mp3" },

    { category: "H",  label: "hindi afrobeat", url: "https://cdn1.suno.ai/d986df11-cec4-45ef-a7d6-a7106e1cece5.mp3" },

    { category: "H",  label: "hindi alt-country", url: "https://cdn1.suno.ai/5e5a1093-e928-4f07-b535-ba2320da2be3.mp3" },

    { category: "H",  label: "hindi ambient house", url: "https://cdn1.suno.ai/5a48f924-10fc-4126-b5b7-dc6b17c96a98.mp3" },

    { category: "H",  label: "hindi bubblegum dance", url: "https://cdn1.suno.ai/f831d940-ef99-4e2b-a7b9-0ab3092ed1a6.mp3" },

    { category: "H",  label: "hindi chanson", url: "https://cdn1.suno.ai/8912b483-9d9c-45c7-b3ec-95b651d3efba.mp3" },

    { category: "H",  label: "hindi doo-wop", url: "https://cdn1.suno.ai/62ef6259-831c-46dd-99ed-092ff228f3f1.mp3" },

    { category: "H",  label: "hindi dream pop", url: "https://cdn1.suno.ai/553ce431-3b11-41ea-b959-1ea2ac4d23e0.mp3" },

    { category: "H",  label: "hindi southern rock", url: "https://cdn1.suno.ai/ca2ec564-c597-4675-adae-a19a06e23c1d.mp3" },

    { category: "H",  label: "hip hop", url: "https://cdn1.suno.ai/19e1555d-2d48-4bd8-8f86-7e4efcbb0582.mp3" },

    { category: "H",  label: "hip hop dubstep", url: "https://cdn1.suno.ai/6c229379-0e8a-466c-8f55-55777976fc3a.mp3" },

    { category: "H",  label: "hip hop techno", url: "https://cdn1.suno.ai/69d26e03-58da-46e4-9de7-0820100ae25a.mp3" },

    { category: "H",  label: "house", url: "https://cdn1.suno.ai/37771abb-d45d-409a-822f-a0cbf2766719.mp3" },

    { category: "H",  label: "house reggae", url: "https://cdn1.suno.ai/2f20007b-2f6d-448d-8553-d3952f02558d.mp3" },

    { category: "H",  label: "house roots reggae", url: "https://cdn1.suno.ai/5911b50b-a282-4cae-9961-7f571d8e29aa.mp3" },

    { category: "H",  label: "house surf", url: "https://cdn1.suno.ai/0898efd3-c64c-403b-aef4-8da1693c77c2.mp3" },

    { category: "H",  label: "house symphonic metal", url: "https://cdn1.suno.ai/6e430f42-a9bc-4ccf-8345-f5d5409cabe9.mp3" },

    { category: "H",  label: "hyper-2-step", url: "https://cdn1.suno.ai/da50b8d9-04cb-40b1-994a-378d31af1361.mp3" },

    { category: "H",  label: "hyper-acid house", url: "https://cdn1.suno.ai/a0c42c27-dc4d-43ea-9dc4-fa46e10f1c4e.mp3" },

    { category: "H",  label: "hyper-afrobeat", url: "https://cdn1.suno.ai/b8233285-bcc8-4b73-965b-b8066fb3f2a4.mp3" },

    { category: "H",  label: "hyper-blues rock", url: "https://cdn1.suno.ai/a62bdcdc-1c74-4087-a715-320bdb3d8e18.mp3" },

    { category: "H",  label: "hyper-crunk", url: "https://cdn1.suno.ai/8b884e43-1810-4193-b638-ea3e7d8a9afa.mp3" },

    { category: "H",  label: "hyper-dance", url: "https://cdn1.suno.ai/fe0bbe89-7b4d-47bc-a4db-ce3bb7ebe3af.mp3" },

    { category: "H",  label: "hyper-egyptian", url: "https://cdn1.suno.ai/085ee18e-ba4c-4214-9bd8-e1dd21fbdba4.mp3" },

    { category: "H",  label: "hyper-grime", url: "https://cdn1.suno.ai/118ec32f-bfbf-4149-ba98-b85361717a51.mp3" },

    { category: "H",  label: "hyper-indie", url: "https://cdn1.suno.ai/26f82e44-3c06-4730-b685-f61d4329d091.mp3" },

    { category: "H",  label: "hyper-jungle", url: "https://cdn1.suno.ai/f36e41de-c5e8-4176-be4a-bc39dbbcef0f.mp3" },

    { category: "H",  label: "hyper-motown", url: "https://cdn1.suno.ai/924dd94c-f098-4795-a486-ea59491c42fc.mp3" },

    { category: "H",  label: "hyper-southern rock", url: "https://cdn1.suno.ai/dffddf1b-e99b-4ce1-a1b5-d71806c77029.mp3" },

    { category: "H",  label: "hyphy", url: "https://cdn1.suno.ai/e0cbf4c5-22d0-478e-a78a-f8f2f7862972.mp3" },

    { category: "H",  label: "hyphy alternative r&b", url: "https://cdn1.suno.ai/38075274-f014-436b-b48b-93bb9e8d6cb8.mp3" },

    { category: "H",  label: "hyphy bluegrass", url: "https://cdn1.suno.ai/e68ca08b-71db-4ff1-83f4-9071cdb564a0.mp3" },

    { category: "H",  label: "hyphy egyptian", url: "https://cdn1.suno.ai/0824a68b-15a3-4bd7-93c8-c46bda6f107c.mp3" },

    { category: "H",  label: "hypnagogic algorave", url: "https://cdn1.suno.ai/8b30c816-94b5-4d12-ad59-574e5f42dfcd.mp3" },

    { category: "H",  label: "hypnagogic ambient trance", url: "https://cdn1.suno.ai/fd11d660-e657-4efe-bae3-389168ebd845.mp3" },

    { category: "H",  label: "hypnagogic electropop", url: "https://cdn1.suno.ai/ab16d20f-a6fb-4aef-9584-dfdbda937c8f.mp3" },

    { category: "H",  label: "hypnagogic garage", url: "https://cdn1.suno.ai/4d42ff08-24bf-4251-829b-f631ea7aeaa8.mp3" },

    { category: "H",  label: "hypnagogic goa trance", url: "https://cdn1.suno.ai/ccac02a5-cfa8-4b2d-8335-03a9bf854b58.mp3" },

    { category: "H",  label: "hypnagogic pacific reggae", url: "https://cdn1.suno.ai/62fad402-04f1-4832-a6cd-6df2afa0a248.mp3" },

    { category: "H",  label: "hypnagogic shoegaze", url: "https://cdn1.suno.ai/703f7fe8-f373-4bd4-8330-e2bd2bbb7a53.mp3" },

    { category: "H",  label: "hypnagogic swamp blues", url: "https://cdn1.suno.ai/37dc10f0-f08e-453d-ba45-cfe3688d30d6.mp3" },



    
    { category: "I",  label: "illbient", url: "https://cdn1.suno.ai/5323d05b-1bcb-4cf3-94a0-0b50eb4b9027.mp3" },

    { category: "I",  label: "illbient afrikaner folk", url: "https://cdn1.suno.ai/16e3e054-e025-4437-9e90-40c026760fde.mp3" },

    { category: "I",  label: "illbient alternative rock", url: "https://cdn1.suno.ai/33200a96-064c-42c4-9c12-9d236ebf33a0.mp3" },

    { category: "I",  label: "illbient cumbia", url: "https://cdn1.suno.ai/c4ed5976-8933-437e-b492-1150344cafe6.mp3" },

    { category: "I",  label: "illbient egyptian", url: "https://cdn1.suno.ai/c23f40ca-a762-47bb-8041-4d9e232fe92e.mp3" },

    { category: "I",  label: "illbientwave", url: "https://cdn1.suno.ai/7d83ae81-ed78-4c00-8d2a-7f34ed7f6733.mp3" },

    { category: "I",  label: "indie", url: "https://cdn1.suno.ai/fc804e5f-6d8c-48b1-9674-0cb12e696540.mp3" },

    { category: "I",  label: "indie g-funk", url: "https://cdn1.suno.ai/aa8dabef-398d-4cb9-b69d-00d4754aa21d.mp3" },

    { category: "I",  label: "indie grunge", url: "https://cdn1.suno.ai/b3dd60fe-dd19-47ac-ae24-a5fe7e71bee7.mp3" },

    { category: "I",  label: "instrumental bluegrass", url: "https://cdn1.suno.ai/977d1052-2e3f-460d-89da-6dd2f8c6758c.mp3" },



    
    { category: "J",  label: "j-pop acid breaks", url: "https://cdn1.suno.ai/3a822f48-bcf9-4f12-8131-67b9bc50a449.mp3" },

    { category: "J",  label: "j-pop acid jazz", url: "https://cdn1.suno.ai/424814a9-87ed-498a-a9fd-c43740203717.mp3" },

    { category: "J",  label: "j-pop blues", url: "https://cdn1.suno.ai/87022839-1008-4fd3-a880-a94c16999d85.mp3" },

    { category: "J",  label: "j-pop chillsynth", url: "https://cdn1.suno.ai/74bdce06-68f6-4358-9f47-b915890735c5.mp3" },

    { category: "J",  label: "japanese algorave", url: "https://cdn1.suno.ai/b96972d2-6677-4d68-a906-7efd9e92d1e1.mp3" },

    { category: "J",  label: "japanese ambient house", url: "https://cdn1.suno.ai/e2717a09-167b-44bf-b1f1-8daa802e4c1f.mp3" },

    { category: "J",  label: "japanese americana", url: "https://cdn1.suno.ai/c469ef45-29e1-46a4-b223-d1d3f14c921a.mp3" },

    { category: "J",  label: "japanese boogie", url: "https://cdn1.suno.ai/a34587ff-2d45-43cb-84e4-fa6f9fd9e12a.mp3" },

    { category: "J",  label: "japanese chanson", url: "https://cdn1.suno.ai/8af2f0a0-398f-41c4-8968-62ef03b1ff19.mp3" },

    { category: "J",  label: "japanese dancehall", url: "https://cdn1.suno.ai/2a734009-8824-4813-bf84-1ee33e0e2c7e.mp3" },

    { category: "J",  label: "japanese jungle", url: "https://cdn1.suno.ai/164ed5bb-8e3b-4f9f-9361-2df830795c54.mp3" },

    { category: "J",  label: "japanese merengue", url: "https://cdn1.suno.ai/10fc6f77-63b1-4686-bfff-1381d0961cfe.mp3" },

    { category: "J",  label: "japanese shoegaze", url: "https://cdn1.suno.ai/5c393dfa-38ea-4b86-8098-f6f9cce4fa35.mp3" },

    { category: "J",  label: "japanese surf", url: "https://cdn1.suno.ai/3403521c-b172-4fa8-a850-ce9f106e85a8.mp3" },

    { category: "J",  label: "japanese surf rock", url: "https://cdn1.suno.ai/a0fe2e66-5f3e-4884-94b4-6d398b72a211.mp3" },

    { category: "J",  label: "japanese swing", url: "https://cdn1.suno.ai/e5732861-a5a8-4a4b-9bab-c07ca965d6cd.mp3" },

    { category: "J",  label: "jazz", url: "https://cdn1.suno.ai/f2c882c4-dfa0-42fb-8c43-40da88485fb1.mp3" },

    { category: "J",  label: "jazz future bass", url: "https://cdn1.suno.ai/c0db9496-39a5-4e05-ada9-90214390b1d1.mp3" },

    { category: "J",  label: "jazz sertanejo", url: "https://cdn1.suno.ai/baa181d7-f9d9-4ee6-a24b-d1db47740c83.mp3" },

    { category: "J",  label: "jazz soul", url: "https://cdn1.suno.ai/513b768d-b826-4360-b639-2bb4cc4b1acb.mp3" },

    { category: "J",  label: "jungle", url: "https://cdn1.suno.ai/b76cfed2-0e5f-4066-89bf-db45f061d865.mp3" },

    { category: "J",  label: "jungle afrobeat", url: "https://cdn1.suno.ai/f95ff341-2e64-4baa-a15d-cfadc157281e.mp3" },

    { category: "J",  label: "jungle ambient noise wall", url: "https://cdn1.suno.ai/c8c34a66-c64e-47ef-840f-022d67ffe121.mp3" },



    
    { category: "K",  label: "k-pop", url: "https://cdn1.suno.ai/99740413-9874-482b-8957-611c1d67d2fe.mp3" },


    { category: "K",  label: "k-pop acoustic texas blues", url: "https://cdn1.suno.ai/0ae7d773-c206-47c3-95a4-56890b62a408.mp3" },

    { category: "K",  label: "kawaii future bass", url: "https://cdn1.suno.ai/9a08adf5-6999-402d-95eb-128b35b937fe.mp3" },

    { category: "K",  label: "kawaii future bass afro-cuban jazz", url: "https://cdn1.suno.ai/7493da46-17af-4372-8c1f-c1e91f32f65d.mp3" },

    { category: "K",  label: "kawaii future bass afropiano", url: "https://cdn1.suno.ai/5076ec01-61b0-4637-93c2-87e43a9fb562.mp3" },

    { category: "K",  label: "kawaii future bass polka", url: "https://cdn1.suno.ai/0e13abeb-f115-436f-aee8-896f8e19fe21.mp3" },

    { category: "K",  label: "klezmer", url: "https://cdn1.suno.ai/8e90bf3b-d7ef-4616-abd6-985589a3be0a.mp3" },

    { category: "K",  label: "klezmer pop", url: "https://cdn1.suno.ai/f12fc09a-cf6a-468c-a69b-d5d9be3ebc64.mp3" },

    { category: "K",  label: "korean acid trance", url: "https://cdn1.suno.ai/db854582-62e7-4e12-ac82-fe81d5c1a2a2.mp3" },

    { category: "K",  label: "korean afro-funk", url: "https://cdn1.suno.ai/a51d8193-b05c-4781-9379-78022b88a129.mp3" },

    { category: "K",  label: "korean afrobeat", url: "https://cdn1.suno.ai/46d046dc-963a-4969-8f10-d83d6b8587d9.mp3" },

    { category: "K",  label: "korean algorave", url: "https://cdn1.suno.ai/c8671183-0a8b-4e4e-87d9-092d50de0add.mp3" },

    { category: "K",  label: "korean americana", url: "https://cdn1.suno.ai/ef770e00-2d71-4ae0-95e5-dc442a5b0445.mp3" },

    { category: "K",  label: "korean cabaret", url: "https://cdn1.suno.ai/8836e65f-867f-47ad-99b8-3f7e4c807f0c.mp3" },

    { category: "K",  label: "korean drumstep", url: "https://cdn1.suno.ai/948d0bfc-cb41-42b7-8a60-d1b7d457d0d5.mp3" },

    { category: "K",  label: "korean fife and drum blues", url: "https://cdn1.suno.ai/ed7f1812-7b5b-4556-a599-3a1ffeecd394.mp3" },

    { category: "K",  label: "korean opera", url: "https://cdn1.suno.ai/72095b8a-e900-4d3b-85c8-b161812f61d1.mp3" },

    { category: "K",  label: "korean pacific reggae", url: "https://cdn1.suno.ai/98fac0ad-d18e-437e-b132-2247d7693886.mp3" },

    { category: "K",  label: "koto alt-pop", url: "https://cdn1.suno.ai/eb1dcde4-4b60-4843-99f0-ef407117fbc1.mp3" },

    { category: "K",  label: "koto boom bap", url: "https://cdn1.suno.ai/1f68f466-3900-4f29-9b70-9e169a989bf0.mp3" },

    { category: "K",  label: "koto coptic", url: "https://cdn1.suno.ai/d4c58492-69c8-46f6-9775-6bbbcc30cc14.mp3" },

    { category: "K",  label: "koto dembow", url: "https://cdn1.suno.ai/248d350d-8b8d-4a2f-8396-027d526e0d6b.mp3" },

    { category: "K",  label: "koto drill and bass", url: "https://cdn1.suno.ai/fdb80873-955f-4fa7-b80a-ca0279b1775f.mp3" },

    { category: "K",  label: "koto g-funk", url: "https://cdn1.suno.ai/1345b659-029b-4367-a905-17e0134f4c9d.mp3" },

    { category: "K",  label: "koto gnawa", url: "https://cdn1.suno.ai/d06eb9d8-1a1c-4327-88f2-bc8e8bab7398.mp3" },

    { category: "K",  label: "koto house", url: "https://cdn1.suno.ai/c8a59c5f-124f-45d8-9843-09e8747e9d62.mp3" },

    { category: "K",  label: "koto polka", url: "https://cdn1.suno.ai/6557e069-6d26-4c7a-abf0-4a321f3e1549.mp3" },

    { category: "K",  label: "koto swing", url: "https://cdn1.suno.ai/f77281f3-7165-45b5-b974-307c57e38288.mp3" },

    { category: "K",  label: "koto trap", url: "https://cdn1.suno.ai/a7e27c81-594f-4cb7-bce8-f65f05fadd0b.mp3" },




    

    { category: "L",  label: "liquid drum and bass", url: "https://cdn1.suno.ai/eea07543-f9e5-4855-acc6-4652ddd4762f.mp3" },

    { category: "L",  label: "liquid drum and bass bluegrass", url: "https://cdn1.suno.ai/d4a35e7c-9f42-4037-ab2a-9dab713f7bfd.mp3" },

    { category: "L",  label: "liquid drum and bass blues", url: "https://cdn1.suno.ai/127259fc-7fec-4bee-995a-b99be0b90acd.mp3" },

    { category: "L",  label: "liquid drum and bass house", url: "https://cdn1.suno.ai/c3f81067-bdfc-44af-984f-b085dc25d916.mp3" },

    { category: "L",  label: "liquid drum and bass new jack swing", url: "https://cdn1.suno.ai/b6b25215-2ec1-410a-8611-add6605098b7.mp3" },

    { category: "L",  label: "liquid drum and bass rockabilly", url: "https://cdn1.suno.ai/19e82ee9-a292-454d-b531-41549c781793.mp3" },

    { category: "L",  label: "liquid drum and bass slushwave", url: "https://cdn1.suno.ai/83ed0b4b-3548-415b-b2bb-cf1f46a6cdd4.mp3" },

    { category: "L",  label: "liverpool big band", url: "https://cdn1.suno.ai/f243892f-4655-4401-afa3-205618ff0754.mp3" },

    { category: "L",  label: "lo-fi afro-cuban jazz", url: "https://cdn1.suno.ai/5e6dfe44-c426-4fbe-85c0-d02154226836.mp3" },

    { category: "L",  label: "lo-fi bubblegum bass", url: "https://cdn1.suno.ai/79b60772-ebad-4dae-ad0c-bcdc02d6e614.mp3" },

    { category: "L",  label: "lo-fi swing", url: "https://cdn1.suno.ai/3a765185-3f56-4347-af73-a99ce35de73f.mp3" },

    { category: "L",  label: "lo-fi trap", url: "https://cdn1.suno.ai/20f5dedf-4ad7-45f1-8519-71207ede4ea1.mp3" },

    

    { category: "M",  label: "mandarin acid trance", url: "https://cdn1.suno.ai/789013d1-800c-4560-b31e-3b205c481aa7.mp3" },

    { category: "M",  label: "mandarin afrobeat", url: "https://cdn1.suno.ai/b067b56d-35de-415e-8de5-3c02a1f41799.mp3" },

    { category: "M",  label: "mandarin american primitivism", url: "https://cdn1.suno.ai/2ef75507-521c-4ea1-8c6f-4588645728f0.mp3" },

    { category: "M",  label: "mandarin cumbia", url: "https://cdn1.suno.ai/6b73e9b4-15d9-4265-85fe-4f92d83f9231.mp3" },

    { category: "M",  label: "mandarin delta blues", url: "https://cdn1.suno.ai/fe55a316-9388-4768-b3be-59cd64a789b1.mp3" },

    { category: "M",  label: "mandarin disco", url: "https://cdn1.suno.ai/94375c7c-0a03-4f93-ae77-045679ccc325.mp3" },

    { category: "M",  label: "mandarin drum and bass", url: "https://cdn1.suno.ai/cdc817a8-6938-42fb-b303-59509a34765f.mp3" },

    { category: "M",  label: "mandarin hawaiian", url: "https://cdn1.suno.ai/4bcb9759-5595-4b2c-b205-df8cf4a6d691.mp3" },

    { category: "M",  label: "mandarin house", url: "https://cdn1.suno.ai/fe0cc401-48fe-44b3-8929-0a4afee7671d.mp3" },

    { category: "M",  label: "mandarin math rock", url: "https://cdn1.suno.ai/d23e310e-737a-4abe-b88f-5164e56464be.mp3" },

    { category: "M",  label: "mandarin trance", url: "https://cdn1.suno.ai/b77d6cd6-144c-453e-9350-0f0b66045b0f.mp3" },

    { category: "M",  label: "math rock", url: "https://cdn1.suno.ai/1b8490c0-cd22-41a1-b57a-706a903c03c8.mp3" },

    { category: "M",  label: "math rock ambient noise wall", url: "https://cdn1.suno.ai/7c54f146-de24-4706-88ea-277390fb0968.mp3" },

    { category: "M",  label: "merengue", url: "https://cdn1.suno.ai/2364d422-5d9e-4686-b040-00fcf93fe05e.mp3" },

    { category: "M",  label: "metal grunge", url: "https://cdn1.suno.ai/d7032760-4c45-4199-94de-e8507f9f6d1c.mp3" },

    { category: "M",  label: "motown", url: "https://cdn1.suno.ai/ae2eb518-46ae-47af-a1fe-b4f9939faee4.mp3" },


    

    { category: "N",  label: "new jack swing big band", url: "https://cdn1.suno.ai/8a7464eb-5ebc-4975-ab3f-993cf8f847ed.mp3" },

    { category: "N",  label: "new orleans alternative r&b", url: "https://cdn1.suno.ai/e1092ada-8c16-4ef4-9f5e-3e6934f0bbb3.mp3" },

    { category: "N",  label: "new orleans cajun", url: "https://cdn1.suno.ai/19297535-20a0-48d0-a13b-acbf803a9b53.mp3" },

    { category: "N",  label: "new orleans carnatic", url: "https://cdn1.suno.ai/aae27306-f882-4a86-b350-32a5e683f323.mp3" },

    { category: "N",  label: "new orleans chillwave", url: "https://cdn1.suno.ai/17b17dba-e2f4-4114-a8ad-e36f392f9164.mp3" },

    { category: "N",  label: "new orleans cloud rap", url: "https://cdn1.suno.ai/0736e708-542d-4c4f-833c-344daf1ae5aa.mp3" },

    { category: "N",  label: "new orleans dembow", url: "https://cdn1.suno.ai/6d11301b-aa47-4ede-92f6-5fb0e29cc7c6.mp3" },

    { category: "N",  label: "new orleans grunge", url: "https://cdn1.suno.ai/f51c748b-3e5f-4c38-b455-6e406cba29c0.mp3" },

    { category: "N",  label: "new orleans house", url: "https://cdn1.suno.ai/06b60879-50c6-4a76-a6cd-d8a37fdb4f56.mp3" },

    { category: "N",  label: "new orleans samba", url: "https://cdn1.suno.ai/a90cd0df-6443-4455-98ed-cfda2c0971e0.mp3" },

    { category: "N",  label: "new orleans trance", url: "https://cdn1.suno.ai/bd51a4f8-8f5f-4520-a60c-c3e3f7a2f3c9.mp3" },

    { category: "N",  label: "new wave", url: "https://cdn1.suno.ai/ac7f944f-e856-46fd-922a-3392ae469262.mp3" },

    { category: "N",  label: "new wave acid trance", url: "https://cdn1.suno.ai/2c9b1ae4-4d39-4af5-9998-b4c8ae45ac81.mp3" },

    { category: "N",  label: "norte\u00f1o pop", url: "https://cdn1.suno.ai/2a562d33-34b8-4d3f-a4f1-5c26306df3dc.mp3" },

    { category: "N",  label: "norte\u00f1owave", url: "https://cdn1.suno.ai/d9807953-706a-4fc7-92a5-7adf8b39efbd.mp3" },


    

    { category: "P",  label: "p-funk", url: "https://cdn1.suno.ai/6d910b7c-6390-4ded-8091-85915f74b9db.mp3" },

    { category: "P",  label: "p-funk cloud rap", url: "https://cdn1.suno.ai/4a1db14e-86f3-4759-870d-eae58f0977e1.mp3" },

    { category: "P",  label: "p-funk jazz", url: "https://cdn1.suno.ai/b22da709-6605-4722-b0f9-4c099953447c.mp3" },

    { category: "P",  label: "p-funk mariachi", url: "https://cdn1.suno.ai/10e361c8-4664-4017-b15d-60aaba3cc72b.mp3" },

    { category: "P",  label: "p-funk samba", url: "https://cdn1.suno.ai/5d3b13f0-ff5d-4fd0-aabb-99ec66da2f10.mp3" },

    { category: "P",  label: "pacific reggae afrobeat", url: "https://cdn1.suno.ai/7abf51ed-9cd8-44f1-a2e5-ff4803b453fa.mp3" },

    { category: "P",  label: "pacific reggae samba", url: "https://cdn1.suno.ai/5fe9f2c1-7bdb-4029-91a1-b6522a506b04.mp3" },

    { category: "P",  label: "pacific reggae ska", url: "https://cdn1.suno.ai/1312e489-1b2a-497c-acb4-35797c0868f6.mp3" },

    { category: "P",  label: "piano african folk", url: "https://cdn1.suno.ai/5b2df70f-377a-4118-a84e-249119c92b88.mp3" },

    { category: "P",  label: "piano afro-rock", url: "https://cdn1.suno.ai/279387c0-3c7d-4004-8535-d48fd6bedc58.mp3" },

    { category: "P",  label: "piano afroswing", url: "https://cdn1.suno.ai/a2cd58f5-57a9-4da7-9bbe-3c37e1bd6079.mp3" },

    { category: "P",  label: "piano cape verdean", url: "https://cdn1.suno.ai/68ae1a78-181c-45f9-ae09-bfd87cea5170.mp3" },

    { category: "P",  label: "piano caribbean", url: "https://cdn1.suno.ai/ffd1d4c6-bb95-4723-961e-dec07d16680a.mp3" },

    { category: "P",  label: "piano chillstep", url: "https://cdn1.suno.ai/3746d366-21a4-44ee-9e62-fdf50cea8c2a.mp3" },

    { category: "P",  label: "piano country", url: "https://cdn1.suno.ai/93635fe6-0cf6-41ca-b796-2ffde716b80f.mp3" },

    { category: "P",  label: "piano klezmer", url: "https://cdn1.suno.ai/10b8634a-29db-443c-8069-cef216d7c8ab.mp3" },

    { category: "P",  label: "polka", url: "https://cdn1.suno.ai/3fd9222f-bc49-465f-b266-392a5d47dcd1.mp3" },

    { category: "P",  label: "polka emo", url: "https://cdn1.suno.ai/e81a127c-b0fd-4149-98bb-9e0b12c880a6.mp3" },

    { category: "P",  label: "pop", url: "https://cdn1.suno.ai/e49fbe4d-b5e4-4f60-ba85-6cd279a8a510.mp3" },

    { category: "P",  label: "pop bossa nova", url: "https://cdn1.suno.ai/4553578c-7876-40b2-87c3-af0621706006.mp3" },

    { category: "P",  label: "pop g-funk", url: "https://cdn1.suno.ai/821dc96b-5d03-4d49-b694-9b9e3da29c5d.mp3" },

    { category: "P",  label: "pop synthpop", url: "https://cdn1.suno.ai/f49226c1-e768-419c-88df-d71ccc9937b6.mp3" },

    { category: "P",  label: "popcore", url: "https://cdn1.suno.ai/1f72b9bf-bd03-4e4c-ab97-c55a505e1311.mp3" },

    { category: "P",  label: "portuguese acoustic rock", url: "https://cdn1.suno.ai/7bb03d93-9e41-4db1-ae5c-a390fd6c2d30.mp3" },

    { category: "P",  label: "portuguese 16-bit", url: "https://cdn1.suno.ai/44d363ff-45ea-4a45-8c0a-f8b12699b0d7.mp3" },

    { category: "P",  label: "portuguese barbershop", url: "https://cdn1.suno.ai/eaae7dcc-9dc8-4aa2-bcd8-223cd9338968.mp3" },

    { category: "P",  label: "portuguese breakbeat", url: "https://cdn1.suno.ai/605c2d39-f5ca-4408-897f-e706191a1f4e.mp3" },

    { category: "P",  label: "portuguese chillstep", url: "https://cdn1.suno.ai/6508e936-32eb-4e16-b289-3ec446df5072.mp3" },

    { category: "P",  label: "portuguese chillsynth", url: "https://cdn1.suno.ai/4986e444-e48c-48ce-8c09-6413a78c3e0f.mp3" },

    { category: "P",  label: "portuguese dancehall", url: "https://cdn1.suno.ai/6add5f36-db08-4337-a4c5-7c9ecb40d386.mp3" },

    { category: "P",  label: "portuguese southern rock", url: "https://cdn1.suno.ai/a5e1ed1b-1e0f-40e9-abb7-45fc82afe618.mp3" },

    { category: "P",  label: "portuguese surf rock", url: "https://cdn1.suno.ai/1e989241-c72c-488f-9616-3c10db21ad0d.mp3" },


    { category: "P",  label: "prog acoustic texas blues", url: "https://cdn1.suno.ai/9ebd7b79-bbd1-4b3f-9e4b-1dba4c8ce2ae.mp3" },

    { category: "P",  label: "prog afro-funk", url: "https://cdn1.suno.ai/efd3aa2c-d3b9-492d-aaab-5f36a0f403b1.mp3" },

    { category: "P",  label: "prog afro-jazz", url: "https://cdn1.suno.ai/fe405ee0-c9d6-439c-9a0f-9eaa98e4ee8a.mp3" },

    { category: "P",  label: "prog afrobeat", url: "https://cdn1.suno.ai/2aaab4d5-3d94-4677-bac4-1d0685df0628.mp3" },

    { category: "P",  label: "prog ambient noise wall", url: "https://cdn1.suno.ai/93026b4c-08b5-41ea-8b60-accf09e6e070.mp3" },

    { category: "P",  label: "prog avant-garde jazz", url: "https://cdn1.suno.ai/e5f63e6b-3e3e-492d-b515-615962da15fa.mp3" },

    { category: "P",  label: "prog big band", url: "https://cdn1.suno.ai/0b64fee7-3fa8-478f-88b9-a29aa6862d90.mp3" },

    { category: "P",  label: "prog breakbeat", url: "https://cdn1.suno.ai/deedfe30-fbf2-44ae-ba42-54d991b8fe5a.mp3" },

    { category: "P",  label: "prog disco", url: "https://cdn1.suno.ai/a29eb855-61f9-4743-a261-b6bbd284784c.mp3" },

    { category: "P",  label: "prog dream pop", url: "https://cdn1.suno.ai/b88be36f-5163-4fda-b36c-e01075997bc6.mp3" },

    { category: "P",  label: "prog drum and bass", url: "https://cdn1.suno.ai/5f49e0ce-e746-4e49-bbb7-58631a15b4da.mp3" },

    { category: "P",  label: "prog dubstep", url: "https://cdn1.suno.ai/093ea914-ae8a-4b3e-b71b-9023160182c8.mp3" },

    { category: "P",  label: "prog rockabilly", url: "https://cdn1.suno.ai/0a44b5d0-ff10-4721-8d0d-835a72b8b6ca.mp3" },

    { category: "P",  label: "prog shoegaze", url: "https://cdn1.suno.ai/233b9153-6dcc-4be9-a2c8-469f448a6432.mp3" },

    { category: "P",  label: "prog swamp blues", url: "https://cdn1.suno.ai/8d863040-d0f7-400c-8248-93079f5dca7d.mp3" },

    { category: "P",  label: "psybient griot", url: "https://cdn1.suno.ai/14b5f992-f122-4866-a368-529fae8c8f9c.mp3" },

    { category: "P",  label: "psybient new wave", url: "https://cdn1.suno.ai/4633c0a3-b332-4f53-9a92-b23fe3c95a4a.mp3" },

    { category: "P",  label: "psychedelic acid trance", url: "https://cdn1.suno.ai/e9cf0223-6a46-4827-9195-a6ba65cd2ed3.mp3" },

    { category: "P",  label: "psychedelic cabaret", url: "https://cdn1.suno.ai/2dc3a8f3-3f68-4c14-9a4a-86ce4eb23ba6.mp3" },

    { category: "P",  label: "psychedelic dream pop", url: "https://cdn1.suno.ai/dd2ee566-0705-4b34-9f33-da308a639195.mp3" },

    { category: "P",  label: "psychedelic hawaiian", url: "https://cdn1.suno.ai/5ffebe5f-fb54-4967-b7ef-bf706213b6f6.mp3" },

    { category: "P",  label: "psychedelic house", url: "https://cdn1.suno.ai/1a1d7000-b650-4e6d-80da-176c152a7c20.mp3" },

    { category: "P",  label: "psychedelic motown", url: "https://cdn1.suno.ai/e23a2201-2401-454d-acbd-376312db74bd.mp3" },

    { category: "P",  label: "psychedelic psybient", url: "https://cdn1.suno.ai/64f903fb-89c5-4961-aa82-f76fb03611a3.mp3" },

    { category: "P",  label: "psychedelic swing", url: "https://cdn1.suno.ai/462ee1e1-7ec3-435b-9f9e-a1654a4df070.mp3" },

    { category: "P",  label: "punk acid trance", url: "https://cdn1.suno.ai/cffbc16d-9453-41bb-9138-56ed18cd7354.mp3" },

    { category: "P",  label: "punk electropop", url: "https://cdn1.suno.ai/340463c9-41f5-4a2c-afd1-142b0afe9dc9.mp3" },

    { category: "P",  label: "punk polka", url: "https://cdn1.suno.ai/3b0a5fc4-23f9-4646-abed-58db8a2f6a79.mp3" },


    

    { category: "R",  label: "r&b gospel", url: "https://cdn1.suno.ai/87a037f2-49dc-4f2e-9b87-e0ab9e33e6bf.mp3" },

    { category: "R",  label: "raga", url: "https://cdn1.suno.ai/66306a64-7d69-41d5-af3b-a5cd8b97bcda.mp3" },

    { category: "R",  label: "raga acid breaks", url: "https://cdn1.suno.ai/3eb81a35-01bf-4ed1-9d0a-2e16c37bd4d9.mp3" },

    { category: "R",  label: "raga algorave", url: "https://cdn1.suno.ai/6bd70f13-823a-47a5-afa6-e920a2403e6b.mp3" },

    { category: "R",  label: "raga edm", url: "https://cdn1.suno.ai/793d608f-effe-4a8c-8d50-0bfb94d288ab.mp3" },

    { category: "R",  label: "raga egyptian", url: "https://cdn1.suno.ai/53a3db58-4cb1-48f3-aacc-485856f2d2a6.mp3" },

    { category: "R",  label: "raga jazz", url: "https://cdn1.suno.ai/d3e0b266-9975-40de-8976-c9c5f4c4229b.mp3" },

    { category: "R",  label: "rap", url: "https://cdn1.suno.ai/f2641b81-838d-4d88-b14b-96fdd11cc059.mp3" },

    { category: "R",  label: "rap bedroom pop", url: "https://cdn1.suno.ai/c0f01afc-e6b9-4c2a-ac38-6ff5b2923227.mp3" },

    { category: "R",  label: "rap dirty south", url: "https://cdn1.suno.ai/ec098dfa-640c-4e17-9fb3-e6916bf5069d.mp3" },

    { category: "R",  label: "reggae", url: "https://cdn1.suno.ai/2936b669-c8f1-4b48-9378-50f3ea27c5d7.mp3" },

    { category: "R",  label: "reggae cumbia", url: "https://cdn1.suno.ai/64ecdec9-739f-46d9-a340-e3d72fa24a3c.mp3" },

    { category: "R",  label: "reggae dirty south", url: "https://cdn1.suno.ai/957ae02d-452f-4556-b37e-aa5f3d2cd27a.mp3" },

    { category: "R",  label: "reggae k-pop", url: "https://cdn1.suno.ai/abe20f6e-9448-4cca-8471-fda18568d9dc.mp3" },

    { category: "R",  label: "reggaetonwave", url: "https://cdn1.suno.ai/00e6749e-2d04-43a5-b884-3a2042f870e2.mp3" },

    { category: "R",  label: "rock", url: "https://cdn1.suno.ai/c83f7634-ccc0-4289-a923-3178de7f467f.mp3" },

    { category: "R",  label: "rock americana", url: "https://cdn1.suno.ai/ad446248-0986-460a-9293-04e06680bf03.mp3" },

    { category: "R",  label: "rock balkan brass band", url: "https://cdn1.suno.ai/cf704a6d-1a2d-436c-bc53-499f3e2f77f9.mp3" },

    { category: "R",  label: "rock dance", url: "https://cdn1.suno.ai/8aaf1655-519d-4c84-a70c-445a4351e8a0.mp3" },

    { category: "R",  label: "rock liquid drum and bass", url: "https://cdn1.suno.ai/b52014d8-a2ea-45e1-abee-de530e492aa5.mp3" },

    { category: "R",  label: "rockabilly", url: "https://cdn1.suno.ai/d1627c26-6640-4b01-88c8-0d4daeacb50f.mp3" },

    { category: "R",  label: "rockabilly country", url: "https://cdn1.suno.ai/ad44b27b-2596-4d88-abaa-b8e1453f9828.mp3" },

    { category: "R",  label: "rockabilly raga", url: "https://cdn1.suno.ai/4b8ae674-f780-477c-969d-f3432b3276e0.mp3" },

    { category: "R",  label: "rockabilly tango", url: "https://cdn1.suno.ai/93607f40-7e12-4c29-8354-2cf8c4268698.mp3" },

    { category: "R",  label: "roots reggae avant-garde jazz", url: "https://cdn1.suno.ai/5b160596-4f7a-4d81-b396-94b7531bdec5.mp3" },

    { category: "R",  label: "roots reggae flamenco", url: "https://cdn1.suno.ai/d73c47cc-15e7-49cd-8cc6-4cb2f48fe4da.mp3" },

    { category: "R",  label: "roots reggae house", url: "https://cdn1.suno.ai/b93d39b4-a7ed-4833-abbc-53258ee5b18c.mp3" },

    { category: "R",  label: "rumba", url: "https://cdn1.suno.ai/eceed265-766a-4638-a0e5-e7d454dd74e2.mp3" },

    { category: "R",  label: "rumba cape verdean", url: "https://cdn1.suno.ai/ef257884-8599-4f04-a30a-43e4ae25fc01.mp3" },

    { category: "R",  label: "rumbawave", url: "https://cdn1.suno.ai/4e79aa83-ef86-42ac-b064-5feae0ccb871.mp3" },

    { category: "R",  label: "russian afrikaner folk", url: "https://cdn1.suno.ai/660bf5fa-6cac-433b-a1f8-171a4fc7e7f5.mp3" },

    { category: "R",  label: "russian ambient techno", url: "https://cdn1.suno.ai/ac9f5744-2f15-481a-96a2-111d1b2ca895.mp3" },

    { category: "R",  label: "russian appalachian folk", url: "https://cdn1.suno.ai/f36ec58d-4697-424c-9c54-c0468842e46e.mp3" },

    { category: "R",  label: "russian celtic", url: "https://cdn1.suno.ai/a7f1d878-549e-447d-b1e9-afd7f34b8619.mp3" },

    { category: "R",  label: "russian cumbia", url: "https://cdn1.suno.ai/94ed4d84-a6dc-4ede-b952-56457cf213ba.mp3" },

    { category: "R",  label: "russian dembow", url: "https://cdn1.suno.ai/256dd1f2-3668-4ee7-930b-d028bca41ffe.mp3" },

    { category: "R",  label: "russian dubstep", url: "https://cdn1.suno.ai/d436380e-1817-45a3-816a-d3c511d8bfbe.mp3" },

    { category: "R",  label: "russian flamenco", url: "https://cdn1.suno.ai/f4fe0dc1-9fe4-4619-9cd0-5f60705325cc.mp3" },

    { category: "R",  label: "russian glitch hop", url: "https://cdn1.suno.ai/b7b92736-a9ef-4b6a-af35-6a8f3a2b08e5.mp3" },

    { category: "R",  label: "russian grime", url: "https://cdn1.suno.ai/8c88e307-7c0e-4f9d-b630-748644c233a1.mp3" },

    { category: "R",  label: "russian grunge", url: "https://cdn1.suno.ai/6096e837-4953-4f72-b685-9cec5f77c6a6.mp3" },

    { category: "R",  label: "russian k-pop", url: "https://cdn1.suno.ai/fe86a6d5-0da0-4dda-8e8c-156028b82621.mp3" },

    { category: "R",  label: "russian roots reggae", url: "https://cdn1.suno.ai/812c5928-d512-4fcb-85ba-c6ed02647bbb.mp3" },

    { category: "R",  label: "russian salsa", url: "https://cdn1.suno.ai/df1b9630-e997-4689-b81e-13a5ef36bc42.mp3" },

    { category: "R",  label: "russian samba", url: "https://cdn1.suno.ai/eeeb5403-380e-429f-87cf-715f3622889b.mp3" },

    { category: "R",  label: "russian techno", url: "https://cdn1.suno.ai/79a9f668-56a8-4ae6-ba78-fc37eb8ecac3.mp3" },



    

    { category: "S",  label: "salsa", url: "https://cdn1.suno.ai/8376bd95-9370-4042-a735-5bef27779277.mp3" },

    { category: "S",  label: "salsa polka", url: "https://cdn1.suno.ai/d054308c-3983-4928-b727-fa11576fb2cd.mp3" },

    { category: "S",  label: "samba", url: "https://cdn1.suno.ai/fd9ce88f-61ce-4756-9f68-88a36d13d671.mp3" },

    { category: "S",  label: "samba afropiano", url: "https://cdn1.suno.ai/511518ef-dede-4c52-868d-8a5de5374fc8.mp3" },

    { category: "S",  label: "samba bachata", url: "https://cdn1.suno.ai/c0cb9485-ecfb-4f29-b6d0-0122d6dd1816.mp3" },

    { category: "S",  label: "samba boom bap", url: "https://cdn1.suno.ai/32d438c9-2025-4e11-a0f5-e28ca1a11582.mp3" },

    { category: "S",  label: "samba country", url: "https://cdn1.suno.ai/f674d004-90fa-4b86-9b35-6e34a7c48ab5.mp3" },

    { category: "S",  label: "samba dirty south", url: "https://cdn1.suno.ai/5f9fc240-ad22-4c17-b97f-bc8d488bdc19.mp3" },

    { category: "S",  label: "samba soul", url: "https://cdn1.suno.ai/2ddd0ed2-b0d2-430b-822d-ee3dfa041fb7.mp3" },

    { category: "S",  label: "saxophone 2-step", url: "https://cdn1.suno.ai/02df2ebd-37dd-4d7d-9c9e-f13e8a7758cd.mp3" },

    { category: "S",  label: "saxophone alt-country", url: "https://cdn1.suno.ai/6d21bb21-1e09-4206-ae6b-34e5685af5d5.mp3" },

    { category: "S",  label: "saxophone barbershop", url: "https://cdn1.suno.ai/cb6b53ef-8bc1-41d8-81fd-30f5973dc6a3.mp3" },

    { category: "S",  label: "saxophone bossa nova", url: "https://cdn1.suno.ai/8ccddd3d-21dc-4dc0-8c1c-2fa863478d33.mp3" },

    { category: "S",  label: "saxophone edm", url: "https://cdn1.suno.ai/f49601b9-7ac7-474f-82dd-2269c892688a.mp3" },

    { category: "S",  label: "saxophone g-funk", url: "https://cdn1.suno.ai/e9d6b92a-72d6-4563-9f78-9ca871ed1141.mp3" },

    { category: "S",  label: "saxophone gnawa", url: "https://cdn1.suno.ai/e354fcce-1739-48bb-b451-1b0aea9aadfa.mp3" },

    { category: "S",  label: "saxophone opera", url: "https://cdn1.suno.ai/6fcf4b26-0692-4f72-9267-20ac8c13d95c.mp3" },

    { category: "S",  label: "saxophone shoegaze", url: "https://cdn1.suno.ai/8b2242f0-f915-4247-9136-e4549d4a0dab.mp3" },

    { category: "S",  label: "sertanejo chillstep", url: "https://cdn1.suno.ai/96787c3f-58f4-4526-a315-1b9a2341284c.mp3" },

    { category: "S",  label: "sertanejo emo", url: "https://cdn1.suno.ai/b7596cbf-74e6-4edf-9f4b-5bc19c312d5c.mp3" },

    { category: "S",  label: "sertanejo southern rock", url: "https://cdn1.suno.ai/8d4105ff-7106-4b56-92a2-9c658a592da7.mp3" },

    { category: "S",  label: "shoegaze afro-cuban jazz", url: "https://cdn1.suno.ai/28fdd3e6-3340-4c5f-b425-308e794cdc97.mp3" },

    { category: "S",  label: "shoegaze afro-funk", url: "https://cdn1.suno.ai/fa70226d-1fad-43d0-9813-a0a880d55d11.mp3" },

    { category: "S",  label: "shoegaze boom bap", url: "https://cdn1.suno.ai/f81b900e-ab1e-4af5-94cc-283889fb51da.mp3" },

    { category: "S",  label: "shoegaze cumbia", url: "https://cdn1.suno.ai/ecc77071-52b2-42c1-8d1b-7a88c23f7018.mp3" },

    { category: "S",  label: "shoegaze psybient", url: "https://cdn1.suno.ai/5a35c08a-578d-4b63-b836-626348d8b1bc.mp3" },

    { category: "S",  label: "sitar afro-funk", url: "https://cdn1.suno.ai/b9b6b17f-de16-45f8-96d6-a646c207c121.mp3" },

    { category: "S",  label: "sitar afro-jazz", url: "https://cdn1.suno.ai/2ff23a12-726d-4163-a9b7-dc9a85e2caa0.mp3" },

    { category: "S",  label: "sitar alternative r&b", url: "https://cdn1.suno.ai/41782ccf-083b-4b31-b254-d6e8c3f30c7b.mp3" },

    { category: "S",  label: "sitar blues", url: "https://cdn1.suno.ai/97e39cb1-9c6b-4de7-b0d7-859304c46a6a.mp3" },

    { category: "S",  label: "sitar bossa nova", url: "https://cdn1.suno.ai/e7be87fb-9dbf-4616-8149-6bbe8f3d9a24.mp3" },

    { category: "S",  label: "sitar bubblegum bass", url: "https://cdn1.suno.ai/6e520338-24bf-420b-ba6d-1073279a9089.mp3" },

    { category: "S",  label: "sitar bubblegum dance", url: "https://cdn1.suno.ai/4c847cea-10a7-49d3-b8c5-dcfc29195d18.mp3" },

    { category: "S",  label: "sitar cape verdean", url: "https://cdn1.suno.ai/da5bf718-28aa-4e11-b669-5da8a6ba32dc.mp3" },

    { category: "S",  label: "sitar cumbia", url: "https://cdn1.suno.ai/67350f71-6340-4337-98cf-6dae97433b7b.mp3" },

    { category: "S",  label: "sitar delta blues", url: "https://cdn1.suno.ai/2aaff254-85d8-4039-9a8d-ff40d99f32e9.mp3" },

    { category: "S",  label: "sitar drum and bass", url: "https://cdn1.suno.ai/92336f6a-b522-4d92-9a07-9c81e4161580.mp3" },

    { category: "S",  label: "sitar fife and drum blues", url: "https://cdn1.suno.ai/f6d4a267-934a-422d-af81-e7c2a2da62c4.mp3" },

    { category: "S",  label: "sitar glitch hop", url: "https://cdn1.suno.ai/a2d4ac5a-7382-46b4-bfc5-461067af10c8.mp3" },

    { category: "S",  label: "sitar goa trance", url: "https://cdn1.suno.ai/b6db30ec-726f-4611-ac92-bb046487173f.mp3" },

    { category: "S",  label: "sitar rumba", url: "https://cdn1.suno.ai/ffd3d3ac-c274-4946-93af-86dcd02af9a7.mp3" },

    { category: "S",  label: "sitar sertanejo", url: "https://cdn1.suno.ai/3ba7dbf1-0955-4128-8762-886fe051735c.mp3" },

    { category: "S",  label: "sitar southern rock", url: "https://cdn1.suno.ai/20d982c0-a504-4f4c-b41c-8e5362b4c55b.mp3" },

    { category: "S",  label: "ska", url: "https://cdn1.suno.ai/dc20fb9e-dbea-4026-aeb2-a7d0c3d0be05.mp3" },

    { category: "S",  label: "ska coptic", url: "https://cdn1.suno.ai/31e8d8a9-7cfe-4fcb-9e93-74e6715dd0a3.mp3" },

    { category: "S",  label: "ska liquid drum and bass", url: "https://cdn1.suno.ai/2986c9f0-551e-486e-8a7b-28d1296f0faf.mp3" },

    { category: "S",  label: "slushwave acid house", url: "https://cdn1.suno.ai/615a513e-8e89-4efa-87a1-c4a723af6841.mp3" },

    { category: "S",  label: "slushwave chillstep", url: "https://cdn1.suno.ai/f29caa02-49bc-4f53-88bd-a024d73ad72a.mp3" },

    { category: "S",  label: "slushwave dancehall", url: "https://cdn1.suno.ai/44fd3177-3b4e-44da-83de-39d6ebbfa80a.mp3" },

    { category: "S",  label: "slushwave new jack swing", url: "https://cdn1.suno.ai/e8815495-7051-47a1-82ff-e5e9b613bbf1.mp3" },

    { category: "S",  label: "soul", url: "https://cdn1.suno.ai/821f2ce0-593b-44ef-8970-3ad4dea9ba00.mp3" },

    { category: "S",  label: "soul dembow", url: "https://cdn1.suno.ai/859a7e0d-489b-46b6-847b-72f9db64a635.mp3" },


    { category: "S",  label: "soulful acoustic texas blues", url: "https://cdn1.suno.ai/87a7f1d7-a0e4-47de-9470-349c5e89add3.mp3" },

    { category: "S",  label: "soulful acid house", url: "https://cdn1.suno.ai/8e222659-592c-4822-bc46-e09aa8cb4ccb.mp3" },

    { category: "S",  label: "soulful acid trance", url: "https://cdn1.suno.ai/4319c4e8-604e-4cc3-aa97-06105450d464.mp3" },

    { category: "S",  label: "soulful boogie", url: "https://cdn1.suno.ai/8427e8e1-e3d8-45b8-a698-66eeea59c8bc.mp3" },

    { category: "S",  label: "soulful bubblegum dance", url: "https://cdn1.suno.ai/1474bfe1-dc33-41b2-b4e9-b5a6877c7407.mp3" },

    { category: "S",  label: "soulful cabaret", url: "https://cdn1.suno.ai/471f4a9e-05db-4b4d-ae52-82a6542c4bd7.mp3" },

    { category: "S",  label: "soulful chillsynth", url: "https://cdn1.suno.ai/61645f86-8227-4c11-802e-6e750328f816.mp3" },

    { category: "S",  label: "soulful city pop", url: "https://cdn1.suno.ai/5f202132-338b-4790-b370-04923caac3fe.mp3" },

    { category: "S",  label: "soulful folk", url: "https://cdn1.suno.ai/b107674e-df6c-42e8-9342-6ecbdac5058d.mp3" },

    { category: "S",  label: "soulful reggaeton", url: "https://cdn1.suno.ai/2d486d4d-f432-4836-a6f1-47ecdd6c8945.mp3" },

    { category: "S",  label: "soulful ska", url: "https://cdn1.suno.ai/cddcf044-9162-4422-866f-6a6c833ddedf.mp3" },

    { category: "S",  label: "soulful soul", url: "https://cdn1.suno.ai/4712f259-2800-4834-ad3c-0b3d7b7e554d.mp3" },

    { category: "S",  label: "southern rock", url: "https://cdn1.suno.ai/9455361b-74cf-4d19-bb39-050df4407c5e.mp3" },

    { category: "S",  label: "southern rock ska", url: "https://cdn1.suno.ai/6d103c86-baac-4f96-a6a1-12f41faa3b32.mp3" },

    { category: "S",  label: "spanish ambient trance", url: "https://cdn1.suno.ai/54ab2c5d-37d1-4cd1-be76-89069336b86a.mp3" },


    { category: "S",  label: "spanish acoustic rock", url: "https://cdn1.suno.ai/31dac8fb-0bf2-463e-8ed6-8fe59788fcea.mp3" },

    { category: "S",  label: "spanish funk", url: "https://cdn1.suno.ai/92a8c109-d639-4e92-8648-71eb6c1db4f6.mp3" },

    { category: "S",  label: "spanish mariachi", url: "https://cdn1.suno.ai/b4d1eac3-34e8-44a6-81dd-bc2621f1858c.mp3" },

    { category: "S",  label: "spanish merengue", url: "https://cdn1.suno.ai/2ab92c86-30cc-4c04-83ff-e923a9c8490f.mp3" },

    { category: "S",  label: "spanish pop", url: "https://cdn1.suno.ai/b6078715-1aff-4469-8ad6-bcbe146f15d4.mp3" },

    { category: "S",  label: "spanish samba", url: "https://cdn1.suno.ai/e2f70edc-56a0-402f-b4a6-a94749d84a9c.mp3" },

    { category: "S",  label: "surf", url: "https://cdn1.suno.ai/cfca98ce-cec1-45a1-8147-016c364089d5.mp3" },


    { category: "S",  label: "surf acoustic blues", url: "https://cdn1.suno.ai/c9c87179-2ec2-4490-9682-c20af321e37b.mp3" },
    
    { category: "S",  label: "surf classical", url: "https://cdn1.suno.ai/a305c051-095a-47d8-8da4-7a9fc254c399.mp3" },

    { category: "S",  label: "surf flamenco", url: "https://cdn1.suno.ai/dcb65390-4c26-42cb-8788-13eb2b7684a7.mp3" },

    { category: "S",  label: "surf grunge", url: "https://cdn1.suno.ai/8a24d5ac-c950-4643-8096-5753b5c0a715.mp3" },

    { category: "S",  label: "surf raga", url: "https://cdn1.suno.ai/f250f0bc-2a8e-48bd-b717-6a9dbba46900.mp3" },

    { category: "S",  label: "surf rock", url: "https://cdn1.suno.ai/4f318b9c-906f-42c2-8bbb-b75c9050994b.mp3" },

    { category: "S",  label: "surf rock boogie", url: "https://cdn1.suno.ai/68af52fc-065b-4b00-bee1-2a55919a8018.mp3" },

    { category: "S",  label: "surf slushwave", url: "https://cdn1.suno.ai/ac975f1b-5b86-4eb8-bb63-872e3516c238.mp3" },

    { category: "S",  label: "surfwave", url: "https://cdn1.suno.ai/269de6ff-ee91-4a53-b318-aabf3dcf2e61.mp3" },

    { category: "S",  label: "swamp blues", url: "https://cdn1.suno.ai/3371d33c-8086-435b-92e0-6e30b53b506c.mp3" },

    { category: "S",  label: "swamp blues boogie", url: "https://cdn1.suno.ai/7c3a66db-5422-40f4-a791-38f1fc38a767.mp3" },

    { category: "S",  label: "swamp blues r&b", url: "https://cdn1.suno.ai/074a8c34-fff6-456e-b8b2-0397fc5be61d.mp3" },

    { category: "S",  label: "swing", url: "https://cdn1.suno.ai/1210273a-a359-4f17-bd00-8751d0671b76.mp3" },

    { category: "S",  label: "swing bedroom pop", url: "https://cdn1.suno.ai/7eac6c16-532d-4bc4-997f-b41330bd2e43.mp3" },

    { category: "S",  label: "swing grime", url: "https://cdn1.suno.ai/be2e10cf-e437-4674-8813-aebb736b6b24.mp3" },

    { category: "S",  label: "swing roots reggae", url: "https://cdn1.suno.ai/a382a11f-accf-4a6c-a77c-e4c72d58e949.mp3" },

    { category: "S",  label: "swing samba", url: "https://cdn1.suno.ai/55506f1a-b32b-4a36-bdb6-f9786cb5983f.mp3" },

    { category: "S",  label: "swing sertanejo", url: "https://cdn1.suno.ai/b6f2b23f-c193-4900-b2fb-fcbfa802c664.mp3" },

    { category: "S",  label: "symphonic afro-cuban jazz", url: "https://cdn1.suno.ai/9f012a26-e2dc-4e2e-8cb8-fc47360a6415.mp3" },

    { category: "S",  label: "symphonic algorave", url: "https://cdn1.suno.ai/10ea61b0-8ab6-4ff8-82ca-f22f58180369.mp3" },

    { category: "S",  label: "symphonic bluegrass", url: "https://cdn1.suno.ai/964a9582-7303-4dbd-9283-2a75ddfbe1f0.mp3" },

    { category: "S",  label: "synthpop", url: "https://cdn1.suno.ai/7c41b46a-ff2a-4f93-b74a-414f389ec040.mp3" },

    { category: "S",  label: "synthpop coptic", url: "https://cdn1.suno.ai/c5a6733b-a2a1-4812-ae67-660175c58b8d.mp3" },

    { category: "S",  label: "synthpop hawaiian", url: "https://cdn1.suno.ai/52704528-fc1b-4b4c-bc9b-eab6b8ca149b.mp3" },

    { category: "S",  label: "synthwave trance", url: "https://cdn1.suno.ai/41d9073d-2f3c-4d86-8315-fc6406d306c4.mp3" },



    

    { category: "T",  label: "tabla hawaiian", url: "https://cdn1.suno.ai/b055cd21-0a00-4d64-838c-0b17c1955d5d.mp3" },

    { category: "T",  label: "tabla jazz", url: "https://cdn1.suno.ai/7222f8d9-7001-42f4-8991-ad55e2113fde.mp3" },

    { category: "T",  label: "tango", url: "https://cdn1.suno.ai/f1bc442d-f5b6-4bf2-8e6b-afca33eed62b.mp3" },

    { category: "T",  label: "tango boogie", url: "https://cdn1.suno.ai/ea6415e9-2a9d-4028-8656-1e245481f524.mp3" },

    { category: "T",  label: "trance", url: "https://cdn1.suno.ai/19b15fae-b2fc-465c-b0f3-f8d0a8d2b85d.mp3" },

    { category: "T",  label: "trap", url: "https://cdn1.suno.ai/652ed37d-daa0-43b3-8db8-6a09f320a5a2.mp3" },

    { category: "T",  label: "trap g-funk", url: "https://cdn1.suno.ai/41881b74-e65d-4f04-8c21-760f0d499915.mp3" },

    { category: "T",  label: "trap k-pop", url: "https://cdn1.suno.ai/3d7a74dd-5ca0-4465-9088-68df2be84dad.mp3" },

    { category: "T",  label: "tuareg", url: "https://cdn1.suno.ai/05d8f1cc-ba59-4b47-9554-cccb6f1dee61.mp3" },



    { category: "U",  label: "urdu acid jazz", url: "https://cdn1.suno.ai/80974de4-0227-4e17-ac04-2f4486ac5584.mp3" },

    { category: "U",  label: "urdu coptic", url: "https://cdn1.suno.ai/99612537-c336-41a3-8f6c-930755d7468c.mp3" },

    { category: "U",  label: "urdu drill", url: "https://cdn1.suno.ai/4aafe444-10e5-4062-b0e5-7101d5695460.mp3" },

    { category: "U",  label: "urdu electropop", url: "https://cdn1.suno.ai/ad26d5cb-63a3-44ba-ad84-bcadb37be08b.mp3" },

    { category: "U",  label: "urdu house", url: "https://cdn1.suno.ai/b583f558-8357-453e-975c-49a96e9ac791.mp3" },

    { category: "U",  label: "urdu jazzwave", url: "https://cdn1.suno.ai/53bcffeb-260a-4a21-919d-ecedc88a21d4.mp3" },

    { category: "U",  label: "urdu rumba", url: "https://cdn1.suno.ai/5e8ccd53-9bf9-450d-ba99-739204a99411.mp3" },

    { category: "U",  label: "urdu shoegaze", url: "https://cdn1.suno.ai/4f98f978-0f9b-4433-9a3d-8203bbc6a4ba.mp3" },

  ]}
/>

