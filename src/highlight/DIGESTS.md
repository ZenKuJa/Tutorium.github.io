## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"
  integrity="sha384-5xdYoZ0Lt6Jw8GFfRP91J0jaOVUq7DGI1J5wIyNi0D+eHVdfUwHR4gW6kPsw489E"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/go.min.js"
  integrity="sha384-HdearVH8cyfzwBIQOjL/6dSEmZxQ5rJRezN7spps8E7iu+R6utS8c2ab0AgBNFfH"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-gRTR/fmk+6+ygbihH/fJvHgmffnOrd/eO7DW5zgu1uN9GBohtDx+OBs0DI0ejigB /es/languages/bash.js
sha384-Pg7b9hYE6kefjcNqAabhv8jOLCVoZubUaM4bZFjUJd0CaaQ14ksDI0GVllMtAF4S /es/languages/bash.min.js
sha384-lk+aAr+DNq8Rz3hXPSZ7ga38GS+tQfXDvexuUnyDCSju1t1SAsLipVIFGlRtcUjE /es/languages/java.js
sha384-5GpB6kfA2w03pZhAUmmNSYvR5pLvne/Rzqc22BmHv+t9ES7ifMX/ZE7x5TBeqW4d /es/languages/java.min.js
sha384-g7t9fKR5Tvod4iWv7BQXN+/JMn5GT9sD6FG3h7Fgl+KCv5k4NnnCzEqUe7BMJ9Mv /es/languages/javascript.js
sha384-f7huPivS1dV2T5V+g0aJpgsY7WBHWCsioIq30tpNoXGizD65fWJYGuXXVPNI52VB /es/languages/javascript.min.js
sha384-Cmq5lORXzyHraasLNqmfchH07JRXyEmjDF+j6tSggoXjYHwtgX/ySW6kkRytM5uu /es/languages/python.js
sha384-ZV5sgX70bBgLkDR5Mtox5UsbJedBc39hRKPdvTw6miK4lSkE/wv94cLY2iyZb/sB /es/languages/python.min.js
sha384-9jy7CI5TLYs91VYlZ4S0czQFpDsMzc9jakiJ5RqCFZugGpdPglP94JPAyEhMBwJp /es/languages/python-repl.js
sha384-CO+NiDedness48VlHW0FCIw9rQt8szFZ0IOXYiQo3LEAHLytXxM5NlKnmNYBUACQ /es/languages/python-repl.min.js
sha384-vAVurAb8AMWBKPHNWPze2lJa7m/as9wrF1wzH1FQKrJNNqiemBLJi3y6aGdyu5Zt /es/languages/r.js
sha384-WkipJgUBRzr12T7CtL8kF6QTuPHAl8f7Sx1YnmOm3KiVA/k3eDXfifuSvUW9M5nu /es/languages/r.min.js
sha384-Jrkpn2hK0TY04skYBXB9fj7mMpKYy7g726cPwXGXf6mdBXnFlTDXFduxikMCRXT7 /languages/bash.js
sha384-BbT8tZtvkh8HPXIvL5RtzuljBwI3gR5KIdYxZyYSyI5C/+KNAGdzAiexvmxuroag /languages/bash.min.js
sha384-Dprg6CdFFkimxaHg7qM7njVaWLMlOLqughixPERBDbm0cHdX6rKujTnJReof8O6m /languages/java.js
sha384-e+59xEZvRMXSRGD31B3HOBGAGqhhs+bbkxCqPuJDkSX5QGneIGTIfwdYJckTN3AO /languages/java.min.js
sha384-yxv7Fv9ToggiLsR67t98hV5ZRup6XX6xL1Rkbi/cGV5J8y7fosCi9POqlBkiBWFg /languages/javascript.js
sha384-tPOrIubtDHoQU7Rqw0o88ilthGO0/4xEZGB47XrQKWhrc1/SchwsDx+AP74u4nk0 /languages/javascript.min.js
sha384-ueSSFZFqg7cVD0dpEqIk9EefJiJUYan0PH6I8u/p+bNLLx7dMs4J2keMaFXqCN8P /languages/python.js
sha384-eXRt+aAa2ig1yFVDQCLis8k9s/1dikTcigj+/R07yNdIxc8BAG/b1uHDyEW3of17 /languages/python.min.js
sha384-Zr5t2YaLU0giGFY/MuBA8UrK47JGpd9DuryiosYFRSQ6EJfTIF9mt8IJp/4/hpOU /languages/python-repl.js
sha384-n3iFvvEGhuJlnYpLj6JaCg7WiOhd8kQfKTZBDnpJwFZ0puRMhoq9JWtKDRw5Snyq /languages/python-repl.min.js
sha384-Wnn+wk2C8+hIgCNyvLC1dFTsN01c/yrpVqpKDNYF1M0Rg5kYCCmO8o8lS/yY3w2D /languages/r.js
sha384-poz1JEq/ihCmK+1p8IXPoluMlou+rnb+4Q3DenGB+mkNBB/JZkT0c/TERX8D+RUX /languages/r.min.js
sha384-g4Mefgc/RE7yTHy8EWpFdMX2RE1X9DFO9gIK2t3fTl5oqWI2B/5EVr9hN42sJmT5 /highlight.js
sha384-HbKF22POLsI2dO4lBQN7CkWgH1x36fqUMZ+Ge0o5am7hlonzyKKF21/XABBRopBw /highlight.min.js
```

