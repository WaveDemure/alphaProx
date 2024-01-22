self.__uv$config = {
  prefix: '/service/',
  bare: 'https://bare.benrogo.net',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/contant/uv.handler.js',
  bundle: '/contant/uv.bundle.js',
  config: '/contant/uv.config.js',
  sw: '/contant/uv.sw.js',
};
