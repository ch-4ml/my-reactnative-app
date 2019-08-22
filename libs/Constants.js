export function getCoinUri(coinName) {
  let data;
  switch (coinName) {
    case 'Bitcoin':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/d6/3f/d63fc54819cd3fb0c319021e2e7cd6bfee951e8ce2db9e948bd828f538272da6_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;
    
    case 'Ethereum':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/d6/82/d682f8ea9a54bd8e6106a32b7a061955ab3968511b98d2d2a0a9061179058e87_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'XRP':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/a4/3e/a43e9bf7d0fb8266b827c204fca01e5eca3c874ee08c753e67e645bc87db48f6_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break; 

    case 'Bitcoin Cash':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/16/47/164713b49759d69dc478c0816e8fb880a5ee67172f2ddcd9fad4ff579a95c271_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'Litecoin':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/25/8a/258afec846d75460557e53f6ee64ed0c742f2d20fde8c9331c80ef4b84f8443c_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'Binance Coin':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/6a/42/6a4292b04f81e3b4ea2c3961037f0473fa95b6d3ed95fa412676ee493759c77f_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'Tether':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/3c/75/3c751ededaa385fae137102e8d63c6b65ab2736ee2faee71af2879e72290417c_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'EOS':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/71/74/7174f563fd1e7a5614bc64f79217e31ddc57babe5c2aee6f5d5deac5373d231c_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'Bitcoin SV':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/32/0f/320f4b6ba965d5ab243c0084758b2cd86c9b4223ba1e71c7d302eb9525b1277e_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'Monero':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/e7/16/e7169028d7cabe6115e6241173cab4376a08d6b3310baad6910fd12afa3257e1_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'Stellar':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/26/92/2692b88849b4e1dfde7d3f059189ffdc54fc6e8e3900969870b2208911a01f80_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'UNUS SED LEO':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/71/d8/71d803fcaf5188b067e8bb0213376deed02a9515db1d90e19ce80049fa6e2add_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'Cardano':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/88/c6/88c60728ccdb9307ede533fdda364850467c13daf5793bb96e77358970f45095_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'TRON':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/ce/ee/ceee0b8480e7d2c32b044ada902ead720a5fbf36537b219d6803e5ac3b0549b9_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    case 'Dash':
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/a4/7d/a47d914d817f89bda522fe89e95c595dc848e87dfc99f0401f609b5d7aff080a_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;

    default:
      data = {
        icon: 'https://pgnqdrjultom1827145.cdn.ntruss.com/img/84/b3/84b33710cec1fbbb315a3f3381d8b2e321a50426f00c06c8f4d7910515558554_v1.jpg',
        youtube: 'https://youtu.be/5d5xRVhdNKA',
      }
      break;
  }
  return data;
}