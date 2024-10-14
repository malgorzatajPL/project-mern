import React from "react"
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const PLACES = [
  {
    id: 'p1',
    imageUrl: 'https://storage.googleapis.com/kagglesdsdata/datasets/2904702/5006163/0000955e-5196-4ae4-91a8-a452f6e6ef77.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240909%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240909T111014Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=6a9d32617344ed288985a20eef811f81cbce73b120a212b87da753539c0c000098960ef4f80d5338b5c82bb504562c8f47e959ac2b0f3b741c77743ea9e1ffc652e01dfd2c99855eed8a3f169e1763a9bcdba12b0ecd39d50590cd52b203fbe80e893e76f4255f88c00a43e746b8850f880628ce0cac899d6a6f432f9d5ab6ddbaeafd0253329c6fc241b865d6bf3a145d347a7f9be1d763cbc352b4a0e68e83567850b491f38ebfbc00f9f7c10e09c515c4c7ae5b8d4e6b9fb2598d6e7db9fe694da90d81963aa8f42f76b76183fb1b821c63b1cc342ecb7a60155b8139a956627b3cf7e11752156502e1ed6077a176783e1d5621b0492960d53e7c37a45b52',
    title: 'Eiffel Tower',
    description: 'One of the most famous landmarks in the world, located in Paris, France.',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    creator: 'u1',
    location: {
      lat: 48.8584,
      lng: 2.2945
    }
  },
  {
    id: 'p2',
    imageUrl: 'https://storage.googleapis.com/kagglesdsdata/datasets/3613292/6283713/dataset/00012.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240909%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240909T111127Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=701fb6141dffb2b9e367e9d002c3d6abfc605698bb324feb57c82cd877b7c1a29dfc153118ae2f56e08bb5d6967de562e5ccad1e752824859245fdcc6f7178559e6ccaa7127f452b9144fe451e3f0cb3a95074becf099b5b2f630acd91678a209d3f93d8175a8f15f2d7740a5d23e064a4a9349e26d52305457105ddf7c4288ca2ce00702d90eebbc7bf9bf71550ccd658fe32e704b94473def8bf6a3c075ec7c80f87d3e02172c16f23cb274ce846e6229fb2aee25268412e070b282af2d9b04cc9873af89abeac5f64b850184f91d35ceadd3c40dc704da05a9b9b75fbb11a71483de848e2fb868afd3725b90cdc381fce9fa34bfd9542712f5c7e46de894b',
    title: 'Great Wall of China',
    description: 'A historic series of walls and fortifications located in northern China.',
    address: 'Huairou District, China',
    creator: 'u2',
    location: {
      lat: 40.4319,
      lng: 116.5704
    }
  },
  {
    id: 'p3',
    imageUrl: 'https://storage.googleapis.com/kagglesdsdata/datasets/3613292/6283713/dataset/00002.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240909%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240909T111127Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=3c410064a2c37311266331d5bfa20d0cf331c27813d2564f261db815e14fa8a40fb1aba7fdf3ff2f448a0687fbf10113b9495d204d4cc2fa28aa9466432b979dccd6631714aaaee73d527e8b2273082af31f2c8cdeeda16ad06080bb09810d610ecf7fbe03dad803e8de6f58dc687fd2754905ce00e3df7b49862cf9786436d11b2008cef34f345fdee1ded357381ec1a9ba6807612a52b8326c09ba6b35b14cc1b1a7f1a3a1a88603a5742aa4db67d84f2912b6e88c1b0cceecd6ce694e943639e52dc7562bf298e6b1415a4ca0dec2ae45303c1d7825ced73063e3d6a7e6e81ca24e3ecce2076a15153bb26b5b8251e0b6406d4334a7c07d65983031622be3',
    title: 'Colosseum',
    description: 'An ancient amphitheater in the center of Rome, Italy.',
    address: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
    creator: 'u3',
    location: {
      lat: 41.8902,
      lng: 12.4922
    }
  },
  {
    id: 'p4',
    imageUrl: 'https://storage.googleapis.com/kagglesdsdata/datasets/3613292/6283713/dataset/00010.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240909%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240909T111127Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=05007e30f92b01c49c4514cb0ed4e856d4a2b6184e53ad27ffa5a737d4f38f6e429dc3f18c37ed9b9c651467f26edad7215b40a877f77c35ac08638139f6da623601d9fa80756b5c0d423274c80a96ab05148c2d2d3f4e42eb148e5e28b385ab84f63b665c6100d6bd5f63b3e678c7f3917b1abc0e92280f85f8413a2e939e186b2ccfc537205af06de06a2b78dec2ab73647e65a0df2837d94a36e4f9ef23d8b7b633b5e24eb2bccf9fbb46f626218e585019cd459310052f62beab6eeb1e233548afb938bde481d98744f080d49f4eda30fe15343cf008d514db180f838b87b342141961ca2ae0fcbb5836cd150c2b84b54a414d596e1af0af1bb8a036fbb7',
    title: 'Statue of Liberty',
    description: 'A colossal neoclassical sculpture on Liberty Island in New York Harbor, USA.',
    address: 'Liberty Island, New York, NY 10004, USA',
    creator: 'u1',
    location: {
      lat: 40.6892,
      lng: -74.0445
    }
  },
  {
    id: 'p5',
    imageUrl: 'https://storage.googleapis.com/kagglesdsdata/datasets/3613292/6283713/dataset/00018.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240909%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240909T111127Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=4865dc1a9601733a80ed216a32f42fd46e5074693ff08a1421b62a8fb53e85c91c55bbe120448938765f4dcb85b9b772cde5a19ad8fea483da1884f41fb02a371f43a4521f87f105cd71d7fd77a57fb28db2559fef85693e324fe18c168f8d2c56a4659a8bb2deda579aa4d652ceeaaa418707fc60eb68b74ad753c1db5a781d6ee75e906599f507782d36636132277a2895cdf8e2755034ad9bc0bd1cfd0a63634987980927bb4700c9e79644581443f98cf63ea9b871a66d4e7082d3d3169f7f72966ea4ea05bc1141adba01238cc94b972452aafc0e3b9502478be27bb681a5966509656f6cfc747bc74aaad82eb68e9bb4b369249add4887f4fa032248b2',
    title: 'Sydney Opera House',
    description: 'A multi-venue performing arts center in Sydney, Australia.',
    address: 'Bennelong Point, Sydney NSW 2000, Australia',
    creator: 'u4',
    location: {
      lat: -33.8568,
      lng: 151.2153
    }
  },
  {
    id: 'p6',
    imageUrl: 'https://storage.googleapis.com/kagglesdsdata/datasets/3613292/6283713/dataset/00020.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240909%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240909T111127Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=213e5b8212cedf8385aac2d77ce917d717b159066d12ffa17d38e224cb8921bb8fdd21ed8ad288def29eaeeeebdd045f418e2128738e2c50b1ebce96f17c227c5d51cde78b66b432873f0347834447a3c418e82434e582f7b65ad0dae4d4be418d8340984db9bc27571ba21cf56a94393b5dc7c293d785093e70d1cbfc6927814053742e13d167235384167e0ed4bfae07f0e2ba7204f74f896f7c606076ec97e890105e8e6e685402620df615b62c1a179914b0d95303fa5878e07dd0e05bfe717f2a78fca59103a6dedd257cabd72c7941117a0c9f67343b853f6aeda9e0eb2f6916456b3b00e7a57618a7fc91cb32056d67d8666c0e7ea53b9d82442f2b64',
    title: 'Mount Fuji',
    description: 'The highest mountain in Japan, known for its symmetrical cone shape.',
    address: 'Kitayama, Fujinomiya, Shizuoka 418-0112, Japan',
    creator: 'u2',
    location: {
      lat: 35.3606,
      lng: 138.7274
    }
  },
  {
    id: 'p7',
    imageUrl: 'https://example.com/images/place7.jpg',
    title: 'Santorini',
    description: 'A beautiful island in the Aegean Sea, known for its white-washed buildings.',
    address: 'Santorini, Thira 847 00, Greece',
    creator: 'u5',
    location: {
      lat: 36.3932,
      lng: 25.4615
    }
  },
  {
    id: 'p8',
    imageUrl: 'https://storage.googleapis.com/kagglesdsdata/datasets/3613292/6283713/dataset/00025.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240909%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240909T111127Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=547adc91b4ace245c87686277ea51c0431f481fe1795f52c95c8ef974ae64bdb36e9e0c0b9966b4e836aedeab721fa3ba789a0a1707374992d42f9a1099a01ca4dffaf6b67436c20efeba70ff53af181c385220c8ffd0b50c9979fd4af5bf88ff4f4407202ee00793a17843cb8af8641f2ed945cb88914efe6611e15a1882aaabe42994945806e9b4a86fa472d68a12b8e4e921e5609ec107e78d99f84c1a35ea376baf98576bdeae306fb3e056f526ab302e6cbb69c7e84ca08a372954b71f5948c99fb9da3fba1a5235435275b5146dce285f92383ae150dd3fd233c65d0173a2a9666973966c7824aad7f503bb7f52d3fa9e88360afa0d257eda55745a651',
    title: 'Niagara Falls',
    description: 'A group of three waterfalls at the border between Canada and the United States.',
    address: 'Niagara Falls, NY 14303, USA',
    creator: 'u6',
    location: {
      lat: 43.0962,
      lng: -79.0377
    }
  },
  {
    id: 'p9',
    imageUrl: 'https://storage.googleapis.com/kagglesdsdata/datasets/3613292/6283713/dataset/00026.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240909%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240909T111127Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=6f805fa952fcc6db91394b8a312ef46a1b14c70e6f29d80dadb2e745848899283e4e29f8aabaff1e597f4ab0a20df81d8fe39d0d3751aa8a0f84e4dfde0cf36027075c79b451da013fef5d7ca8e77ef887413a187451e7684107554a10905bc47cc703d12e70ae60e6cf233e8aaf6d56dbf59505bb22edd0e1380b54a78fdca68ee172661c5c23096d708e750763d5a30964077ddc0526381b69742e5aa043f1b5dafccc14a624f89229af5c0057da1cbaa28a63b328a5679b94f0768ddd76587bf78e7fea1eb9488075f59961d69aee1c408954241247d347cf2aae86216cbcb8963e22f031196f7ed2d8dac17e693ddfd4c9c183eb7f17243738b8484c26d4',
    title: 'Machu Picchu',
    description: 'An ancient Incan citadel set high in the Andes Mountains in Peru.',
    address: '08680, Peru',
    creator: 'u7',
    location: {
      lat: -13.1631,
      lng: -72.5450
    }
  },
  {
    id: 'p10',
    imageUrl: 'https://storage.googleapis.com/kagglesdsdata/datasets/3613292/6283713/dataset/00029.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240909%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240909T111127Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=70ca6f2c7cec9794ff1c0a3c1e572da7ccee8d9327bc9eedb0975fc5816a46f985914e5e4d91ac8541a6e747317cbf9dba57e8501b43ae9131a74d6a1562395d70e33eb7531fa4b7d5acc9b53cf573d35344c254a2cafd57ee11fd44621229bbb08c3165be94e00c11ed1c24ad0874d57e848dc156f7e77ee5c260dfb4436712aa6143e49aa44b7391f9ed07836ab8c21bf2369346256cf79c727011ea6d630d1d8decaefcb586f021cabdc6e8423187e89ae336ce0ad0288d2c5659707202ba66d211b9f75692a74dfee41db78baf3f350b5af0a1f775c21bb75ad2ec4b730446e038df8f50611cc3430ebacf33f09211521dd38cf8662c0c7f3c964a975682',
    title: 'Grand Canyon',
    description: 'A massive canyon carved by the Colorado River in Arizona, USA.',
    address: 'Grand Canyon, AZ 86023, USA',
    creator: 'u2',
    location: {
      lat: 36.1069,
      lng: -112.1129
    }
  }
];

const UserPlaces = () => {

  const userId = useParams().creator;
  const loadedPlaces = PLACES.filter(place => place.creator === userId)

    return <PlaceList items={loadedPlaces} />
}
export default UserPlaces