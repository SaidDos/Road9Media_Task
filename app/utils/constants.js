import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const FAKED_SERVICES = [
    {id:1, name:'sunt aut facere repellat provident occaecati', type:'Trainer', rate:4.1,price: 2500, image:'https://studiojab.hk/wp-content/uploads/2017/07/coach.jpg'}, 
    {id:2, name:'aut facere repellat provident occaecati', type:'Trainer', rate:4.6,price: 1100, image:'https://2mhysdb906v0sbr2s3cus12x-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Speciality-Certs_Feature.png'},
    {id:3, name:'boat service provider example full market', type:'Trainer', rate:5,price: 1200, image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFRUWGRoZFhgXGBYYIBgYFxgYGBoXGhofHSggGB0lHRgWITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mHyUtLS0tLS0tLS01LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwACAQj/xABHEAACAAQEAwUFBAkDAwIHAQABAgADBBEFEiExBkFREyJhcYEHMkKRoRRSscEVIzNicoKS0fBTorJD4fEkYxYXJTREwsMI/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEAAgICAgICAQMFAAAAAAAAAAECERIhAzFBUSJhBDJxgRORwfDx/9oADAMBAAIRAxEAPwBElyBFiXIitLqIkNVbnG5yWy2smLEqRFGXVRMlX4wxF3sbQk8Tse13hqNYOsLGMSe0e94mXRfG97Abx8gl+jtI4YaIzo2zRa4QF5p8o0SSBk9IQcGkmU+ZQNrG8MyYhoReNYdGHI7ehlkOthHvtRC5KxWw3j42KeMXaM9jEaoRXlVYLMeQ0EL03E9N4hTELC14Vjoa2rdok+3QoHEvGPhxTxgsKY3Gv8Y8/b/GFE4n4x4OJeMLIdMbGr/GPBxHxhSbEfGIziBgyHixtbEfGIjiGm8K4rGPI/Iwz8J8NTqwO3uqugJuLsfrYCJc0lZUeNydIH13EEuXcFrt91dT68h6mBp4ul31Vx42X+8OFX7KDlJE1M3TKRY+fOAp9mtkJebc8rDTf5xg/wAg61+IyCmxhXF0e4/DzG4iRq/xgHi3DDUy9oj94cuo6RFSiZMUMovf8eY+caQ5Mlox5OFwewvOrdtYievimcLnkXy6ecfFwecdNB5mL2RosNXeMQvWCPn6Dmc3QeseGwU/6y3hbHojNaL7x4NYI9/oYX1miPE3CUB/a3HPSFTHorTKyITVRdOHyRu7GIzT04+8fWCmMomojolJlfcPzjoQyRZ79DHoTJh+ExyzWiRZjw7JxPsiXNOgEXGw6pG6EDrFQO8F8Px6fLGVu+vRv7w7RLiDZtLNUXO0eZcljzEMiVUubyyk8jAvE8KII7O9z02hMEiutE/URMmFsd3URXky5ltYllynMFoMSYYWf9QROmEruZ0V1p3j2KN4dhiTHDJY/wCqYkk4bTlgGnsB1tEAoG6x36NMO/oWISxHhuWuUo7TFOtxbaBNfSKmoVivPWLeGtMlElW02sdjBVKcTwcos3MQh1QqS5ko8j84uSVpxYkE+F4jqsFZHudL8osSsLhJjxRZFTSj/oj5mPf6RkDaQnyiOXhMTDCRDyYsURfpdduxS38MfJeLAbS1HoIsjC1j7+jVgyYYogbHG+6o9BGu+zlwaNHO5JJ84yg0KjlGg8J0s37DkCNbOSLkoCjAENe1yNGGn1jPlbaN/wAdJSG6qZRuwsTb58oT+IcdppQyNNRTfQE6/KJeDcInK0ztkXs7EqLzGs3gzWzC3O3PnCb+jnmTJriYyvmZQygd2zeO+nXaOWl5PRTdaB/GVQry80t84525W8Nx/wBoUsHqWCsF+9f5gf2MPGI4D2Mp3d8ztzsNjsDawJ8bQF4U4ePZ52uTMGgFgFyh2719SSATYWsOsacclE5uWEpvoHmpmeMeDMmeMHhTjpH004jo2cehePaeMeDKfxhiMkR4MsQAL5kP4x5NK8MBURGywDABomiNqFoPsIicQDAX2Ex0FyI6EFk60q9IkFMvSGmT7Nq43vNlabd0m/1gvJ9k1SUDGrlg9OyP454oyUr6EAU69I9ilWDOAcF1dUZ1pstRKmNLvYnMV57i0F6f2Z1jBr1EsW/cJv8A7odCU0+hPNKsNWDZTKQWFwDrBOm9ldSyEtVIGvYAS76cye9FSThb0sxqd2DsnxAWuCARpy3gXYPoWERdfM/jHoKA22hgBQ1s+bVCnTKC0wqCeWu8ar/8rp2W5qxca+4LfjCsdCfp0jgRDrK9lkxr3rDtpZF3jzP9lsxULGsbQE+6u/KCwoThaPM4gKTDTw77OZs+llTnq2DTFzWVVsAdtxeCL+ykkhftk3qdE+ndgsKESTJ0AtrBDCJ2WZlUeZh4pfZeAGDVU3U909y4H9NoC8Q8EChaTNlz5kwM+Rw+XmrEEWA+7BYUxbxggsFbc7GIEQjQxT9oUx0EoobXvDj7M+DVrqBZ9RPmZi7CyECyqbWOl7nr5Qh1oBKI+mNNf2Y0VhYzwbg37VtR06fnEk72aUBGizR49tN/NoMh4sy0mPJaNIn+y6h7LTtsw+LtZmvpe30he4V9nNNNls02ZOciY6++y6K5UbEchDE9OhTcxpfBNchpFzC2W6N5oFt/sCfMwRkezvDRa0km3WZNN/PvaxYruHZFPIY00oIAQXALaixUnUnWx38PCMp7RvwtqRSosZvL7UoShJy5SvujTMbkaXHK5jM1xdlqXYSnloSxu495eVl3ve2vSNBw2iYOSZjNIyZRKBCdnYaMpABa+1idNLQkcX4fJmMFloQDYuxmTHbT4blrC9tR4xjSo9FN+CrjdUZwvstiemqgH8/rEdJWJLpVAmrmdV0FgQcuQ+uUkX9PKDHpipLJFlCSsqgbXmPqfQL9Yf8A2Z8K0k2iLT6aVNd2KlnRWNgqgAEi6212h8cbOfm5HHrzozf7Qn31+ceGq5f31+cbbgnBtAsnL9jkkEm+aWpvy3tE8rg2iWYHFLK/oXltyjos4UmYM9dL/wBRfnFdsSlf6i/OP00uHSQQwlSwQLAhFBtvbaFPjjDKUSp7vIQkyWucoF94E7B62Yc2Iyt84ttETYnK++I/RHBuESVoKVezQjspb7AjOUBzefjF2pwulMsoZUuxJNsq7k6wWPxZ+ZTico7OD5R4bEJfX6GP0fJoqW5bs0AFhsOUeptNJYFxKW1t7CHQrPzV9vTr9DHR+jafB5RUESk18BHyCgthCkklJqgm5tr084MlhtAOqoqjtEdZw1NmGXlvpFyolzQukxb9SIbVijcVVCnwbIWX9vyNdRVOF8yFJ+pI9Ib6WishBOpjMOA5dU8yulpMSy1LMWsdTZf89I1CjlTcozuL87D+8ORHEvosU0nItrk63uYy/igk4jOvyVLeWWNMMmZ/qf7RtGVVdQXxKpVjdtADa1soGn1hR7sqfVGa8JSc2MS1H+sY/T0yVZTc6W1MfmThdXGMoFtft/i2tuY/RGMYqgQp28gMdDmcaDnpeCgtJ7JcDrS5sBZQNL7nXQ+UEcRF5T+Ck/IQqYLNdss2TMluuYoSDpZdrH1g19qmTpU0IU2ZQQc1mAII8dYHHYRl8aIuBSTQUx/9sW8uX0i7ILPOcg2VbKLczuYXeCWqThkpBkR1lhVfU6jS+WGPDpE1VszJp0B9SfWBqrCLtJBCFD2lTLSZC/enr9Ecw12bqPrCR7Su0/8ASg5cvba2ve+R7em8Slsqb0Zb7S5VkkecaX7FJGXDkbqzfQxn3tVQ5JAHX8jGg+xyXOOGpdlAzNl0OljbXWKrslPo0E+EfJjWBNojQOBqVJ8iL/2io7VF2IEsi2i3bQ9b28uUQkaOVFsi6adIX+B6YrSAt7zTJpPrMaClA1QZbZ+zza2tf6wv8DTatqe0wShaZMFxmOnaNy5RaWmZt/JP6G1JFuccZZtYm8K/FvGP2FpSMgdph2DWygEXYi22sMNFUPMUP3QDsBc3HnpaJxZakukK2MTFpXYMD2drhvesCL2boBtfwjLsf4yp7nsrX1FxqDyjaMXIM4KfeyAkeBLW/BoTKjhZGqCyy0UG2oUXJ5m8c0qTO7jcpR0zOcNwudUkTJ91QkES+fgW6eA8bxq/s6xRUEylc2dmLS/3roSyjxGRj/4inW4aiE5b5VFyT+cZ3X8VKk52k95luko/Cp0zTb/E1wFUDox1uAVByctC5YxUds/Q+Hi0tR/m8dMZ8wGljzjEOHvaTXysgZRPRrhUmN+sc7lxM5dMpuPEQ64N7RJVcVlS5sunnFh3J1wx5jL8L36BibR14nC5UjQrnpClx0t6eoDbGS2vTSD0k1BUhjLV/AMR520hM9pyVS085keXk7E3uDc23gSFN2g5wlSP9hpxmIHZJp/KI+1OHO0xLNYcx0EfMBl1P2KUe1Qt2S27ul8unPaPWH01YgJmzpZYjQZTYH5xRPhaLyYSNOg184+V0jKh6cogoZNaUu8yUGvsFJBHjrFHHUrnaVLSZJUMbsbMTprYC+ogr7Bul0wnKwxrC01h4aR0TLJqgPflf0t/eOg/kf8ADA+E8TyqiXJmNMSWzkZVLAZwQDdL79CNwQYaGW/lH584UlifJm4fMI7+aZSuykBZou2UXA0ZbPYcmeB2EcdVlIWktMeXlJVlb9YqspsRY6rtyNoHEabNk9nkkZ8QYLa9W4+UuXDiq2jMvZRicpvtAefabOnGaq30IKKDkJ31B0vcaRpHZfvtEy7CHRODGR4jSsmKTyw3Oa/gwFvwMaqss83MZxjcxVr6jNMv3Utflpt/nWHDsXI9GIY6SKioy3vma1vMRPwVOXPMDLdiLLrtowgpw8p/TcsqwsagakXFulvpGp8V+zmRJvV0ksh85mTrubFdWJCnTfkLaEwLsTehZ4TxmbIkVMtz2a5mZnNzlv3RkHNrDSD/AAlVGlo0+xTBOlT2YmZPuCkw3zZrcyb6G0JPEDlp01CLe5MUdUK5T8mBjxwDjyy58yiqbfZ6ru2OyTNgfC+g+UWJLyMtXx7W4eUpnSmZUW6t37uDe17HQgxYo/bK6i02mlsb65ZjL9ChjPeKeH3pZzozACXYyr3uy7jXa+49IBe8GbMOtidb+ES+y0taP1TwxxJJrZKzZZAJuChIuCNx4wG9owNqXp23/wDN4xbg3FwT2LuZYmWCupKmVNAskwEbX2PpB/8A+N6rtUpcRs3YTPfC94mxUEnYizX2udIWPlCk21RH7TjpI8z+Eab7IF/+lyT1Mz/mw/KMx9qs4OlM8lgykmxHkY0H2LzJxw2XmVcoZ8upuRnN76dbwPyEfA/sbamFCs46lnt1pU7eZIF2W+W45lTrm5xd4zxNpUjJlsZxMvNe+W4JJ87Axgs2qnUFSJyDvym76/fQ7jxBH1tBGOrY5S3SHek9tIVnz0uh1AEzUHne6wNw/iubPkzfs9QZLBmdkGU6MS2hI2he49wqUypX0usifrbYI/xKehvfTreAfB9O82pVJZsp/aM2yqSF16kkqAOpHK5D6YqtDv7OOIJ1ViampmLOZlZAHABRU1uttDfy5xqmOcZSZFpUm0yb0HuqL2uSN9dABuQdRYxjlFSy6fIyoDMOexOrNmZllqD8Iy6ta2touUgMuTPqXOdgDYj4mA1Cj7osEHr1N3j7GtdB3DuLj9onzJpDOW7qvMEvMihVumhGhVtANM9+esNT7Rnu3Zy5Kt0LNOI/kQAmBNFJKIso94gAEnm27E8uQ+cVTNUK83aWlwtviba4HPU29YT44t20UuWSVJgvHsWqakmW7u2bWzWRVF9+zXnfYt3rgwNk0ATxPXw6DkPSCUmWRct77at4G2ijwAsPmecRTPeMNJITk2QVUxg4Ue8JVl8GnkIPkjE+kEa9Jay0lsgYd1RcXOrG9uZNla37zqNjEFYlq0dGMgr5fZpgH+4GIsRm53L8lKy5f8c0KHb0UEA9c0ADnw5xbV0CKJkxZko2yyZpLOgPJZoOnPunMALW8WziTiGVW4ZPnSvhlurod1Yre3iDyPh5iMaxmeXcoD7trnocpdvkoHreIsDxhpYmy7nJOlsjjrcHKfME3+fUwnVie0foFOIKemo6ft3yBpa5R1IW9h4wdw+tl1EpZkpw8si4Ya3jNuP8Wo2w6UomoJqNKaWhIzbhW0390tBb2X4msqjdJgZQjsVOVrFGNxlNrHW+0KhKXs0JYHyf1k5mGyDKPPnFDFuKpMmRMm945VJVcpBY20C3GpiDhfiSmmyBMD2LasLG4J3BhJMbkm+xlzx0UDjUn74joMX6HmvZ+YKXEwhV1JWYpDKVQaMDm0ObkVUeKu4hg45pUqJUrE5K2WbZKhR8E0d2587Zb+C9YWZRRbCekwXZDYKovKuc5BbZtrGxG94PcD4pLEyZRzifs1VdO9YFXOiN4E6DzC9IpCaoXsPqmlm269D+I6HxjZeC/aOSUlVTApa3an3l2y9oBoRuM/lfmYx3FsOennTJL+9LNr/eG6sPAixi1gdQuYK97HmDYr4gw+9MT9o/UjAshKspuLqbXBvsfERmXE1FNOIzivZ+4m45W/8AMBqDGaqgC3YzaRuhsLN0O8l+muUnzhhk4nT1FTOnSXYhlW4a4YECxFjy8tIEqZE3aM14WpGOLr7uZahQRy1PSN94qlu1NNVcv7NidTspBI9RcRifD2FsMU7VsyK1SoUjQnn8t4f/AGrcW/Y0eR2UwmdJez5lA73d01vddOXMQvQ7tMX8awQ1MpZsi3byrlB99T70s+fLxjN8coO0UzpQIKm0xNmRhuCN7iHP2fcUq6qjN31AzePiIZsf4ZFSftFKQlRbvA+7OH3X8f3ot7FFtaFSirzi1BlzWrqUb6XmJyPrax8RGfGQ1mmHNYHvHQWa9rW84Z5VLMpqsT5CGVUSz+sp20zr8QU7MCIL4rIwpqn7T9ploW7zyXQtqy2ZWG4OvzETjfZd10Z3Ldb2BYX0vcCG2a32ymzkh6mlUCYVN+1k/DMvzZdjBFsZwwLYujtdNZcgg2Vcpt4kWvAvDcew2kmdpKl1DuLixsoIO6kcx4RMddlPfXv/AH/hXpJquoSZqORG6n842j2TVsiXSJTdsDNzOcpOpBYkFR0sRt4xgMrFUea2RCisxKAm9hvaGDDasqwZHKsuoKmxB66bRWmiNp2foDizCxVSjLBYTEGeXbbMAQAeRvt6xmdRhy1amTNHZVMvujMP9rDmIN8I8fzyrmqTPJlgZp3dQqObNybx29YvYp9mxW70MxRVSiBc3XMvMGwOca6EXsfWEnTxYpK/kjMMLpWppkygq1K09RyO0uZ8MxDzU6X6aRc4fwCZSJMltlDzXdUbe5lKGlMegv2mnXLDe7JMvSYlJs42J+jI3MeIgPitB2UsJLLzZas3vHvaORcHwAFvLxuKoFKwUZRLuVBzt+rlA6dn2nea/QqGP9JiXHCqpJkLoudF8wpzkeoRoJcPyw4M0nNck363XvHw75mC3KwEBsYH6+QPuszn0luPxaGM9YlNIBC+/MORfAbMfyjzVSVIkyV9xLMfE3Kpy5kTH81WK8s5phcb/s5Y8Pib5c4vaKgcbMcy/wAAFlI6d0Kf5jAALnSbm52zH/kBr8oGTB7x8f8APwgvUHXy/EwMqGGphMaJMcmZWkTfuKofwXUK38pZtPGBNJMGVXYd1GmTT45UVgPVpzAeUQ4hiHfHMBcpHUcx8o8YZNBXK2qStW/e710W3icp/kI3IiW9lJaPNZMZFsffcEv5zCGb6AL/AFdIpSntBSqlWGeYLu50Tmf3fIfEepPMwKmE5je1+dvwhMaGGW3by+8blQBqb2AGlumn4Q98Ge0J5Ej7NMlh8g/VsLDujk3UjrGXYdOIceN/wMan7HeGu1mPVzkBlKCksNrme/ea3QbeZMCJaPHE/HNXVSzLkyAPBQXJ+mnyhm9luI1GVpMynJli2VwALE7qdbm3W0N9LhiSldpMpM5vlGw9TyEe+G8IamR88zO0xy7aABS2pVR084baolJ2X8//ALf4R8hZxT2k0Eia8mZOGdDZrAnW17XAjommXkvZi9dXYaySlmVU5xKQKqhASNBcZjy022G2u8VFxrCEP/286aR95gPoDFLFaNJbNJmUkuS62vmmAEEi99HNx84Cz6OQNRMX+EMWv4e4LfOBN+jTlisv1Zf3/wAhjjPixKuZLmJJyMqlSWN8y3uvy73zgTRVgJ6ER040pIJdjYWsEP5tF3C6vDVBM6VVM99MjS1BX1FwYd7M6VGo8FYisyQUmEWG+a1rHkb8oBY4kiTNBpJt3zD9XLObKL6lWHugDWx0hNxTH6ewWlp3RfjE2a0zNsQR93n9I+YDxXMkTVYWl2N7qqnwNwdxblFZInBmlGSZdRTVU+pUlJyiZKA9wAG7Nb49iRbbWLntzxGmqqaQkmas2aHJAlkMchU3vbYXy+toziVUSplSKhp6sc4dkYNLViN75drjS4hjlzXe7ZaeYL3AlTArLfkAddPyhRi95P8Ab9hOl0JldWdlLpeykdhMQNnmC/6430uNtB57xovA/GazQFY5XG6/mOohfxXhtp6WHbLluwDDOFvvsTpCwcCqpZvLs1tmQ6j03EVtCpNfZ+gq7DqauQLOS5HuuNGU9Q0I/Ens/mqCTLFXLGzLZZqjx5PFDhji6ZJXLWlUIsAb6nxK/nGn4VjSTFDKwYHYg3gEmYxQUiSVMnVpfaK7LZZc9bX7qZhbW8QcT1cuYueRR1Q7P9o87Ke7yOm0b1XYZTVK2nSkfoSNR5MNRCxiHs7AB+y1LICLFJnfUg8r7287xFI1U5VV6MKkLNdQ6SVCk2BPXwhxnU+MTMN7RJEk01rMZaIHshtmI33HKDNfwTWy0yiQCo2MhgbfynX6QKCOimVPqa6SutgrGWL+KGwI9YpRvyZuTESkxmaoZGZmRveXMQCPEQap+KyiIiK6LLuUAy90nUkEWMEsK4MppqAza5Zb63BsPLUwaXgCUEulRJqP3Qyox8jcgnwNoajJFNp+AHN4on1LIZrs5Ud0sToPP0hopq8PTS37TLN1zjUkgOyqWUA7hd+YXnlsFuZJSXdWlmWddGUjbfXYxqns6weWaNDMQMGLmx2IzEAkczoN+QETKeK2OEMnoTOE8QXtZ0oupJXNYHW17E25an67CIcZUColHrnA9Rf/APVoa+McEkSD28iVlmKDcKWsV0zDLci9tRbmBGb4jiwd5PN1KEeA/WBz/S0KHIpIqfG4snnVBlhmUhiFIUDckbAetoZsSQZVUfCi28ANBp5KDCnQKDLk7l5kxLC2ly2ZQCOVgL+ZhkM4N2zA3VTlXyUBR56C/wA40RDBFUf8+vrC/iFXaL2M1uRkUfEuvz2hZr6oM+1vHr/aJkykiF2ubwR4aZA0xmsStiqG+rbA2AvYa62O/W0DWBPKNO9lWBU8+mmNNDMwmkEB2UaIhF7WJ36xm5KO2WouWkJNZN1J75dh337N1sv3Jakd0fWBM1hfQG38JjccX4cpFAtTpbrqfqTC7XYHS62kqPn/AHjF/kL0bx/Gk/Jm2Hteam/PcEfCY232YSJb0SKaplPaOcgcDKcx5b+PrGXY1hyyrvJFiNQNSNN99tLwzDh5JuCyqlxLlVEycMsxdGK3IsTuNATbbSNuOakrRzc0HF0zZ6XCAosKmZa9/eH9oUPa1jz4fTKJVQ3azTlUGx7oHebwt16kQjYVR0PYWqcZnS512zKszLlsbWtb/LxT9q3E1DVS6eVTF5sySAvbNcDLYXFz7xOnKNHa2Yqm6oz13mMSwDG56E/XmY6P0jwVgmHrQ04XKwyXJbckklr+pMdEUy8/2PzpQ08hmBnTntzCISfmf7Qw4VhGHtfOalte73CAAOZ8bx1XS1CGyMqeBQKfw1gSy1Rv2jTBrfTUa77RVJeBO35HFeG8L5zCn8REUqrC8KT/APLb+VbwomQTuSfMmOFL4CHkvROP2F6hcMB9+e/kEH1gScNacxFOjuOVwAbdDyiKfT2y6bmJeycbFh5ExLd+Clrpnqmw5sxlupSYPhYWPy5xf/Qri2h3gZNDm2ZmNtrkm3l0gjRY3PljKW7RPuvfTyYaiGmhtsLUdG0sG+8S/amB3v56/wDeClThlUiK70s0BlDdy022YXsQveB/l9YGiWre6QTzW9mHgV3EWQfTiWbSYgYeNj/yv+MXsKxASQexsgJuRYjXy1ECZlMQdRaPaLbSAB3oeNZgIugb+Ej8NYYKTjyV/wBRZi+JWMrCm+sSqLcyPImADZabjOjb/rW81YflBmRWypyBgUmIdjowMYPLqmW4LFlYWYHXTe4vsRyIinwfxY9M85M/cJuoYkd4G2lgbEj00iWkNN0bzUcN0E336WVfqFyn5i0Dpvs6w5tkdP4ZjfneE3D/AGnSCO/nQ+Iv+F4Yqfjqm2M5QejXX8bQqYZL0Wm9mVMfdnzhzFypAI2OwMEMPmPTqquMyEABlGlzb4fhJPwjQ/DY2Qw03FMpyqpMRixAADA7+sfKnimnyKJf64NYXA7tj8VyO8vleMuS20jo4XFJvoGcXVasDYg6Exm+F4CZkqdMIYNPuisABaUq23Owc6kjcDxjUKybSzHV9Hmg6qzEZjbW6k2brpzhd4lVBPKFSrkIqLLY94veyqlwDpbU7bk2F4jhVSaZvzq4KSEiVVJLloZCnQs4Xf8AWOiyZaeJLOz+kMH2cyaRUJ7xPe8TzA666ekB6rD/ALNUp9omSAkslwiOJjZwZvZ3CA6qroCT/piCE3F5VQFRG2GzixY66jl4x0KcbqzkcGKfEHeAPMH/AM+PSABF99fOGLEhqeX+bwFngX0hMaIBKXoPkI0n2OVoDT5PXLMX/i3y7nzjOhBLhvFzS1KTdSourgc0be3iNGt+7Gc1cTXjlUkzbcYfNYQq4joYasPkiaO0vdSLrbmDqD9YXuJpWU3jgPTSpCVxI/cYjo34GB5nzEp5cp2ay3YKSbKW6DlFrHD3Cegb8DCq+Ks+jn1jt4HUTzvyVcghxNhIkiW6zkmFhdgpByk62OukAe0JMa/h9Zhs6SktpqI+UAiYMoJ8LgX9DFapwWmlkkS5Tje6sNvKOiXG+0c8ZLpmfUnEFRLQIGaw21MdByfi1FmNpZ+n946J37HhH0bVUcCyGv2M2ZKv8LWmp/Sdf90BKz2fTh7qyZo/cYym/pPc+sHKHiBTzg1T4op5xW0ZaZl1bwS4/aSJy+csTh800gO/Csu9hMlg9GLyz8iCI3mVWA84leYrCzAMOhAP4wr+h19n57n8EO9srA2N9Jkr8yDFTE8DMkkPMCsPhYW5XGtyCCNiNPGP0FMwqkbU00m/Xs0B+YEYF7UKiWk+ZIVyTKeyghiQjDOBmtqBm6w7QYgEiGX2fYGKipzut5UmzN+83wJ8xc+AgVwrQpOlyc75Q9QZLH7q5FfN9WHyhywivlU9Q1LIN5aMSWO7uTubdBZfQwV5M93RoqtzMBOKpdMZLPUykcICbsBcHwO4PkY+zMUtzhZ4gpKqvRjTpmkSWIc3tmcAGwHMC/zhhZnJmPc5JjqpJspOYAch3rmLGFvUTZ3YoqO17c00tcknWwEGJPCNWyo6yGKuLqRbUH1g/wAH4GZKz3mC02YSliNUljfyLH6AQJDyEp8TKEh5TjxFmGnQ6XEfP0zKPxEeYIhuqcOBYiwhZxagTPlCi41Y/gIHY00QzMTllTZwTbrAHDJRYs3L/DBt6Yc1HyiSkommMstBq2g8Op8hEu2LNUVsCpVN50z3EOgPxNyEElp1nEsTqYpYnS5W7OVcomgPU829TF+gw2YiB5rpJUi6lybsOqy1u7DobW8YHJR7LUXLoMezvC0GJyzuZaO/rYIP+d/SCFXiLS50xJjrJyBxaXac4ymwBU2loWtcZ2G4NtwV+hxtaQs1OGaawKmdNOXQ75Janu8tSx9IBzatmJLMTrc+Z3Mcz5N2jpXH8akME7GZKMzJJM1yffqH7RiOhChZajfRc3gRFTEeK6iauXMJSAWCSrrproW1dt+toDzGuNNIsU2FvMlGaGX3suUmxPdzEgdOXrENt9msY+EUc5jg1j0I2PTxvHqZJdRdkZR1IIHz2iDOOsAF2fUlxc2LfIN+QP8AmmxpshIuxyjx0+Qj4GF44mWTdvQ7f4I1jPwzOUPRGzDkfWI7kkKiF2b3VUEk+g/CGPh/hdqg5prrJl9B7zeIuLW13P8ATGiYfg9NTAdkoudC25Pmx1OsTPmUei+PglLb0i/wfP7GkkJNBDLLUMLbEDzgdxVUB9VIiGsrbX1hcxHEBrrHLts7XUUUK4DQN7twGtva+tvSFjiikkpNIkXy2G/InlBrE59kzHckWvClWz8zseV46+L9Jwc25HuVNJXL0j3KmldiR5aRNhVUJQJaSJmbryA6aRfbGqcjWlsfAkfnG6in5OdyafQN7X90fKOiCfWEsSvdXkOgjogs2LhvhOqqKSVUpUSgZi5gjBlFrmwLi+tt+7vEk6nr6a5mSWKjUvLImC3Wy3a3moiDhLHaunoqZBRicmTulHGYhmLarbTfrBzEOKZxpprPh9QihSC15ZAuN9GvbyBjpS0crasrYPxUHHdmq3kwP0g0nEhG5jAaKWCi6czG48AYHSzaIdrJzNc94O6H5qQREJ2N6dBdOIrxhftIQtXz5lxZmXz0lp/aH/2nj9HrIekLKXZlZXPaCwFx712v6wlTZtDVzQ82dPDMQWUKgFwADY20GkKST0VF47I+H6tZVGhv3/tLso6ZZUsZvm2niPCIaKuyzs194qTJQLHslypc5VuTYX5nmYrvTODtCtjpWzRErnqWlU8n9rObIvhpdnPgqgn0jaKDDZdLS9hKWyonqxtqzdSTck+MZ97HOFE7H7bP/aTLrJHNJYNiwO92P0Ah7xqhXsXImTFsrAnNsDz1HIw1sVUtAjD8ZFNhUic492UoA6tlsBCPheJtMLu5uzkk+ZhWrMZnNJlUrOzS5OwO97W1PO2vzizhdVlh+Sd0g40p5s5ZUoXdzlXw6sfAC5PlDdxBgkiRMpJKovuvnYgEuQFuxPUm5iX2a4WwVqx0uZgtK11CX1bX7xAPkBEnGlQoq6dnBRQsy7MVC65dL33hrchSVRMz9pwWmnShJUKGUk+kWaaskpQySku1TNB7R+iknQdLi0WeOcL+1zZU9bmmljvzMpysdLKCd79RpC/U1GZr7DkOgGwg6EkmiOYBY3iCrpWnq1SlRLmuxJmyxfOl2yrpbKRa1gDcCwAsII4NhD1c3s1uFGrMATbw8zBT9LmkmAU4S8vMCxQasRYtpbUDQRE4KS2bQnixVw3Ce1VmadLlhWy9+97+CjW3KLkjh2UQC1Wm+wH5kwaTiGVUzv8A1dPIdiLB2Rtx94qrED0MWxLpZd8lLS2b4jMlZb8x975iORwa7PSg+N9bBlFwpTFjmqgw5KuUH1JvBkcH0gW6Tpit1LA/TQdPlFatrpbS8ol0bAckJNvIiXvAKprzL0yhV6BJg+d1AiaLuJfxCW0tBJzK9mvnB1PoRobaaQt1fC80sWTKAdQp0t/nSC9Lj8kfCM3Owtf6xNO4lA2G+wGXS/Xr5+ML5EvF9sB03CM1v2jhR4Xgzh3D8iU1yM7C2+tjvYeO3zgVWcVMNyq/U/Ly0gU/EXRjBjNiy44mgzatVBOgEUKnG1UaHbaESdjRO5aKz4p0X5wLhB86Gitxxm90axTlL8cxvGAAxA371/S35wQpTJmaZWbrck/9o1jxGEuY+V9fKmGzk5QNMvXqYH4hKkgKZTsSdwRtBVqSR9y3rE8jA6ZxczghJtrqR42jojClSo5pclu3Z7wjiyXJlIn2dHK7lhvFqgljEZru0lZUtBoEFhfx6mBk3A5CnSdnW+40vDThGOSpMkypaAeI5+cbxk3qXRhJRW49lF+FacG2eOj2+IXN9NY6LuHoj5+zaKNaGRLlykmCyKqC3MKAv5RJjAlGVMXthZkbuk76c4ScEpZTW7BhMA1ILDQnpAHibiyfRVPYypaDNbPmGe/lqOUYQi32Ny+jPaDb+Y2+cfoX2YZ/sS2WWwudG0PzsYx/i3iQVjSSJCSjLBBKi2a9voLfWHLhvHqWnp5cuqEzvd5TLZl+diCbRSh8nFCfItSZ7/8A9AX7GmvLCntG1Vrj3NthCJM4eSTYpM7Quina2TMLkee0MntHm0tYKVKWZMazuZgdmbKthrck26esQyZFxbpp6CE406ZanaTQty5OXcQW4ewlquesldgM8wm4/VqRmF7aE7D16R6xSWqqSdhDnwZQTaSkaZ2KM86zsCwN5du6muzAEnpcw4Qt0NypD/KrURR2YyqoAsNgANoB8acSNT0ZB/az7hAQO6h3a3gPqRFdMbkiSGswJPuNZTz01sDCDxTiDVE0uxOUd1AfhUbCNuWMYqkRBti6LbxYw+dLM5Fmm0u4Mz+AakDxI09YoVMy0ep+GzpaiY8tiHAIyd/flpe0crZtQ5Y17a3/AGVHTCWB3VZ9SLaaIP7wNxLiCVUFBNnTKiZprNsArHkspQANeZ10jOOwftLhGBBvqLEa3h3wVg6mcyqT8LEC5brfwgTbCSS2F8axF2VZXaMwXe50v0A2AEAKmblETzyecCntNfIRmHmR66Q2JIdMB4jnUtK0tJgKzL2FlNi25BteFmpn+pMfJtlAVRYDaB8wO5yo2Vhrm10t0tsYAoYMPxGbRIzihnvOmaBnlOqqvIDS5vC7ilfVT5itOcIWYAIO6RqN9LiDsjGsXQALXlgNg5Df8lMRcQcRYjNVPtIpyFPdYIlyQD01hvarYo2n4C2M4VLc5hmVxzlsVLAbsoGjMLajfS/OFWZRyxcn9c2ti7nfra9j84u0eOh9Hvl0zoTzFrNe+jDS0y+wF7EXj7VYdnYtKm5vBu6/r97z+phUns1trQovIykgixj6LgWDMAdxcwarKV1FnT1t+YuIGzJI5H6xDiUmVVlAcokHlHMpEeR5fOEBBUtr/eIYlqPePp+AiKJZQWl4TmVWWapJAJB5eEWMKlNIcswDAi2hiBqQBR3hsNjEJVhzPziqom7Gb7RIfe6nxF/rAfFUQLmTfoOcVZ0uYtrnePKiYdodCs9UMzvAkW0sfGCLzQOREDC0wco+NUvzBhp0Jqwqs4dY+QGNW3+COh5k/wBM/QVd7JaFEeYjTZRAJujsLWHICM79onDMujSS4nzJjMbqZguTpcgtv846Oi06iyHFZIUZc7OQbWgpxPWgLTjon5x0dCyabZOCbUSxgrhUB5tr6coMpVaR0dBbY8UtAqrrVeaFdC8tdXAbLc/CL9L2vHqfxHMLFEyyR4ZiT/NqT9I6Oicn0aKKLuGoAO1aY0x2uATfQc99Y+1UyOjoojyL0+ZeYNLgan8oMSMU6j5R9jozZqug1TcbTpa2z51HwzUSYPmRm+sLHEPGbz3/AFcuWmUW/Vp2YPiV5mPkdBkwUV2BJuMTSLEg+kXaCup1W47UTDvmCsLc7EWPzEdHQ7BxRNWT5ZUtLnBzzGV1I+Yt9YFU9YV335x0dA35El4L8vEzEdbUmYQDtb8f8EdHQ7BLYMvnYHa97W0ItYbxOlU6aXuN/wDvblvyIjo6JKLVPizH3S3ob/RtvmYkOKZjbMjHoysD9LiOjodhRIUYj9kmvMWED6iQeQA9T/aOjobEgXWJZvT/AD8Ihj5HRmy0FJFfLCZHlXb74JBt0PWPomySdCw89Y6Oh5CxLU2SHIyzs/S6kQaoeGqsi6Ijj+ID8SI6Ojo44qWzGboirsLqZZ78gC/R0P5wGrq4qMgWx53tHR0TyfHoXG8nsDlo6Ojo5zpP/9k='}, 
    {id:4, name:'lorem todo list services anything brother', type:'Trainer', rate:2.5,price: 3000, image:'https://www.davidlloyd.co.uk/cms/images/softwire-david-lloyd/image/upload/v1/Gym/mqe3t0qvd4e20s1i12kh.jpg'},

];
