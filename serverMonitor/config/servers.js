const serverArray = [
  {
    name: process.env.SERVER_NAME_1,
    url: process.env.BASE_URL_SERVER_1,
    developer: {
      name: process.env.DEVELOPER_NAME,
      telephone: process.env.DEVELOPER_PHONE,
    },
  },
  {
    name: process.env.SERVER_NAME_2,
    url: process.env.BASE_URL_SERVER_2,
    developer: {
      name: process.env.DEVELOPER_NAME,
      telephone: process.env.DEVELOPER_PHONE,
    },
  },
];

export default serverArray;
