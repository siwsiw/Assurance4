import React, { useState } from "react";
import { Component } from 'react'

// styles
import './profil.css';

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import avatar from '../../images/avatar.png';





export default class Profil extends Component {
    state = {
        profileImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABU1BMVEXqoR////9AOzVjkODnnyD/4dn7+/v+/v5ijt3poB/9/f3ooCDd3d373tbmy8Pa2trpnADZv7jvpB5BQEI4Nzb29fQzNDb/5t47ODXyph06NjAzMCrrz8fi4N1cjODqnxXwogAuMjYuLCW2gSfOkCP55sn99OfemiH57elZidv227T++vPXlSKJZi2QaixHQTtzZ2FbUkyYsN/11aWufChcSzJIQDRtVTB/YC7tr0nBiCW3opulk4zFrqdhV1GXhoC4xd7U193vumj25tHxxX/00Z3us1fvxotfTTKhdCrwwXu5pJ2Edm/Fw8MgIBkpKCtOaZufstY+NSRYdq91mdy7m3fTnlCal6VymeDGzt7GxsecrMzg5fB5lczsqTdMQzOQj494d3ifnZ1jYmN4a2VGSVVPYIWEkrq1mYDFnGWVlqp0kcqFkraMqN+/wcmyuMm9zO77GQtLAAAae0lEQVR4nNWd+1sbN9aAZbAZfMEeO75jz4CD7YBJCZBATKDcEkho0i0pSaEpabPtbpqm2f3+/58+XccjjTQzkk2S1fO0TOyjmfNaRzq6nJFAQpUs9cVNy070doB+mkkIFxmLfRC8YCIhsoHb6chakbJhtxNkAc1g8TmtwIVPZAzZUVKLTPjRgPwrw+QsMUPwwtKWhTKDXre7AtPmJvr/Srd7PKBfWYr7ym6nr2bCQoSZGZpzZsZiF1RuJiNczIiyGbWsZVkQbPP0aAhsWSoNj043u70BuW/ko03UhKYCfD/NZAF7x5tnJwjNddMAp3QySS6yySz+67ou/B6cnG0e9xLifScBiAoZeEU9MUBE1308zCI2xMG4AoDwmzQBhZjDx90eyh31w+kCQsKMpZ9TDWhlZrqnbyFcOplmGBGARARhvj3tZhT3DTw6npoJz1tMCrC3cuTarqh9DEAskoZ5j1ZgvYx+dHw1mT+cBOBg5QhgPDNAcsEgpTqYqAnMAQXZLsRLS5XWAcTCNjjqTqgEKeG4JWglek+ApOoZAWJZ1wZPesyljQWICccEzFjHZ7AxhNqnFdprA6Jk20fHnA5mgNTjjwGYsLonuPJNGBDezrVPumMCWtTjjwPYfUsal+zkTHQk69pvu8wNmQESjz8GYHdIG8+JlyCVTdvDrjEg/gZ6/IRBTiIL7TPt2dSNACaZrRoD+j2+LmDvyE4nA0pPGhAgWz3qWcZqAv2cRHZwarvmSmvKuvbpwNTQQMIs5wqwPUVu0EQ9ERusGDYVzOPr5YQGCjX6jIAwIVM1aeyBJiCW3YTDIhmgrtJ6sq67qQ9oIX9oZfR+mt7Q9inymUoQXWTtYU8TMEM9vhbgChrXfm4TBWwQuQKV0QJE/lAHMDOANfCLAQJUGwdWtJp+owSWmCEsp3UMXAWgudJ6si44jlSTq3XM48cD3KR97C9VgkjWtTd1ABlhvDp4ZgNFCX4+QPh/+0xnZgXEBbQygyEPeOM9GaWsPaTTHHGmjkBsQFIFvwZAkHWzvbiA3Jx3WNlbXZcH/BIm6j0667rdmIDE40eXoLVii0/5MnXQk7VXYs1P++e8QwGfCIBGSgNQIon9c6wfw35iWdGAUo8vqYMU0MxNZBFYtt9f3dm5fR+l2ztLq/1+dkRqVtr2k0hA9E3Q40tK8NTcRCFcf+n+3e0HW+XFxSpLi4vlrQfbd+8v9RuQU7MOerL2aRSg1OPHAIw9oi81wM43T7eq1XK9PiWmer1crW49/WYny8pS2/QRYuQimOjxJSZqWIKlUvL2dhnCBdg4TiixfTuJLNagbtunVuRiFYgCtMzqYKm0dLdeDafzKKv1u0slYNJ40boYAih4fIkfFFvRWICgsbNdLcfCI6lc3d6hLY+eS8Gd1DBA3uPH8INxTClbWtqOWXz+gtxeamgDYr8YBsitcsvqYNdW3lxVgmnQf7ioy4cZFx/2S/qdArubCAHkPH7QRDPHLl+CMUwUgNtbOvbpT+Wt2+wmoW6CF3GPlUNc6vFVa1iZmQHQ7ouC5MOqIR9K1YegpFWCaOU4O1AAznAeXzarNlQCBn5p9snqA9MCpMX4oF/SA4Rj4mEIoOfxZSN6/QFvaWfKpAb6U31qqaQHiIfE6gESUANuGgBK+i7aiPWdErtvZB2kj4Y+QzkCBCrAzLEB4HgWylKZIMYtQYwYaG24VW5pHRzws2ox/GBpZ3EigFNTi7CHowWYTYOBAlAe14Y86JHurBpYmhAfSqul+CaKRewjqYla8rg2PLOtO/EL+r+OXwdZqj/oZ+OXIFaT9G0CgMIqt29tQjXxq3xKaXsylZCk8nZJDxA6/l7ARBVxbbiThzyh1mii9GxSlZCkxWeN+CaK/7pDSwSUx7VhQOQotEYTYGmSJYhSGbU2GoAga29KPZ8Y10YWQLVXl8DTyVVCkupPdUyUxN/0ZI4BSABRO6q3+FJ6Nk5nVJ6qz0oagEjEPeJNVBbXRtfobc0RPehPnA+lPoh+NKembA6Vj2sjgIOs7pxM4+6kayFK5bsNDRMlF4PgGN4f10aHyqe27sRvf7LtKEuLfQ0TxQnPL3KAsri2nq2u4HLAxsObKEJYiA8bsUzUP23TEwAzeM6bn487cvVMFI4JJ92OslRfjV8HiZq4sVHEtXmxarYuYOmbmylCWIjflDTqIJkk7qri2rzpqpO07hpCf+uGAKemtvqqR6uaCvdEnAUHAiAsQr0SBKX7k/eFLFXvl8IeDSTu2u4KtQ7wgIlhWhMQlCbenRml+tOIeamgmumhUGaAB6TzozqrS6s34ypIWlyVPTrUXdtdHomPa7PeBiJ+QQSgbjuzriUN2xqdiTd04b71AwpxbaMp7vgLoKVftVSe353Xkv+1oWOiWAQWoi/sK8HFtSVOxKD0SECwpNfOzM/pEVaX0sKjI3uUuDllgPwqt0Wm17TW8YDeqKJ5r3avqZOh/KykAFSraR/7Zxa5Ve4z4b2JaMCkZkva2avtdXQy1J82VI9Wqume+QC5Ve6eHVL28qfojpvW5lJza3pZ+tJHh6mZJb1TySr3E/1Xe0o7WkY6v1ubS+m1NdWdkkYdJGrilWHZKre2iaZ1fcXa3JxuIUJ/YRB2I1/l7toGkU7bOtWw8wgWYar2qKORp74NtEwUX9hdL5LYP+d95OoDalXD5noKAkLEda3mtC9Ofker6R6xmUV/XNsApLUBwZJOl61TTOFUK3Y0ci0uMR005qez7C1U/yr3iq0f7qE1rujs1lIUcVcDkY4v9CYe0Bx/wOMfudolCEoaU1DNe5QvBVsbDbdfvlsCWiaKZF26UONf5e4BfUCgMRHcXGuNAFOttdiIeASlHVLnDkSPzwJnNEwU9dniF2GnWBsBpmr5Tuyc5ZJeOA8LPxU8fubIjZWTe0o2/jQi7K75ACFi/M7bYh9oTcCTlagjS/D4M0bv0cfu0UBPyAHCFNsrVneAQVirW+E9Ph3cawLGbkq9ZtQDnJuL3aBW7wN9QDrU93n8UzdO2Qs3j9tn6+wHAeP7DDTOl3KFqumS6e/RKjeavtAOSm88jNWUykpQwy3WHza0SzCZxpMZPo+PBk76UfeNWM4iWAfZRbweKhkiavco4RDKv8oNq6HBawUNNkfTDJlf+n5PBQjr4t736oxe73VLtnwRqSaOWcQeH5vrY1e3DmIRqsL8/iPVmK85VVQDzsEu6pTK9c8/2mc3zRoAAvex5V/lHupumIPTKivB1p6CcP7bfBggNNTWt6qsey1Win2DMQGKXPCtcveS4r4rcQDTS3X6a7eK8lFt57nIJQBCxLnnHWnetWKLWkZ9Ka0PCL/q+Tz+sW0AmGQBGGv5fOtbibE1O49SUYCoMj7qyDJ/28rnye9W3gHio+OoaR+PCGkYoiZgkk7SNP9o5Vv7QVubX2dVMBQQdVLXg7mb+/B3e47RqzsKhxiuJok+IR7fOnM1cnoXlHB+FxIGKmKzs+910MIBkaXuB4px/jtISCatqrdLBoAATSp6q9wn8bYdE+ykdJsQ7kF7yosKrhVrkXVw9E1tb038ieA96e9GxsDa3sw9GcW1DUxK0BvhN4tIGW5MiwtQAxBWxhRfjM176GcrEit9VtKtg+TvwPP4eCpYGxDQOKE1RJj3z4J2voUFqAWIirH4bcdnA7uYEDc1aGbfoD8CezXeCLhrmwCyjvc6AsyPZpfmp75LEcDanUrlzp1QwDtIhDRItdSjKe9n6uCfrYj7Smg538Rdk+EFJty0TQApYZMQMn+BDLRGtK/QFALIi6S8Fgf7Cpiwz0eEwqNjqUkaU0x4apsApgEhJMqQdq85/7xV82n/4kVlBuuvBoQiFU+k1no+3/SMlP5s5bvABJAOoACZZjMBTJKZNvZzw1YB8mEXSOwPKn9rcfHWi5nKHZWJVmaISGUkUisiRtx6jQhLJoAkko8QDtNaOZksT9i69/3zfM0DhOVTqN6C6R+FSkXRyECRfyCRqk8EdQCef3+vJSHUNTT0pgmJa7OAESDgCfN7tJNNvXhl5jdMWP1tplKTAiKRsiBCOzl7+SChQWPveXxbMyeVpfPBpKWB6nBtZq1SeYfVv/V7pVKTASKR37FE9Z0oQn802tLcLRkBAjtB49oGthEgIyT+ECauzYTq/5OWIVU/4AehCC3mf44IyVf0jtQf3tV7FWrkENFOLyiurWcbAXpz+oxwLuX34pVK+xYsxHK1TZyBxNFDkUUkcqstuhRGOMUIjRp7vBYMqMM3AGQen/RLCaGvmwLb0hw0wt8LqKGU92SYSC4gQglJvxR7fANAMqNICU0APcJdrwy5fhjUP9OGpaMExCIz7fZMQIQR7lJCYAQ4IlyxjQCz4BkmbD5nTY3QBb1D+itqQE7E5zO9hoaMDyGhESB+j4YSGgF6EfprHmGKx6jdgakWAugT8QOOmtIpb2xhAMgRmgBm2aR+Z8/fmMYfTahFmIclvXm6RqpvaJCQePwVWzMnlaUjYGimLT/h+IDUWdBJDDrGN6hJaIkt4SPUBQReMM28zCHqAKYEEXo/OiTG8zQmTYW9YuFVbkqoDegj3G9JHKJxCVJ36M1ucUFDOmqSeggpV2wjQN9bsc09iUM0BiSErT02q1HeMQkagrK+lsYIEIxeWGuuF1u4ZzoJEyUNTavorVuUl4ARYNJPaATI5rw9RNEhGgKmeMCp+mraCNBfhkaAyawvIqrZ3M238pMwUXjRauV3m76Zt37aCJDzhyaA8IMpX5qf+mO/Fa19HMD9P6a42VOzEiQtjUX6pUaAadDg3yVp0qXCsUwULyryE+BbDTNAHPFtsbGFCSBoPODXgOf3a6mxAVM1YQ2k/iDilWClmnbXInPePdsMEDSE2MvmvdrYJgq7qkJIWH27YQaIpoTJ7i0D/QB2IhuIVFibGx8wEGGLIxWM2kJ7QD1+wjYDDAbudfKpMU0UJjEgDA3xzRp725tNNNtKDCbxVYT5R56upiWYqn0nrELBwZMZYBKM5ktdI8AkuC0QNvfls2o6vbnavrCUWL0NzADJzjxsztsEMBmI1G+uj2uiMIkx0qO4Ns1y8M15n7pGgJL31jpzYwO2hGrohUFr1yS8bmGxtScjQJANEO7VxjJRmAJhmYtJM0C8kE/mvK2urZVzJFISI/dgRRwPcC5QDVEErREg7tLQVe6ebQYoezWvNpaJwj5b4I6/yuMUotWEDp+tcg8MAUEp8EIJe+PAFDAVeFOhvi2NU4ihZnYwims7cY0AAQjE6jef1yK5wgBrzwNGetfQXbsnvri2M6PAPfT2YTCEtjUOYKoVuF9VFqcQR036kh4h3LSNAJMl0eXj19PMTTRVC77YVr0djFOIpSbdkYfFtRkByt8KmjMvwdRc8HbQHZr1R/xxbTO9rEZO/1P6QSuFg0RjQHFoiMuwnzXrj5B922kke2JoFPYF/y/ZMaKjnN2PMFH5eyaBnSNiqol7paPdWx67sXPyF5JI7+Z6dHMq/0b22l79aVbx6KjAvcfcfm2GUVGgJIvW5ycz4o+JZTYKx78m2wsDusvJaPeW3mgJ0SBoKIC4VzMBlIZS07ct9L2Z3bO4N7vepk0Ak0D+1kwzHxaZqADMS2PaWeilLqD7NsHt3kLemdEGTJbkWyo0p1rqAHYFYEsetV9dMgu9dE8t7lQytiOG9grIqkwr/Lah3tRpTflG4qpZl9nu+t/ssmZmMq4+IBJJKjb+aK7n9UxU9fbzr0mzLrMr7N5i4f1KDdawlC8Gzd/TAEyl/lC8dVF/2jADPCJ8vv3aVsxCTpQ7mTX3W7FNNNUqBsa9NJUfGsaWeq86e7u3DEZxR7FNFHiR0JIy/I5FusUBLKpeuik/A/qASLsBAfTv1+YFmeoAZgMTil4qsviTKMC5fBEmxVYS9E0E3f6IO9p013uX2zAiA6zKCZv32NJ+FGCriNMfcjOtrpoAkpVDcfeWgQlgFpRkLU2z2dllUT8Rw6U8ASw+6jRljHWz4FkwkO3ewu/+HMdE0YW4wob45tffvWMBi7Q2KgBpAaL07t168P0nurKmVQeTpCUVd2+ZIb1vg5CTwFTN/PqLQi7Xzo8SZJFPWYz4ijBL4UXg/SfD4Fm8GRb/LjfpwRmFnIg90/nfoK45+J8P0Qt58wHO+fkgYAFl+k1clblvFjyrOKPkicl6vrATe3PqRRvrClOeYyTtKuNr5f18xRwBzLVf8L3TxR2T4Fn7ibfNPn8qWU+594eiDuJPuH0Vmms/5xggX4qMswVboKKQ8rlRphdc/xTtp6BfgnaPO6NktJ1Z5kyxsULoU8CWCrAgYxTpaBUseHl+9iNumQC6ZyOk8fdrS/rnvV+uF3y6FgKWKocsMFkKWlh/6TWl2ybRwSH7teE993RMFMmyjRVevvzXD+dtAVCO6IfM5wTAXPv8h3+9JJBG0cHuScKHJJxKJnstP8pOyKzwy6l//zjtbLR9JspI5Yx5n4VygLn2hjP747+nECPrs+lF6Hf9SOKpZG8Db61HV4TVMiy+H6dR+tQOACqLETNKAHPtT8voXj/Cgiyv6gOm3/JIwqlkXfGl7mjAhrv+wyzmm569EEyU/lUVY0EiCy8upuntflh3G7qAbFMT1TmkmaFyIx5ZHQTuQvLV+2mm0ez0oQxQhaiQPWS3g/+9f5VccLUA6R60ynNIvX1qYpWgu/D6p0vHGQE6B23RRJV+o6AAzB047HbT045z+dPrBZ24NrYFrfpUMtKcxgB0F7Kvrh1ndnYEiJoamdKFYDm2peaMLmBD4wFOY8jrV9kFNyYgaUhDTyXr2nFMNO26r3+adXyK0At5CYq2KroUTnaaA8Q/3OxPr13XUyrMm+EiVJxKxj72xvrqEnQX+n9eY+sUAZ2DnBoQ2ioacfi4JLLtA+l9nes/YY2MBMRj+4hTydAEfzigu7AEi88J/NI4XbRDAFE6EHs9gkj7QnZfVMdnfxouuBHeDL2tFnkqGTt2VA7oLrgf3rPGRaIIaWvUgO2LdjjggcT04V/S7Lz/kLbDdl1DZyMoTiXzHflEIjPkddBdGO5+9DeeQUUu2mGAuUPnMAwQF6ECEDN+3B0uyNtCpGZ2oDqVjD/TakW+1JaGzuEv2LoELJNvFQ7aIYDtc+e8HQYIi1ANSFqdv14vKJqK0UZ7vloHgoC4sQkAZt0FbJ5yLv/FYU4JCIvIoYUsb5AOw0rQa3Xef1hoSABhMxMElJ9K1nOzAmDaBa+weaoBmSLOp5wSEPdXDtWA7U9OJCC8gMb6CiwEDI0700rm8X1ns2wK56u6LuQLLTifItQOZYDQSKcdNMRSAJ7HAsStzsdXrss3Fb4jAsVTyYIH55HIBVaC0D4/OpKnKEiFvht3cQklLlWdAlgJ4wJixg8L/gUzdygFlJxKZo3OtKKA/b9V3kGlyJW8tSHeHPYK5IBX0XXQfzHt/N33q9kLAMpPJaMHJax4Bwa5qxe6gKrWhnrzC6kVtw/1AFG7evHWZWraK4ozccVTybyTIM5Ya2P/FQk4HVTkUNK3od58VmrFBoAQ8S82AWqfKQDFU8k8QGuQJZ0H97UJ4Cwy1ADGJVX6cnwTZZXxNdUyO1AACqeSjc7yYBNvWVaEGiZKLlBB8R2yDYd1vzbagUbGCBAW4gIpwuOEApA/lcwHmKEvXmZBdMHJFXHOeQzSXWFDEH5CR8NN8BfT0y6phEpA7lQyHjCReGxnk+6HCD8oNVGCsVHwVUZohn6lr3ytTTu3YQgI29MPENF+rAKUnkrm650P3ezCX7LhWjxFli9HlbF95XCyvtamfXVpDIjN1B0qz6XmVrmDgBnY2izMGgOi53+6akOSdvtwwxFknY1D+FW73b76FNXZDr24XHDZFvOyU419p5JJANGBq6/jPCWkOXcuNg4Ozj9Ni4Dwq+lP5wcHGxey3nx8QNSa9sIA/R4/AAgvuq/ijCZCRZYdh3TZA7L0m7EAp50/u0pAf1ybAjCRKCwbm+hnkZ1eLoQDjjy+HDCReLH8dQP+HAHoeXwV4Ezi5+VIjb5mQOFUMskR7FbiP8tfL+B/ogCFU8kUZ8xDxK/URCMBxVPJ5IAI8X8WkF/lVgEmWF38ykw0sg5KVrmlgKiaEsSvqwTjAQqr3ApAmLMw63xVgM5slB9UrHKrABOJ9kfnKzJR52M7JqC4yq0ETCR6146o0ZcDvFb3RUXHIKxyKwHhGLL3xrlBpbUA/44PKK5yqwFhzsF/l78KwOX/qodLAUAuri0CMIHbmy8O6MzSRjQOIL/KHQ04qoxfEJBVwXiAUo8fltMavAnvpd404PKbgQYgt8odCxB9U7gIzqp8LkDnomDFVNO7CHj86JykTf0igG96CV3AgMePk3Pw82zspbYJAqImRjV1rwYUPX7MnLg2fmZAVAM11RwR6gLCVAh24m4U0PlYSFgmgLzH18kJ3b/CcdwAoIOcvJGakri2mDnh394bWdjXDQA6s296huUgi2uLCYgv2ubrDfFlHWejbWpofFybPiA01cNrx9FXWkPWca4PpY+Op6Ysri12TixrJXLv/UEoEwZ0lt/n5L9tfDWDcW3xS5DKFjZ8/fFJAjqzG4XwR8cpBzA2IEztN5fOxAGdyzftQdSjYxgaMM7JLfEMrj46/omccQEd5+NVJaHbZZapSXdvGQ9whhWkykNqAjqo+BJ6gx4loDyuTcdER2NH2LJuzMaK7QsDXIa173Cg9+iQcpDHtRkBEpHK4fmFMr42GhAa5/lhxezRckBv9xbdnGrZRCV3/tEJLUo5oIPwChXT31YFKIlrGw+QxHUMrt5coyXemIDLy8uzF29g0xJoW8YDlMe1jWGi/ovEoPLLwcani2VnOaTXg5a5ly+vNw5+qZAHTAaQkxXj2iYDyESsyi+HV+cb1wQUJ1he7OrieuP86rBSGXg6TAaQNzS2e4v3caDzytufrqxXO9u5w6urg/9D6eDq6jDXpjXOcwoTfzTn8b2njF4v9fXOuQvLTJZ+M0rsg4BsJuy++o+mY3z2r4BGlpgz+BS1yGeQjVSTeHxva4zRReCDkIsvKBtH5P8Brq5yEXbuNxUAAAAASUVORK5CYII='
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    render() {
        const { profileImg } = this.state
        return (
            <>
                <PageTitle title="My Profil" />


                <div className="ui main container">
                    <form className="ui form" >
                        <div className="fields">
                            <div className="four wide field">

                                <div class="image-container">
                                    <img src={profileImg} alt="" name="image" />
                                </div>
                                <input type="file" name="imageUpload" id="input" accept="image/*" onChange={this.imageHandler} />
                            </div>

                        </div>
                        <div className="fields">
                            <div className="four wide field">
                                <label> First Name</label>
                                <input type="text" name="firstName" placeholder="First name" />
                            </div>
                            <div className="four wide field">
                                <label> Last Name</label>
                                <input type="text" name="lastName" placeholder="Last name" />
                            </div>
                            <div className="four wide field">
                                <label> Nic Number</label>
                                <input type="text" name="nicNumber" placeholder="NIC Number" />
                            </div>
                        </div>
                        <div className="fields">
                            <div className="four wide field">
                                <label> Mobile Phone</label>
                                <input type="text" name="mobilePhone" placeholder="Mobile Phone" />
                            </div>
                            <div className="four wide field">
                                <label> E-mail</label>
                                <input type="email" name="email" placeholder="xyz@exemple.com" />
                            </div>
                            <div className="four wide field">
                                <label> Password</label>
                                <input type="password" name="password" placeholder="*************" />
                            </div>
                        </div>
                        <div className="fields">
                            <div className="four wide field">
                                <button className="ui primary button submit-button" > Modify </button>
                            </div>
                        </div>

                    </form>
                </div>

            </>
        );
    }
}

// ####################################################################### functions
/* import React, { useState } from "react";


import avatar from '../../images/avatar.png';

// styles
import useStyles from "./styles";

import './profil.css';
// components

import PageTitle from "../../components/PageTitle/PageTitle";




export default function Profil(props) {

    return (
        <>
            <PageTitle title="My Profil" />


            <div className="ui main container">
                <form className="ui form" >
                    <div className="fields">
                        <div className="four wide field">

                            <div class="image-container">
                                <img src={avatar} alt="" name="image" />
                            </div>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="four wide field">
                            <label> First Name</label>
                            <input type="text" name="firstName" placeholder="First name" />
                        </div>
                        <div className="four wide field">
                            <label> Last Name</label>
                            <input type="text" name="lastName" placeholder="Last name" />
                        </div>
                        <div className="four wide field">
                            <label> Nic Number</label>
                            <input type="text" name="nicNumber" placeholder="NIC Number" />
                        </div>
                    </div>
                    <div className="fields">
                        <div className="four wide field">
                            <label> Mobile Phone</label>
                            <input type="text" name="mobilePhone" placeholder="Mobile Phone" />
                        </div>
                        <div className="four wide field">
                            <label> E-mail</label>
                            <input type="email" name="email" placeholder="xyz@exemple.com" />
                        </div>
                        <div className="four wide field">
                            <label> Password</label>
                            <input type="password" name="password" placeholder="*************" />
                        </div>
                    </div>
                    <div className="fields">
                        <div className="four wide field">
                            <button className="ui primary button submit-button" > Modify </button>
                        </div>
                    </div>

                </form>
            </div>

        </>
    );
} */

// ####################################################################### functions

