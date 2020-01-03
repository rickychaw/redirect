// 忽略异常
const IGNORE_EXCEPTION = (funs) => funs.forEach(fun => { try { fun(); } catch (error) { } });

// 资源加载后回调
const LOADED = (element, callback) => {
    let loaded = false;
    if (typeof callback === 'function') {
        element.onload = element.onreadystatechange = () => {
            if (!loaded && (!element.readyState || /loaded|complete/.test(element.readyState))) {
                element.onload = element.onreadystatechange = null;
                loaded = true;
                callback();
            }
        }
    }
};

//修改网站图标
const changeFavicon = link => {
  let $favicon = document.querySelector('link[rel="icon"]');
  // If a <link rel="icon"> element already exists,
  // change its href to the given link.
  if ($favicon !== null) {
    $favicon.href = link;
    // Otherwise, create a new element and append it to <head>.
  } else {
    $favicon = document.createElement("link");
    $favicon.rel = "icon";
    $favicon.href = link;
    document.head.appendChild($favicon);
  }
};
let icon = '//rickychaw.github.io/favicon.ico'; // 图片地址
changeFavicon(icon); // 动态修改网站图标
let title = ''; // 网站标题
document.title = title; // 动态修改网站标题

// 字符串模板
const HEREDOC = (fn) => fn.toString().split('\n').slice(1, -1).join('\n') + '\n';

// 自定义字体
const FONT_PINGYONG = HEREDOC(() => {/*
    <style type="text/css">
        @font-face {
            font-family: 'PinyonScript';
            font-style: normal;
            font-weight: 400;
            src: local('Pinyon Script'), local('PinyonScript'), url(data:font/woff2;base64,d09GMgABAAAAAFrEAA0AAAAAwtwAAFpvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYGYACBHBEICoLsCIKyIwuDLgABNgIkA4ZYBCAFhmwHg2MMBxtko0VGho0DACJv80YkmaynMSLJJo0g+P+QQGUMSdF0cA9DjYWUYspSSimFod2YN/hUMYflDeJHl8n8Uc5y++5+xhprPD5Q2fU1/tvTYpZJx1AMbxvNnXiExj7J5frP7+/7tTlinQ82IxQ6pB+JBIcGIKlPn5e/3L7vPWuA5tZBj8gREYMeUYsItrFkjAEjakSXKAiIIooYWIGVb7+F9fr/Zryv/ziX3DY/L3wEuSGxAlKzk0BCzk6pzZdOe+kq7XGQhEk6RSA2stMwgbTqurFAfsumb+9cZt6/zfzfhUVcHnbHxi0dx8akVdeR5vd6KpX4d/c4jjWgMMDkFnBtH8iDoC42r38vHGBkXZnuZLuXNWny6HF//22+eb8QqYiEmuiFuzO857TLDDXhlR92+gft3wobEkcWiUNsIZASE5Kcew+v/NDClNT+n/i8qk1a7WSmtxRqCc/U8qWfO1McHGr3nRYbNgn2OjHVjZXHsPOeYt8IfWS9gsW2/aFgasm/n1rSL99dGiq9A1IqTBAKs9+TLOt9yStLtmNLW3Rfm5s9OWXP3tzE9s7Eq5OvtAZQeLr2qp3eASsdHeAhLAA3L9swGMDCg0AIDszUWmr3g/cbQslkDLs4kd8QlCiEihSpTYqwV2JFoKqQQFUhjO94QAckVM7dr6qxdcCgVIWu6kRl4lR1hS/0T5fqnsEynVBpcy/p9G+BUqoFWyMMSoQTEctjzHIBtiVCJe7nvm1fiM2swRcroQ1t6kH2cNq3w5hmh9HbK4jgApQ1k7b/V4AAQDs0ZQWkaEPppU2bKL3QARDjEQ5AXK4vZ9cQI+e7qIaOhr6GhjGgtQDGAyijQ65chXQFYHAdsaj7snoNQFzfLEcAGuaLAKDcbJVQHAHWYZZDf+TSn6ANHC0Pg9ngw3YCB/BbJgtTT+ufen8E2NXe1dnV3dXbNdZ18fdvMG3KNotxkaWrratjIuZD8R1X2c+CAvz6Xr96tbK2a23n2tLa4tr4mp/UqCOgwv/9G7LmjQfaImcnjpnXX1h77uWlvRLmOnENCDJDy6XptWFi+ATFJTeslicJU9/EUr2nQqqV+o4qvKRJX6oha32iQ7xVomG9DsjWcnGTazhuIyaJVO8bqQn3K1W7VhKydl8VWNzLJR3Tsgx0hukuuEBiJhDwD4exQ8x1VI0y5kg5OQgXT3TGEyG4i9WenW2z/bmlgrRtFkCChQFrQXLRbEDSD1uF21HRnotUz+au/JXTdtbQ9gqbVPR0PLF7LS/5RzAvB1rOrvHS/Pr0RDKSrEq3qjl0NNsSjQnRbMUoalEvMFXzsN4UHx2IyfH1xqHB1fUFfszlCB8uIN7PdwSvF88hWwGQzDc0yEKOktn+QMt4tLKip1aVRtIrmU2RXybyq7SywtGMmPRFopDIWUB7HFHjn5KBYbcw2pCuEgULqDwzbXVlBROA93aQjHJHE2ZX7xZ2c7vArh72ZM70WeEMWOqebohd6VaVmGc5E4gmsTzvIDNzukSJ+RygnF+ra31tXe2wza3rxnhknuVyQB4dopspPYieHwSu4+f5cBIPWfufuh/GE8sFQcIlGi0WNcRfjnxqyT7uyzIix2UAwCVjHt0pnp1HBTklxjkWyUo61eRr2aoCG4X5uST5wMDnJfnZPsBeUAX9ouXVy4pmy1azme+NITHZVYpxxWJ0P40DpsUwr8DAySV3QytC8arUAo+Las0EYnuR0zuoIiYTJtTP3ESlGwENze8UWE73ARY3+mL0mVoW6txZxhIoSV+g+ElkHjHGWjBsGVJKP1mavLhMn1/xTOSo/dqCRtl/1ZVwgkYI/OSNAojymAux87dTrgc1HTvt3xWMsdrqZRonHGowWvuTPJqkKZ4SmYBQVtqh0NOI4WcqCFmi5nnv97h6GdNXD1qg1q0MMdUDAl+Bx8iW63F1mOteOehl6kwXDJsR8QPY3tCc6hjZE1IemN6gDktTwo+ZQyTjv7HLZ18i1xuHr6PAXbg/KnC2TvnaMkNiIaHNAp0vGJjnxqK2L6npRV1O7WTAZa0gtxUV9hVNyYVHrppLmYopb3JE/JffYIyZGJZi4rRXAMGkRo/XSHR0PQOmSgRSgwnlgPTaZ97odlEEXw+WJ3YnI6VIXxBOK8YhbuBXgWwBWRCxNkzrhATivduEJTILO+NqkcyhAyNIFS03jiS1I3Ci0PT95BumCQ1lf9XIBGa8RmmTSaqkAhWmsmSegkR+Ux7zrC4mdh6qpWxxZ5IRT5CS+XTX8l8mE9hZ8bWOUoSkvDwCiGAXVWMbLrVzGkkxotOx19FxHpXL6gdGkoBv7HSUnSLvtAnnGaUGWXIshseTAJ10dEnzbjdVZdE5uxnudD+vLebVvcwmY2RT7FhnQ1K7prTS8SapDK6ylHvCtZrcCG1Q67Lc6dO0Hp6wk1uqCsbfESLBdo6FEB6s9sqshzVtzferOTzPEuaA68AX9A5hLUjk0HrMYIIRhD5T4PGGFtyt/OlPzOplCoFu8KkFe8+vMhlmrLCDyLASZLin7l0WxrT3U3pXq6gS0uhC7mxkhkvcx3b9VsDldlK6IRNTXccnQXjT7+xmqTR+K9cOAJjKKmAinLOfeaECcphvlQx5dM5490Rgy9mckjHVCEGfTKlRUfmflHFgmz+sOPL+3P0Jz+lVPda26ePjBb7Qw8dPdFrgpK+Y7V0dT9D0DuXwX3ZFTp2825ZPNN9hVNqLu3JXHQsX3/PPRNNrIHASMQmslu9zbd8YdzKDX+2hjnWbKWBV8IHUBBCRXU8APRUAXSc3Q+AC6pJH266gHq8YE0J60udLPkUs5IJPnGjxJk6oqOOEE+kQp9xcRDhTULwdIBK9WS+p4paxlNXKlGuGzqlaWNMkbb70RV+dSxJvndieFLvYS6NFQEJei2Fwm6nZciTD8jVis9pLAOQ7JEdOakdb5RuNTfKkYeohOY7E4kDE/wwF/P6tGuOatyUNGplpuBOR46izmfLaOqs5jz6DuFcTWO8q3ecpVNHdDvAf5SoA+yQ496bWUAkSKCWxG8GiBqxlf6VUEl8FGQ7Jzn5FNITUz6bM88y4/I4lphRulGC6dxPnZZ4MoQo4WMJkjXc8Bi+Fd1U1rfckwbM11FNkKVPERDXmbdh50sA9KiqFNtz9wNKAeFacpONLlXmchkyC1rYaYnW2dXdxLQTBILQyffZJ/KIYJkotQGgk3K6Xfqf4wGD6kDNT5I3JdVwbryLiZT0V8Q+dHC5nNtRM97zIBt6PCdbV7zip16CJCa4WF5jSs0tLJlowPzj7QLi3gsaC61fcpO2dySyUfCtsn6Ly9Yn5EnjedBEqHK3k7zEcUKkJuJ8kjJdxsAUeX7N3nCbXkFPSmEe+LYJylfZkFuTxUYz7go4Hzk9PW4LzMz1ziMAYc4iGOJlxbF15iRrkoGaPHVVCDNheMjO7XtfXAiPzPOszZMZQfeRxYMnF0PLnGwm4t/+iJyFI8a8qQLGBvzIKgsrpODmN+F+pQca2PbWaWIeLpyVWjEcF36S585pnQdA4Kema6TNRyBvFJaTE6Cp0p02g1ZwB3gEEpz6upvWEtikNzkcwBiskNIC3jcY4YCaIwQNIJdD3YTFu/+bkwnEGn3OBIRLS6FUvEdleONiw0UzM+TPBlh52R74NWK/fzONK8wPh9D/yyysALW3P8oxyPL5dZJP4385x1w+L34hsJwcJBEZ2YDd1bgdsGnCMMOnvdiEWWtHs0aFoZod8N1kGqKGYV8RXdh8+3SvdQnY7dpn7dXCMJ6wApwseYQ0+mwUYP5zDyPlJcXwReMkc0/wqeGZDbV9mh2EkrfoF9DSGOzAZJt8AB2Q8WaiSwFBkflOtaWAY0lpF8zNk9yiFf13UgtDKpnkjntkBaWo4hTHfrwAJ+HQy+k1MUc8dSOlwvQ4q8JpxmkdR4dkZNM35J2LCetXKAuGZMnGePocwNYUDABm8ggrrC472YdQT4mr0ITD/lasxiU4jAT8vaCYJicvgtbzYxFUGnXN++wBQwOV43gCAF2+k/4bkgtm3jVZjly77SAukESQ0c3ntGKUIBFfd8nQNAUjtYhOkWDmps4kzg1Hemi1xce3aF4gr97WBx1CJzHiH4UkpbSbfceJ2Y4CCVD4nmTt589jOdUsbN7e8JAwO1IW8xzswkQPy1iyY76XsDMA08Uzuq1M9sFuBLznjKVMMuREeYMrRbujxQS1Y+mZ0xM0m2JYkTFxB5haMX/tbf/r8mYGU3eEBg30kF3+b7dkrd5+HcpZ/sYFXME8mDvowZpze1p3tYJlYcxzSztqGjbBzZiJMwXSOsF7lGrcvvFC3Zv/TA0/u4TNaOQrA2dpP1gYOWec/bdtfc/2R/4j/z5L40eZx/BT0DxJ7Gg3Mp2oM0dZ3eI23dfQ2mtHRTQmHRgHlBdyeZ7iRGlPvmB43T+ORMvimGcPHC5XPcXHchFIwrt5xBeKOIOujKpb6N6F1g2/VMMTjADJZCU8lC3gEN9/82F5yK20G9Av5h3pe8PfiovDGouZ94gUmQbIRt+g+4hnpCNLGE79Mir6QJnfMWe5Aku3taXHVOFdzE3sAXoEtygL7Tu31UKulusHTFEthnm86uZs4a1g0/leZihL5ZB8bwe7WRrZp0cjIbCI7EcVc9eG3Tpij+sf4diwYEzQimP8sshg6J8BgqM/McZh60ruZ454FwCsH/aT261R5XhOm2Kte5YwJ7swdf3AQdA6q5eXQESoJoSBHRcptQ7D9T7BAaoZTrjDciTt+Fy/Ecj2jgSxhGkPpcweXMlzkRpEc+haezs5WmV4ltkUCJ1ykhr/fzJVdwJ1U282MadFR0FoxXFq2Yc3O5fJBcJlhm9Kcr37JIEvRzNnnDL7Gaw2auDjh+vAER2X0QKbNdNJHfrbbBTSDqSZUxJMDWl51DfWFMJPffvnKxc/UMvrj0TwevsOYtkPPx22E81iDoa3HtzJIjr4JPGhaOBz4Nvr7hz80aoHpJJqSIg9LMqyEtc0QpQ2NPEDxswup2pvmPE3yPqSgOAJ3oBrCFvW3b90Tf+5JRF3WcZHnmIsO+mr5A3yi3R1nB3MPQxurTAKLFoiUzQKejJJKvum+g6Hy1eudXXKKOOHdoILlnvCgX1vjTDgv9p6stGYzbRawGO1u4XOoAj89SuQToZYvKuNxWmxf25ftPlUSP4mAT12nW8rX/Z9sZE2mlBzE0l2u5r3ZeoReQZHRos0r7lpgFio06mdAC5OovGxrbVwav/GGIy3KaTq5H6ybNTYCOvg+bXJDiKBa1P1iVRfMfYb5ScuRfhqVc112uGk/shVpEqxKsIlrZczHg5rW7rXDedTDd2Vb1KzR93ivq2Jrxltzgpu6qqF4QKyQ/ULVsN0KtLiVyZaCF5z4TOordIujXGaexAfddGcU3dRI9As6SC/ZWdMStPPlofXV4wvn63GhONCVLmDTrrgDYzXFERlXJaMwDwy/7vVox+Gw2860HZJ3tnPs7dbcEq0HzY/R+uZs3KnichTgdTOPPsqEGWXot/02UQb5LUkDSxfXgqfH5sa38GiRwRmvAJQ+KitqKGY15OwWOJocManAx+i9/DswqQeoY/1nxjnX9EbPJDeg9wzf9Pz+havYN51LKnD8P66hFlro0LylKyMHN+cxueHV4oFNZM4OtcBxk7oC4LYlADEOo7JV1FKVXJw2AsB1pIIYHmxc8KVfjj+237ZZS7ZbZV9yYlMUeWRHXCNKxOs60TKe9/XFVFxWN5Gr38oZQ9F1P+pay46yU7iiD1Z1lk6DUGJxTBE/ASxWI4/JKbZXkLhR4XLbqTqe6M2D7mjUzZ/xJKgpOPSC6/2Hz15W2/5EBkiW/mq79MnydlGynyxRDbNC1kbgVCCyr/gTFsWOO/q5TidPF1e157tiMKdKrUCHRhN5CLXEZZQIoh2UfzuLCzhPUxZv6FUAKUIgaRDBw1Is6BE9S5salwF1pX8WGvKeFh/bWhuynb1RBC8I4IdiTalNIw1jGyC6V59ZonpbkmLVbqngbhhZeMMIZ5UkO1VczPy+fJXkanhGjm0s6M+Hi1FSCczZt/QG14C0ZXXYcilCzvUXfKOXzUWOE2AbopxZLaKQKpMv3dXuLrb6jLM+CmqeTKJBpx3H1XYZj0nyIDBgRa/xvY5lDP8oDvJvSZWbAdpuo1zRvMUlv9bOtN8RZtLHwDaJwlsRLRiJI+NQaCNQON6kPi1ESBIpFnHpZ2XyzniSsJu9jmv1Ulc/S4KWouwmmQsdAud9KdkYUgnkQ4SZKN1JngBTYHTSpjIjuY9tX2Fd1iUbX2AAy3QKWethYgrB/Rxjdq2IfCWrNwvd7QcsBdCSZCOkMr8esEot/sGqsQxiQ0JctzIrFkj4kh4WgvXNQ+6QsXpKHFiLNMk1TwKW8fw6VWC6rb4AYkOCunvEBGTShBR2SaTBhmck4xB2Z3uuEGY4sRqWSB/NzYkPDRgSWLKHXWCqn6Kh2/n8zu0Lh9GksBcflS0g4+FVJPB0SWADt0wWwfydtekIKsjX44ogByfC+cOMjG4X5eTsQSVj+JFavnIcUO78x3mO1qemOKZTw1ueBum/itml8pAbIdOkjzwWeqB7YU2gokDRZ5mfvLNlgf+j8LUPH4aQYc29DA7PI2ZCo+aY241u3/aOQ0qjTXGFg6/6DYEY0GzQfHRHx14PTjU7uH2k5mqfMjve+LWZsJ0N/n8VT6Ip2SQV2P3lFMXCCZaKRN+pKSq4ig2qCkkQGNoJBsScx/GutQUlGY/5G4gnzLPLHbVIrbv2nGAQZiDoUeM2Du+XVh/Y2yBJjvg4xhZbs5p3I8n0ZhWbWo0FKaosnrRZSusP8UdYA3L2gebWOm+14xJqeDMyjza+xPQDsCeJ2iHRkaRIPB2aLdvRvUSVnMfHZtHALqt/eUdF3+tHUgZ6v1/m7HfW8ETLiGzVu3yW0t1lpHKwqiaJmF6ynOSQE4ZXQOcixqw2CcEbWCEPP+OVykB7DtTqvjtWi2vJvGq1FMsPHQG9SlnNQhrQ5LOm8r2XwlvCw5CCyzo3/18O6WeCY4VZ4g0PXI7Me1RJQL+mwGCUeJS0gkuMwiJmQ0f/1vr2Egt6dfFfKs3FzMwFcK9xxKsxTKhN8Wb52pJMEuiw5af1wkg6EFaUkuhUN4jl4Nwz/yoRsoIww/ltK1kIAsNSFOwo9MPzcEms645PbDoZH3ay5mp6pxEaJJccX2vXg58jkxG+cqTMXWSJ40npadRMtKQF8mFnwI81iIGzIHe0M+h89NuAu4cb2H1Nk1vK5YnBCGIKe1XtefvKyMvSthrltrxjDQLma11yfSPPjk70vDhffUNW8h6D2pOe2ympuQuyH7IEjppaW1m98CiFR1fm/ue4Ow+n6Qy5ESogF5eVHJx4I8c16k3NljtUhTy0LW25p5+gAduUqy4J+mEVVE3gr8gGWwGlo8zdg7fqg89GIsRDrVw3fN0Pdjm524kYvlr2P2FJaqk0G3qbt9PRZydcsNGxMi2kKzHAaiyZ7siRmRKO+Ro5ag7JsUDGyL4AgaeiQiDmbZ6d0ClSAUzP4GHpjg7JR6NPA6TSMXEbnwd3T9OlsNh24O+hiD9eiEd7xv2ZoD+VdQI7wDHF7ZIBweD5BM/7ioJjNb2hGC6rZShDQ7mcR8fDwTtibYXsHQEEGKxqnfPUsnbTyiJP4a3hrCZN4lKSoJ/ebsTJ8wBNDqsQhLD6PxXOIjAsWZKH3MPx1Ui+055le03z0SQbWEEDPlQE+eJxcjXgyfIi8yXC9sREIMuvh+25oKpo00L6O3ubCLNv19kPcpQF+T8C7l+4YPpqljGmVz5caBtY8dC6d7H8M61wgtgVz+2MWli5KQkdFtYSF7C2H2LmdizYewn5muI5pnDZDdgvLCxUflyCtbpsdS1RNVnRScl725JcDTzy6eFlTVgiaZKZAlla18IS0CoYvGwocJMqJ9IkmXHnTHDrKnGgeGFe03nAoKWPHFNMyjsOnN6nQmqFKpnAhx+0OyzjD8b8J4vwgqRYc0HdnvsyhSUwj634rfXIq3+yMiFlQ2bomBaKZqBQxjh+7l+bYHqk5gZKVgrBt8HMLMYwgUct9zonTzU6qbr2FGB8Ez6aassDOZz/Y/VgETseaC3nYm37BTFqkpf2ah38GU4xqwl2WunpEW2HwpkQ5FWD5aV9hKTs+wKpzmJKT6MsuZJWzUZLIgwUXRYiziCRKH+4ZH5XMhi67ApXNmAjn8n5DnwCt+C2DBMUsUn6RoSOCfql7nQ/mSzj8MKbCmnB/JEa7VvBcbpgPZVjycI+aCc/u3iY6k1nTqFfVLlbkVSfxRumwxbPJnfD5dGf+D8ZV3wqghdRU5mo6HJqCpMYyRafwsSFs9U0+2PeNpxXeg1VdAboNcQTZP7iv6bqNPspygXUbjzPSC0lnxW9Ub8hPpGVVkaaUMaReja+uousYVf+fxK4Pd2Gc/T0OpXQDQfT7RVU0UGvTS0yxXsNbSRx2Gsou8dS5JQjrtlP9XiO2yOqwx5AwypZFZ4ToErRLghZApWDR9LV5etDbpow1VOJtZovhsR1Ur6N9xBCgtCK48t6yGV4vYVeTfKGcmXvDhmdPXuWgEiMM3UWeMrkbBczZYN0XGmrZcDMsM+eDRpgOqvYZLkmw1bLM+cc/2+Q9My7CskWqRvb6c103J6k34BGCmMKJI7nXCrO2nd6QaSfrjnj3tqe7TIERt9EYPbKH+btUnKcejthEDfU8uRlK5lTkigFTOvvy6FJ+E7V3NqBujzRHGRBC+aHZnnvmmxpJmS1qHokP3Xqano3wRFiCFvFlrEq8boEq0ofgIVkETujSWlLC5HtuIh6j7QtFlHP4U7jJmIIKqnjGqv1nnMATmuJlDUe30cbMYsemnC00rwgA5iyxnihztHzvemAbhZ0ksN6Og+ALq0h3b7sQ8n5teEFPyqU/1bSeKo9lOEWFoy2OGxhwYy0+gsLVuhStJteD12Cdn/b1tTbhRVpyu3C6Esj5Ym9bwhJJIkOsXUTiOTWMhHT8ope+WpshtosmiQpS6hcQeVuwUqJ1/rHuIl7Jr8eSp8VHsm3R2lDV25VvdJnWxRdVW8OEXmWF9kyRJORi6pv/d8phhmml1babdfiZ05Fquy4wlCxcam46xRmy3Uao8MgMfl31P7t+O1V+gVTRxuuI2X7YKFm/UNZYVHAa4sLFgX8SCvVG6NWagR6oZXLV0i2KD9kUCcY/FH00SVMNuF3x5o00nR7CtMVLGXjEiOxT389JJAo5c9iQMWutfYZ3tQaBXQtbeFVi72ar1PORulDnhieXcXHJ7yl1/UK52O2/ULlCgZj/taHgWQEugnnOBrHgrd2XInGbsV9M9raXN3XMyfdunHDWOn3bAHq0pftjWBiwAePRzW72ChOP8SXipjXsBP04LzkW5C9tLxfC7QXeGPU11FUxJTvUmH57Ce21U6iAQ25wzZVj56pZeNI2qvneElPNfQgCVXuVeEwhC4CnGUnwJg6djXJIMvQCCV1X7hbX/YFPI783yO8gq5oO24ZTv9XBi7Pdz/ib2Tsl0PqlufbvGn5/xCcckQd6y+ckvbya2Ix9NQnrHEQJXrcYkxDlyMnpNWizQJeS42u0qpD0ufEfMe2Rsl/b4o0zXthjzkSDHfL7fhk1LklK32zimlrhys+cqUl5N39Vx6IpJifNgD22QhoffEtAf58MG8+n6CJcV1ItD72cP1BS7mBLqHtV9Y3EtBDHX1I49sCo1Z9xpbXMv970Hp9RuDl5TUezWyvPrzlzb2s9q470nfaxs71kjcPZMux5vbl3XVhlpGr+Yi72nvmwfK3DcxbXQOHnjFiOBO8J2bGgq2PbvptOvy3e7Pv0LjaNwVNZ5da7FnZ/KQeZNi3/W+RMyn+UvKhgKV5Uy3PasgaxIdTF9v4KS231dp6s5cW5TkGVF8aGRZ2WGWvSzGkeLmQsZIQJyLgjZQrvQQllpYCTwFcmMwNzSNkxT1K9VAkSlkck71gkH19Alqy0RiMMAifQ6AIAnhHalSfSSADlj99UBRZZf5U3ZLgJYCnJCeHFhAy4hJgX5FI+/UKUKLlKs1lRqJy62lVtRiOwQvg7WnQPmfglvlNz6giZkeF1Gt0OcdRMgAlMpJOO6YyYetDat/kaWo117tY64NUyslDxMwNT/P++RveIKbxaDIdu3x3Qw33PlFMrq+S3YFGO4iF9R96C/DehFA0JRAtWgVCB0eo8gUiZrfbUXLI6YGWJ5a/ZF0Em4Tf7rx+iXUsCVSk3Ri6Ye4PXSAKCMnFjiK+c4uumxcZxxJBxf9C8jlvj/Z9w4J3sKGzQCQb5wlbq+hQQxnB5bCLVzvsEolPmHOHylTP8xqveVrld4SRRsksG/3W9SqQTLcQr2Em8uZC43AGRN1cEfYhgNsabmD5cZen2ZMB0BZwOMhkYCsY/CAr0ASA3DAxMvy1uXXEzqt4o++ji1d8YeSSuVoBGkBfvDiDraqOAdQapVDv36FhKsF/3z8AMaPPyLoPgb5601K/Tgfw0S7aZEj7v+3jyl0F/eGu40VxvCjGiN4u1yWnjwMLinVFzy90r39+8dX1GkfhlVPnlb4/hdWoJnXL+qoV1QlfEfssgP5cZWHrjOAEETKX6h53a/RbdluBrl5fA0cYwG4lvbj7aKrRhhAZBAbb4/n+K9sHB7rH+2YjkgHCMs0U4v6z8uYFCR+vltTJsuOy43ywlg7eRLBhSETynq5a/37k1M57M+dObOTa7VN1wRoyChv8ESm9PP8vHKbrJC8Ro5i2MmfhzhzN5UulwycrI9oEjTWlhKDp1LlmAhWFfSA8wxftO8YcCmkpZEJdN6W0GF+Pr1SiONGpGJsXyDAnjtARgO2p9/5ZVtnRueEvUakNJYoWo64rmaic2ae8qr7TXpCUHQd38oqyiicHYKrsoeXboydTm9tCaMptuyUyNty1IDYAnkld8rByxNhrNz0v6m8MxDDqR/rEdnfElbGlYlWFH4zXdRCPFuCbsuAzcH24BcU3F6Xg8B/LMESFK2erOKIupaa8CB0wKgUw+UegX46YNv5zqAVrvb1qeyK1uH9/VDOE2pqSo/dBzvGJnXX4dExgQS4b2QijFQ2EIo+SigfBL2H6VCP9O1Axm2Uetf/y1EJVic+ebi8ceDygffLZlwZk5k0LPdCoVJhfnUAs33Aph6RvnWotMAYbt6Tm8si1uX5ZEjl5lmM5yQkAXDysaEF7S/xbWWyd9Xoneo53HL5Z8qTy6VxaLCYwxOQ3rOTys2jm5UsnB3Y2qi8Xnd+5Se3JV2S7O6UnRgsc8j+yN0et6lj8w9jO0LLAj2TXWpTlVfqX+SBv8kp9YFAJCKRnehdB2iqMKw47xLFHkN0XH3YHA8SLAMY9PU5CY72VI06Is7ROIlZU6zvriUFTkra6JGksX2udzrvDDiW7p1p1H3/OusSzDOML8V4a8H8BM6RX/yx6rLRjY+le2aq7EH9a60m8Mlvois1m1O/PnfaeOGYAFKRAa5JppEByqomAAGzUWzDR1+vD0/5G1bsKXHgTexNTaNnp4th0OMaPjDUjI86hbYLgZedoeLmNnr4nkqNLaTBVW0oNLawhluji7nk2OTQMFkCNh/mwEmk+ZqD7N+jVeWz6nzfU1z0HrphVXHetA/yZNoLpzIbijKr8pVYM8s8pWENJUfGWIPdIVtpM1eyAurtg5w4ej05vHm9rratR49o9lcWqstoqRYBYmuq+UUavqNzQh/fJh2JJZQUCrlTUgHd1YUDw/MGFmEx1ZgmAZSY+0V6tJRApVNN643ZWY8WxS3A4eLQsnJ4/wIlh+F951TO3jV0c01RJiyNGYcFHoe3KNXOredCpauTsuXy+8uCtj80FYdkcaQGV1qVRqrNJ4eAnz4vPShXXeaC6zOQZh4Ga59OR0qTpJz4ZijWBkz4JaWwwXgwliDtMsnEUT0zazhly6BFw4C0n9vK15nOpB0uufgRiCgar8cJ3+6sGNdsm2YmtgMHYnMala02LeYqW4Ohco59WWSnPqauhi9tDqKMYdHJN5XzTG2dtHtJmBzSWqaPmN3BRofhIBo6Nkh4enihrGENRn+Z7KOOfP6GSomGONgB6x3FAKc2e2PorjmV5fDjOVCjqmsvfftCRLCtwu1wFOS2gFe4azRM39RzblFB47A/McnH3aChdsamvgcERyebenGktZ0WkbTSfn9kVI/fH9JjFI1ILJlNF0WFqUcbyxQv+14NTKy2ffHSKpGtBMSxTA1cJ3W6EG4Zm2FfMWRpZfHv17ax3KK61+mckLLOKHoDFBZ6momip8dgoEvD6dHeZV0chOrCO1jIemHw+wuXsRs8wCNgo5q5ezu6qyezBoq4IloQu0MnRUZFJdFrnauOmgv2wcBl3potoNmmhq2dYIpJW+jMbrRkTN0ORxiodrWPedoRQfSJ2dNAAuvD443uv47sGVjyTwe9jM32VwwcKjuUsLB0YRjg0x/64c+3wdv6JbY21jENbYuuzWd6/UXPi+Yms8HT3bOdWD/fMKIVrytp1ABG2tCDnP8lhXHcijA+pct/XSXnikSnWeQlkA5zj1sT9+2580tWPrtoQo5i7uqGShGqKhTCySEql7Dv+xVjUFbupoAAUGfikN1tULq4Wspk2ak4jpJlZUxSOKRi13iS2tN6XMS3um+Kt465XepPvqsmbWscPtqjC/lH93587hJW7GehE2MjAXIiQ11hbUpujnkVQMfW5jPSKiTsRaLPST8GBVD8ajpqK76hOLLGyZ+Y4ZYQLkZ4kKorRJsnAbslPuGCJLHyhcO967bjpqeFjZtMnfUPbIkBwqkxIyNnSOl37r+ir9CoognVivM/JZP+fBc19EVj7DVxSaVijoKG+nBq0XXEEpA3T2RaBitDS0QF5u05usO23DK3/Ef3PDfN5L0jzXUm4MkVWyyW5zmO30831jXFa1//oauFH5/8pXGzjSqyuafkvRa2gSJGUXqN9OssP34CdUk5eLhJnP8d8+keiZ1ozkt+cljaQ2ify35VRFVzOza3wJwpmdgNfQzZCV5sT1zltW7e1lP25ItdVNzQNevoYhbt4fv4cT/a4NJ8ObbpEPXggfbMop0fVpcbJuN2Nwe2MllyxulO/xlvfyKpH0jXw5y8S3baR6+RASpiLGchoGizg+R/j3UuZufS0Z7eeqdlg6hJ49wS+3BV+r/DA1JAo/Ez2vdYKVLX3q2PQ7fKhXmhy0ZGnIyGZuenSzhXAs2dVPeB1hGVn7r9lEOCYGhv52ZW/1UA7NRkzcFS0RrpWFa2wZPFtNNmcozt7dJ3byV5/Cd/ecoR/wSpG20hXY1Bc3rTwJhJrhtm4qyCdnNssCr2c5ZBMBA2nSg3k0SauoVkpsuPghXGlxC8To9kgyxSbmO6t620cnE5KoTfTm7Gh4xmPQvT0TBVu7KPmnuSSLZPWwwFNSbbZvGwsNpAQdLQluJKaka5klqTH9qHIODNwI153ZTmUkOuRGSsixZB4KP97qlbYweZWwPbp8ezMlsEaDgFe6hWia4D1kCRyGYSf8pjtPEwdoQYdM1T5OrrT5T4u1fCYdUeh3RkOJJg+BdY1bJsCpOx601/OU8PObZHFuP2CZNvraqdIkE7Ihup6kXlacA4rHlHb0fvRy5xOGGxeuRNqomOU7sXfKNiU8ihIy2xW4/743toKG5MPLNsaOiK+pbL6eKcH2pZ8zldhWF8YIe56lZGmY2RijR5tqnxd4yDa9K+TnHig8x8+yh8XGJt4TMvVCiBqHbc1BJ28QeQFIVTTEu9lWQ8rLumKtisY4hj1UpdYbqfMrghAhrUqd71BsASSnMeul5cI/WswCwQjTMUOXrQw8dDcZJSp6Tkxu21s5kLulcJJREY6v5mBWRiwrp1Er3f6FV7QAuNmu6I9+0k35wpS5vuglO3WH5YnanakLbW5hqy7PUxGz/UD+4cG/pIhkBUV21QlTEFJcw88OrM52E4q6MIZ++tqsmyzqRfxqY7xzBjcwLI2QGMvqVThiBDi0e9PKAk+xTrOz3Eb1KpfYD0D8wrVDhY/PjKhyR/Jhn4EW9XO91LpNrdkoVTMs9O82JgHhZagxu9zRZYiMi9v3fnOE9nt9eLAPwHjM3rHqyBnk6BCpWqkWBxzu+4jRSM6+dglFj+tFFZR0Rh3ustUXxfmmpqQmayMKUjJ4zsxmrE2OY7wpM6WbXw7uc2pkIGFromdbU/LUH1UtSI68Yq2aRiE745NKv9+bqAkmnPAwZ2bHlrOaS3t6sSSAfyAVtzWCpu+uO1pw23l5IA5/pTNtw8vsESbErr1iRYhZahJFthubmmrSxUiuvPdbpeS1h9sTNh7YGzv2MrXHP0Sr+3GabpeJuYYrSn709ijvvWpWmXb6xv1uyf461Pk/dVDUfXbfHfhdqROF7fVhiFUXfnjisD0eihJX/Xj9NU54K8H305qO74iu5wf/DPratyFGLuhBnQJxOq4EFZVWrelRhlzt1wfdz/wGLXkEOviyJ6ro+VROkW2e43TdL2NrVNgwKJfrfx00N8JrVOFozlZUzmbOl2sa6M3p65raSWHbcqZNaiYeVni0u4JnV2Jql/03Ylflk+r25vCUKr+qsb0uNKt/6tsnz4/gGsKXIi524g+Wb5YgnBzNAEShvwSs3f0ttOpiDbekK6hkYkZJD1OwBQwyxi9KtUyDpFNCzv03cwt6qzLx7dHEk3MX64lI4pzRuZFRdfNPqF/LK6NHewKoN8Od7nTbxcPAbPZy9OG1gh6wvb6m27UrKzsQ3s3jp5u6JLTJYOZb92YBkbswBxCjiyNW8yWtCoJAThG6+Y5Z1NUiLXvToXmDq+AayLNg5kRc4dOXL+adzi9l4gnjBii0r9AipR5ESZTkUo5yy6JE3lwe3jwY4Yl01JwKrF4oj2FEWBfzqU5cWO4jCJ2oVtLdc3rd6Zmj+k5TJg24ISYRB2aenrZ+/P9gy9OobtSLtle0KllVjEaGkpyyvJGrI1A2QYFcXwS50B0Liodc0Sj5eTX/CvT59f9WeSFWaFFFInK6srG8hfTeH6HOHO297zu5O2B/VpTKN5E57JbS/LO+F7z+KfldkX/zPCmhtjvPtaJQe9LDkZzo83vXgxzV1jowDYWJm6DAFgY0j+WW4JR3EcYWKDElBb7KO5c9NY15OCu5+uOzh6Y3j460dh4w56Q+OdpBdMGRG8nJdvpPaFGTMlOdT7jVuzTfK5JIVbVLh96+WvpbsBYcdwhISbGXwaxSwgCO0X9MAwkhFUUefawdrTdPlPf5BoK2O6eqi+0cTDQPbD371B01jrdoWxGkHTTkd7ptoGevo0bTh48vaA20NcPEzMHpsniyfMb7qR/D18PbLewZn3yVv5j69embvi1w5Bw9KG6MaPjvBDvlk8E12vH+krs7Z9eIkSCdANJUbV1URzYgTYdL3ACa2TJyswk6i7Jux1Me+iSgXkkPwZsiw5KbxxpG2nuqerQYnIdjwCZKQBLQyQtSisZw4e4mJKcS+maqqIcKoszfRCdQ/pzOJLxUvv4U93oHKNnfWDfO14d/u7XbpVEynYKCRVVNBSP0NhdKaoSnykp9+R5nkoLIruEivFwpLGe/qMFte1nKN6QR7KqxCb7+vf3Ngb6qLg1WRgUFl2cy4SloLN8AdLq5OaFmjbZnXGyrh0nP4F7roGQ+nyzG35P6C7uZEkDOqhfPsJthMVeIl9uObN3dwbyr6F7x+GblQvRxxWHu3dt3XCiURH8Z9rZ8xHVn+HVHAsYYKynv67GTJHkiHwJC/tjT9L+3L0jm7Z3H44Q5p4dHK4I7uk/Rz3dsnsXKnXkLvACvROLnPRn7g13uVvvZeoVqKFeTkBYUcVkM0aQiFnUiBNtelQUHpATjzXQ2fniZaLOHzP3M7IWljbmthdi3n94KrzCqu+obdVq1CDcEueUJ+XL5ZVCeoM+3s3SWQPv0gCrl5Q8aJHPJvxCaI8Qx1pbDxRk+T7l3h3ClSLiLU1bGhawQVOiuXJhAT97ADWCnqZ+eZVf6lQUm8Vt59VMZ5KSsqmv7Si5gHxKaGRkxQrucmA5jXeYUiwnff5IW+UPef1bbC7COPq5XviPe1I3ua+YHvD/wG3TruW4BSc2paStdUAT7Lpjf9KGMNhfXsdTZM0ZtXJFb+awXYNQx8xlSLZONNwjGVZ0ZR5dNxveG0konL1a28E5YFdSrPY4LWHPJ/60fW8kqz47jLnFZzisi2D00uMooUgibd1fadXY/62Sesz3JJQDYf2t6oKzbTHZQ6pBrXJN6r7PczqVQ1GB+SkeLVTwRs94hfyaUCfQGPpDF8KMKqGas0PEnJI2onTxxc0A4ws9qoeltFf3r0mOJKvbi9u1KjVwyRvU5Un5Cnl1Dq1en+QGdtYgujTBGiQlD5rT5tBdO7TH8RP1bcuFcr8bnP2dggEC2tJ07+4/ZfGFQp1+nZq8ooKSg9BLmnRDONaXXFs7ZYbPKK+vbWyEHe3SseAGFhKzUlOkhfhlLkpL5SQMo31IQGBiOh1NTAR/Jq+MGxxN0bdkAPYjThEgnQAXp77y0CyOpJjX5I9TLX3QG+KuE4A6tJNLhsVRF4tsCzNfGFqeCEeZdo/ad4SWYi+KpTpFummltHbhv7p8D5dqoS9xUKdCJ0NVv/uOu1LumWVcsGDU9I1BsG1ngf9YiU28+tFVJ9r8o03QgxONRdHFifWocJFGHRGDbW7e5RSTDCREPDSke6vgMi7LJAO+yGKWwQpH6sv3JnQGPe5pdMy1HM9x/JoWHoDqBdti2EVErMNIzCZlud0R7+Uq95LYTHIFR8yioB2VmGR/HoadDCHK3yYjG32MoSBdSav9SMUGKAU6X9T+ZwAqClM+PLFror45z8sEZFCYbvwthgpl1ty+/SoLF0AJJgqfjxOBXA2xlkB30jJWmvPpZWMHA8kL0ilZfXJjY5UkTFmvJSpgSv0zcJnS52mFEOUDY41g+rK6FxnekdWNpyVqZUcUSHKb5GSvLYwZQdH7qeXzT1/hRSf9ENRX9IFYXty19l2PfP1WdNrX92EqD2gU1G7eOfpIk6QFpwjqUomHVsrNVeIsz0k6MsRPS4pXe34/FiMGFDrbNmUnOosojly/GWuw2a12sRjdOqOM/oCfdbPA+zxiS1O7YlOOhXbza8X1LOGJ9grijZ0+cMU7KwzJM1r3DbyyKt3FwsDEG+4RT3HIQxhXFaHqdhBLlEcsPah827UO4sHtw8hoNwO9r8MwPyj5J1EOwzU3bC1e7fpj8uacy9/ZUl1d46WC9Sgx3afQg1qx1lF/8TzF6rRReBb+sLxrHkBGrgs119s0bZie2YXjH3wY9ktq8mP7OCmQHY6P6yoe6Via/vaMhdlQv70vy80EFINMDqw6ChUVnCw/l5jK/Jz0z4fbN5ARSvYLBtNpRzEazSJGYyIz4waIXjA7k07FXZ9gBMbqJjqUGpuyUiKwVIXUUMlxU2Xd7Wn8rVtu3B8YKwq+YGRpZkSH2fn5wY4O64Uzinf/U3ilVAAP23zv6tfnxh+Pcmk49yBTo4tezRgEKfewGV1VNRUNaxnG43Eo2fsPJmbQ6OR4oQq/VHK0dSme4Zjqloc1qea5prFMdEHYJCUyQuQ5QtDjvOqE5DToF1c6LixS0a1e1h5ATK0mUV3jKPDFX/v9buxex5DoJzJYg2BL87NPcAI7Rd/V1RQX2/uktASNsWZKqfj5derd1R+iDoVtJWH+neyCNiWXFF6QNmiItXiihoGBiQnZhxo9Yw1qkJpRnlP0qyPtg0a+RnpG29zdh2ycQ7XE3qw4nwKx4fmwp28jqzL8MHUadOf//eXmu4pBcR9+8mRQ3+ayc9GXA6dxcfCotoAiz2xhoSyswR6hNYWgJa91EDWIDplOt83v4TVk3vTXSPgEQ6Q1GdHGLc9XPm+iAbwHanV2QcPSeQMq27Y52dQc503kQgis9oV1qpyxKYrT9xi4lQhaKaRiF0af/hrYVBFi5GUE+nCuMkQf///ap6A6JejW271wOTVJ8+JmN0X09B16098r6THKe2ETVoA9OXbIcvzx8KW+6YMUMJKBCC33R7FbVTkTU3xRmEn2ycEF3jpGdmluuZgtEDXmyll4cem6g1Wa+jWhBTx1Se6/nWLgE29WsCEnO8rO6hfWdW3Ot7/qM23oUm7xmetnetoRR8ocp7SIvaj6BEQlpiGR/JeQ7ouHJ9AzgplZziCtuzoIm5RQOhrVwo3gYfvxfNYG9tQBosBza7pJshXFrlxkl//mwsioi6vV6u3UnIfZuUmE5g3t1xy2OR8+GLEndNlqJxgvg2FpML+c59ZOe6vXyxRjDJz9fMEksnqiNPlAzhX4i0OY/hBFFda/i9hXD/B2RjQNxepgtgBt20jfxv/4rri1f5cjsJqxbNsX73WRbnATOHF+G+nr2B8/FTf373b8+rv/wQCQkCvNRX5zfnOGb0BFekUA9l1mgKAXCACAV6s4602zWwLQNMi+FTPw3NWUKAQHxgS6NeSJ4TGkROrA/OXBiC7niobx8o491/d6Z1LOg6DIw9LSeZu4AdpQSUeMK0kGkWJTuBTm9c8wPxfStfTOhewwSL8FgimP4/thMOLl6TPAnd99aBic8TiH/vTucYZbZlIlBCtfl9IQiU0iN64jVtxK74Dgs6F1iu6hQRHm3PBP2UOztodeUjc2cWNb71tPeJBJha+uIUeHGI02VrOiei5am+iHFUQl0+YuwDRikTAeszvgJtTbh3nkdkmXfMcq8eS6hbaCsZxBQCvZDtv3HCKqUgSqhxv6I6vo6RIi62AEbebglxdMskM72WHEDN9TMSApbEzICk3T4GmWlZtpuODsDU/S3x8Cqkw/mffVNIxWdq3p/CAmbLfX1Xl75povFdYflxYRQ47lR9pJy3l59KaZnjHaAhROY8vFLbWCUxq1xZ1+3O5tyrAw3vpeOgWDvpJcnY34L4LiDlaRAQSkP7wRZc8VpolO+3Lnep+WobMyteG6mQZVUshgSKy47ElZZ3g5NVVIYpu0wM5HIGkcpTj/NCSDozzhFh2R0jYlzgUCexzS2214e3KxjXKFBmqbJwumDmdWntTreWgl7LANfeu72EmtiDz/z7ck2cLNg1VVhIA+rUzqoY4bBx4qlQ/uXmnAZH8bB3X4w7FBtNTcLcJmQvTnzNAqI6weuuyw60lb4aXfiTe9C60ueRz4kIgW9AQPbqRpURuwlX7mraG0KH56yrCPiHsduDA/cz0wIySx7sKd5Rtrvzs7HO+CpAOBHoxEZAaZEjgtMC/s/1S4cqU3bLtLmVb9hLr9ls4vBPsPN6aw9Ixt7MAXhEOyaNvMZiSrdYuG1JETyXTlVCa3T5NFiQKvp0H/PxLXOQcYkhBwM6wvE6PMhOGBfItZtxg8GgpBgLCgRB0pgciFIdUlabKXogQ2LzewAi3M/GhpcIiWFZZGFghxTJdW2ngEnMSRiBVVgnSG6rD3FDuMPX8oEvntkb1ncBI96nSjPh5wDa9IDNIMfH//Elo7UMN3pkKtjMykufB4ZfGo0DEojM5JE5fUpkgT8YGxh39Hp/glMMrYnp1ewfbvCe0MVaIn4LhakQixCHx//zXqU6BGwts+Rw+7wGvfOwf3AhXtWZmMiR2x+JA9T2fKC1g5MedTr3y/clhNYwu9y5MIxEikiBmzpXhya+3z19FoBaRwKWfdgHQsjWO4iEIbkzx5iNxMFAmIUMfBDbAG4UVlfzNj+bNeoQhLGsXfRZYLVdFlkoylO6HhATSOUjbeKJXJs3hlak0L35kpCNHFooPJ/21RwfOcSEhKyLQGekMYXMdP8G/wsUEcRY6vEgVwMEnEpVdUQBLrJlGFZZJTU9pQ+KNjIQuxcBZbKW5pFMj9syOp3241jz4OYdGxIAQobi4IKf9Qsxdwl3skgPhvYXyzEDuv/pUkSiEQfhknqpCq4Dk+eSVz1zwIRtAqfiqRHeuyEECh7nh48262NSvy+IMxAGdP/IjIXL8VjuLoSmwLRGFSSoqQl4Tf0AYbgyIoXKk4qjSFwU3Y5n08DUJeOhWB1F+z8wyXf/6uzKjdmFIm94jBD+x+suar1rd2CYVz0Ct9X4OAsFm3yDLCuvenZUaynClzTCKmRzYVmWEKckoKnuWMYzYeDiexJWJulUDBD9zmPYUOoi0eZ6GXsyGpTx8V5A6uAMenvIzVzW0BD7jXQ2lo2IItglIokzXXcioiSVAdhTnP0UMAp6uSOtvl6bwPCtqFilYAqRC9rvzqBE/DkaPicdrsH4bPgtM0YToKjPoGqHWrnjgKyNEoSh3Gvctn7Pa3QrpP4sPGBuLgGSXDYbgLISNvR6BnsK5TbuD/9yDPtJmwHcKg8LbXCelQ/wES0Ydg4Cxmzgb+0SzxEBhCsIsGCWRanDUBMGdaInFL6LbMmo4eNrI7zq+8brCsfeflvZ5Z0IpUz6m8ulDYF8fEPn1cFEzdInVAbkYKwkQUnhAvLKQ5HHg3TLWTr6Hjz/4qGy+Lv2x+MqdjITUUUrl3HhF3iyb+/JYb8Pq6F809vJTuPHjSDZuJKCmsnIQKys/5HIiMM4kHM1IGgUUXqihYhv+Pwyk91hXi+hFL/aixIwYVFTy07H7dneYBb2ntfPc8zMna41leSmEADzqwuDzsnhRk0+Ns7Wwx6vIZbVS3wwQECyfj8TQ4szmSCYTvXfaKy2Id08qmHfTc0D5EN9fPZ66YlyQrKZg6T7q3X+eqnSSVHdzOj6GPZrP5HvtLC0CPdUac2Zq6/7pFQYAdUPA2jfDvpmRPc6mJZizqRLyukQHLds6qBUiNcRZrSALESB6LzHyWMJ9vY45EZUXAv70YmVjTyKQ6O3kL9mmhDVAGx7Q0HZ3sHCbDMoed0QAt1jMESQqby9l1H3hi9pnSL82Tbvd38JQowhRkaUqZsjAk69h4Cv/Irmo/kpUGLkLw/OsUv0dq40iO4Q/uujvwJM3WPWBnUc3L02+UZcC3TZ8ZG5Opy00D78fySjKLaPfpVUEwr2LUgVk4U/eo2OuhW3RUweljmxOY1xYS2KEMlEcG7OL94tA28Z09B5Aou4JK+A2UF3L2UhIcCHbZtRoEhtTAyd4CxIbitKIpDXFee+Nnx2hEaoWymCZxtYkrCER4n8of259EtJRQk10RcNXp0wBijwsVl7b3Bi0RNjKR5mtbcGH9MmzOPwlOQeZ+eXemDQ7r/8+Bxk8Xp9l6+D75BQKyNNiR5gmW9oYz8PQIWKYseR4hKQ+OtUyG927Mfw3esFxM/8CDY+WO+ePtsX9gEhbC4lIiiVYwHb2kVJ6MR21zCVUlRRfnyDkAl6CDpk1O5kY7xLQhtR9dSHgE8NFB6u54VEhjSm770lk/IBKhsAgfECzueDVySqOirZxHpYh7tsGqBnMbhuruFpNPpux/eWhPNimS61WWECuIQKTQoqfzu+aHtWZEabK4fbm50ZXw3WBPTHrfHRi8vfPZOyQV/o5jqPc/7YuipjV/uZVWHe9vuJic6Q0PKxUDRD0hCEy733T4L3kFTNVYNXhxlhvmyoH15XT11FFCFrPagvPYsmoedr6ZetAz6YWF5lo5Z5872yhF2/gTz9tpNoDCGvVCvVFZRuKFi6l0Z2MdeiqCUumOEGDvXN7oluhjm3UBDvW1aHvIyV5UxCljw7lQYVyxQZ715qontAsKY0oYMRhi+iwcPLJx9K3WxPcJsRoSDe7BZIeXJ1cWRyJKBoGpHlkwBtMTWYDfmCO1b7IGgU/Eoh2c8NlmWHssmL7dV+AcDr9hYBA5lmANl1Ys502Uq6mxWHcB0RoDtvhj7mI50zOB+9yx8kwIASc8XSEAKF+Cw03t3Rm3b+YbgfUeAzv3EQyhR/gCMJyak6m419clYg+JCyJaTUD8UOeRzktFvov+c6S0cucij8O6AWH5xBxYz6XAsgx/o9g9Lb8lG8G4AAoYvqv7BKRA6mMcO/rsKspXEIUzAqIbHiWFvQ/W+NcoyRLyLuhZTyEWNIBb5MzdTORhLrz1tHG4LJAAB6ze64HoXzlsH2FTbsupF4f17KBm5TID43y7JuNR+vJuhzavKdc+mImzZAbtb8sT8ky4Ch1DfYNgLDohHOsjUq/L6fNiRPF5vLxoWg3C+wugwZrhHGShT3n7bYd7ZMo6vJ6XZxy1PIjE7RG1R8IBrOi+YQ2yFJbadEBenqSy1teXGJQHvM8iKGTKxBzEFdDpD1caDqhHCNgISXiqmNdGZjstJzzSq1yVdBa1u1VdBJ+pMUv7q+6PdGcW2kDfeAkP9VFHVwL+TRCtJD/jM2p+ZGoLLvT6F+k4ghQ/XsFGGQUKLHWTBvKpxRHF+lVcP4DcJoo5ipqrtPmO2lI5JHagNUSQSMGk4oG2YlI5N2gpdLHO5idqR5082ZqM9MPiwmmlQJ90CJpVTSZUF4XcSUspxNHIdQURQLOuf4DZ/0+0tHVT6t3GU1MdqYWo9JaLVP+z+5/dWoPH3MUX0uQj+x8/6vN/jdd895txtGtcX3da0bkwPBHNUiP2d7QmLFSAQYYB6ZljF1rqVTBSothaOBhTVKhME2PR5zyKEeMEV3H8coX85Q85d5IeDTE3Av1xdyxm/T/pY8gq1mTX9XWm9w0/a71LZ/z4zzmyEB9OiKB7VLDmHcsVaQAParyQbwSA9R67MQNgQKXJTqN6mW2T3J1GQWoVYcPSGn9rXmqVsxg0crUF8uLotry6Ze4GGtJNbAIHgzfZmwQ+OxlQiPw7XoL0aiFodWvAIlSeROGS1sagdDWNUm0W2Axtju3qgqFdakgOZ55qoCAEoQ942P+/oI+UCkt/RUhR3mUDSKlVYEZIQf4FQ8BioIJiKKbUDjTH2iUGPj4QXnyAfhaoAUguIAKHmJ2l5STIjGy1PRWbS2urS1CHSSYI6XXYftrkVjE/mRkD7KLKVlrScNyEf+dCWtlZ+Z4wYlP7/nnclpkW14mCKCxbM6oE7Oy+VrLjqYsdxF+uDB0XinVqtSh4eni6kLegq6s0Yqbe/1eKt9n7VG8KW9tdItuAOHU9ZD0QPRu2/WJBKCM0VVGyefWo99UQebXlk2JwqObPoGSlr6V1HBX1v5nFXom3Ny7cj6/6A6aqw/o4ZJ96TZPsQflja4rOAolPYlMiwPpGYBjxKgzpTkP/Z0fJ1DPWM4E6Egu9V/WNnhCDsuaPg56BjNZQvulZxKgU1ltLXwqhCktGRJcIKtcGjGsDsPUSxG96KWSXqd3O7q+A6h9uU+h+LrOhn9Pb+Q+IzLObrfSwzKO11SSUhogOEdNrcX30TilVuaMtDZOc8PdcSBtric5+C9AklmDqxsaKj7argCv2oPq6hyDHQBvm5S13c1uuX0496RNuPZG4kSGPZ0WoTNEWq7aQVC8Lfw8rSZo73yyAtFfDSqHyE1dMgkeWyDZaxABAfwb8euR2WxwAQSE2oYaRF1InFL9xc4cmlAvnDHaELpm6ZcOR1JPvLCn+wPym0rxXnRWOJsv48rFqJKgCAtQ1lySkcvYXJGq7DlWCTCJ9UP/hETSELSmRKM3kG4HtHXv4WOvebpGWLKsdmkQne5MS0dT5GF52qFDRctDc6pWIFI9gWKJgEa6sGAaFdFGWKGnzy7giiy9qzlXdFCmD8yIAyYBpAntHafAIl16CqAIF8j2ME8ZfzMcOR2ZlvMvujIxHKvgQJofODQwkhYhfrUObhtkjyvgYbxEvincjnfVIzmypb22D/vN74jE2faWOsVmE9oV5+priLL0B3cIIVqgvos04s5sbFZPEIMtzY/eAzVaA/8Ps/JD8hGcPEAYWqGJliRvWkxQpO7+zP+oopeSCZxip9dapr9CQaXofPWTm0+H3GL8I3yfldT9sbtMkZIeQbuHRqvKeXI2dysoqta1r/9rbP7/CiFsBCmphuHEyONmPHPjjjn3MVfNwO3aagz4bqEPwyGeXtKSKLKrd6Unbvuj+wqaZQpH/Jf7JNJ7F3BG1xTNC/NgGMPiyG+uQXcDgGJxd+vmMfosXANQkRI1h5Yp1P2puE/eODJRVhkA/m77rW0zfIk/vzp2wbjRh8/BYH9XIu0VQ+JkYuNaZsU1/b1lrrRbHK0jxclX9Ar10xfFACFDcWPEE/w+77gFxmwNR1hjp0N5Qgna8M/TL1UikOkLb2wSE5TjwiAAiTZ3IEU1EKTaGUzbrmE+Be40CMX28whJSUpHI3N71Jn/AkxA9wCS31DFKc2wB76dpYaOoFxfgA30pqUn4ak5tUXP/7K4H9J0XJNm8gICs4iIWw0+WEBQFJMG3IreH6xtJ9wQScm2vg0zWiEFZnHjzC5YgA6s4zAcE2uO3ixFEdCrKkZBvaPX4GurE7wsLYMaqz8hqOZ6NfWbsUr9lNJFLsKZhqIFqYpFYyBtUH2SSLh5z1RJUZdG8NAMLhS6ZDlusZblyNSpjYx1eZ4e90SDovveBk6FZikqvZ09f7DrVyfxuo2fYvtdSnvsTYRQolPD26BjommxA+JdGIgwL+jgdGq7XDPVswTvX0OSasz/Kve8F5hkJwxx96AhsR8W6CFGUIGffRcK0XQf0YLZQH/QeLAjzbQeEk2QJfhkaGoftzUf4nZAfytqyTDUxjdSDzTHJETGhKemtWyHzm5OoCGTUKp8IpImCo0xLXhuE83hOLKn1c5iVe9Jhtb7TmZmuEb1W2VPHVPOBec1Fwlp/VRbd80lgKvm3Kjsy2LS8f21nPlFnh62uniDIe9+JMJlotPkl2urGCti2Ne/Yi8bxiYK+imAXZVpGusY/KCElF8rXQh5DmwjQo13mfRCSmG1r7+ALmeG7LmkEm99zTKqpK3xspSpvECBJ8Yb0vLpahrgtmDp2YVclCNOXGfjxoc5aFecOBMq8jhoZGDGDSPGXk5AKjiHGCFbQSfANYhJQv2rgfh8sTdtlZ6RzNl4Y60YZLNHHJEdBktBL9KaoceQfmH/zmxRWCtY2vlidiohEwXaY6usZS8pguZuQ+u367j5YZRwPEY6ZSx5XfoGqphsGJj5laFxk4Boh3D/BmdinZ2LiUYEiRgeko3PBMCdyTyLa+HJg1acOaQe+u/gKZQExv/8qWzNx/z7qA0SDgnDU57HkCqw/fdynHBmIdqAkzQ7MVU7EKVDZkFhPTDY78mG7hB80bO0NYSJhPuXklgx47B6YMxbqYmV1ztRm0IyW5mQHLRzJqKKE/MlN2oKSuDE18aSyUx2bpu92V0nZ050YP0L+4zC5M6Omb++x7x3Ycee+TdmRdYKyygyM9wi7Z9pLOE7yVqJTpby+alxT9G6cGymezMbF5ScU2dixFM7CcBpyNZFYw+3Y3JnGDEqTKrBJhG3HDrU1Q7vtkFFgsjExIj40M1iul9fJq6ULC8XqGVE639RmUtLQceQwGo6oZ3ZgoOvKLtrSfdL8lTd0DI31qX6KPJ8icwwOiRXZ+vwVlKLjfHym699gVZZDTMOZ8m3StI7eWz8zEgfzhbRrh5+3Hp4pzo0uUuLTcTlDvjWn5V5iPyyLB99tgSAZ29fenJ+2jsvyy0RIWAR6SsoUX+rnXZgMr/KjBcM1IqMyvAU3ThISmoOAu8bRFpBVn6drspzYnZhUIFu77/KK3N6Kc4UbehJbFWX1EERx7KwvGISjY0ZrMEet9MNbC3BHByqHambZXFIxpJJZVVyMC55M32EWANeON4F+OQZFFYcbZsIobiMQaqPq28YBODpqiuaw4RtFraGiv6aVVnPx8CqcKqM57mvbBFlT9qg2msd/DZ5ukuTmRWqQoojH2iUFdTSPVXwZJYl4bgdyWHKslJZA2bx/xNi5UI0h62Q2+4uxRaEjvrWkoY2bmu1NuZfDv57g2KYvIZuhh86m+HUuR85uLmtS02ilgC31Zie1rfusaAepu7mY9TW90edWbAarvPdiHDORPLVwxVL83PLlTeTQi1LaK01bHH9TbDh+mMjdIO8K29oyVm6vuaSUWHdKI+cefsUQTfdOHKpxuBLOXWUdtnVOiORwhx1I7r6B3hdlzalih/fvw4uvuNuHI/AEv9nURdv3bPKRddaCE5CLaZO+Z6WXsJskF4HpHTSQjaFZy0qvK6T/8WT0McWh7l1bp040KYLvKs7Z93cdkXn0DZxiWXIz8VBPWrmPqaH2xzeMexlkIdvswI8Mezflrm7S+2Oqlxd/KoWu2AMj6whHlHuuj0LIIZqHNvrkNjFqqNKG9DbHUZapoYUcMSJuKSlE+HYntxgEFRGWbg9c6uy5PHL3UEeZTeisH8Bs0v90ITWdrrglSFHYBHRh/VVBMmtSpJlAF9xfbhMgE7HtXcpg2C/xrgpd5qAc9+lEtey/DZF1N60cWNku6REpKCsiPT7yZDqvKqiCkZ8bABN3tQqQLhmstmBSwCZhX5fvx1z50yFxbWAKnzuUwfv7zPNrWmxLUU5thuW5MS9mNr4uN10w0mjtyzVaNNc3xmpdW6vpoCQonshiifZZsWMFTZ65C3M4KyzDrmGpdaHxI4ZfNHzB6v2zjHBM62RoJ6+yTIn1GqVNERt+knypWJqE2FkJc0HKHJL48ftKC5buXGUMqMcqO6JK+BF/5h69bVF7C3S0pgj4y4Xm1oa0qMdowXVEKE87m2Br78u7vG31o/dTHjUUE7xZzBWXSh3sJraCsLZCUZLlOkK7VW4qs6IbI+47t1SXJOQULn80rYqibaytd4NNDewaPzd4JmQhx4L64OhwOn2zAK2T5sIX41NMdsspkzlWAVjPVKMnVoUpvgxK2D7bS/e18Ku0NiMCRcaZaWECTqzTnA2mqgrcq4mlLedfhECYVYk5xxk9fLIcUA+YlylGK8PIzM0DtdK6B4NHTWRRlg109cCtLfdXc4vp+vp6uqnWcFSJ/jFXyzwC8ia5pjbnmeibeJWj8ZH+ACHcE+lC7AWbeFYg8LHuectwjyQQ88bQZWJTT6byHT54BR9c5JNZ4RrSP0rhcpXPODIQHUBJnB2YrTgYp2CrgqIyM3McnjEui9RpwDo81nQ0Iu95G9hBENvPmPsPEDLn6scS9KAQ3FiDyDw5VoyHyCUVdcrStMX4sk8w1OqZ6ZGBHyzvH0gfzYxniKPLxnvTW4ogiuTMEy+s4hMke2buoJnts8qIoF5QdMpMGMILAbDigTuDUd2o56ncnhbfU9Su5rRXZVeNdk13bzaufHzJJjkygcwUq+NjUAKriF3XzDW0/YuxCbzCt1ozNwvHoKkLIU/3VzN33AVDSxaGZPBmbmy5YyACo0/r0nQtBxNLros6adFAwySjRiUvdq7pul/n91nMd9eMu7z0VNMNZrKGIPPXWtym6zJzEu5ZT3f//OBcvotwHc0pDSoniu+u695eaCdoeRNw9irVNPEea0yj86WlraX6nR+33+I20zjkPsvocvbH7Pc9k0HsyKCYgida8jLYeAScz+Rv3ZXNwfvsPwzi8pImlQxVe0GHJS0riY1CgGMVpG06wVjAPTyh1ljfxKsdhY/01yCESVqxcbuurrhuNHj36iksTVevcFcpdrm2IZ6r5ezmOLM6x1VeGTQkpFDBkMKyk24Zz6LmONQ5IkJtVhu0alnRnHeaDUEYNCJ09Xh1HLx/iXfaM7EDnzHZN50Xgg7Vem3qTUB7Ic4VRCAeHqiSZnNDLH+ZeWHRPk1ngfdXq+YlBmawmoVssH6Wbmn6BDk3n1zLqQh4t/46XM9l21+LOnw8Aotwj61temaEuneh0fdCtEHpPU3B1zHrFpT5KBJgd1IuhjvfcKogr9Atgd+qyORNkFYMuroQWShNeRPbEI6+TtDrghZeus8f/6czy1mlj2ofgVqvB5WgX1ZtYObZInO8TgQxSnWr+3JlpCkJNrohEpbT+iJk29u93md8CK3ee2o/BXpkb7jMxqzUnSu/FtFUcgWIOiLmDOS6QCs1ZuDB64ouWEcWZbm84huwOjryupthpz9vysz3FiBDIyd/ZQak2BKNQ2JEweMvP+jSOQ6dclcUhTZj+Nl1YNuZhtMNZ8NT7cZTXZyw8enoySgzA60j5MX6jKNbYSv5+0e37hg8DBWqz3cLUOGP5ntDBzn96sa2vCE/QvL6ik3TFe3qlkLeZvHuWdFeH00DfRfTbHh56BJ3i3oEGTNU2dcCqfwem4ftms2/rv1U4CqLS2WJ8Z154y5CiwKabePtHG8lWi5Nnq7GN8UM4KsA7LFwAbmJJTb2DzVUxMlEUpLjAKRjvjOdC5FJ03EJWUij7zCrWkZ7RwgmbVBumgISxiZFEWCRDP1cUBO3gpGcyy+YEqXzTYyYSb0cdWx2ciUGgcjwEqE5Ivx4ZUyjDd0n3V8ROGaZes8JLTRxxHmeWqSjVX4ZCCkLTxMKevkyP69CLqLGlwkMmLqlXIdTMUlbauhqqWy4hlPO//9Pp5yhrbuD4/HjZ8ODCEHkIzwZZCgkJqXySXlneBlVLiSyTUZg5yORVI5S/K1XMNRSK3tmalSPKN1w1Co6XNA+df3b7+kJBuMUJmja/nZatLkkQ00h1uvIJ+1xLLoFar2hJ50JgM1VyJC37daQrQHdxtGeUxMBukyTJh2AvnNtpT87U86m7Xf1KLuB6OnDBoThaCz0a/yQkx+Kj3lLUECWnaACdi4Gkraf+tahwCGOUjxbe5hi52CsX1Q6lgAhL3+NbvuE/9naih+GTo78FtvoPiR5QRZJdediVOhlcYjv8QikqtwM4LY9RgN+hIUAoMHbYa628vFZUiQ/twGOqf8YD7UdS8UW7xAyt33Liv3EdsJIWlIBj3wakE3S/MugVeP+URng+8Kq7qpHx+LSjYLTmwFe9g0s1I5vSL/XvbonsgYU9az9YZtR9RFqzv+bOqoun32ns75//uliqOQVWn/YHlLt5QG3g5zsDa4r8K3Hd8tx8Rsaaluz1zlXbE+cQ6fteOU9gVPwefseDazPUHViAU3HEZ4A+hJB413vIsAVMLh8MnVdoHfFgfPQsvPO+J7Zbxkf6Ik8JTrw0aFMCa6sJKDyl5gAT0X798/YH/Xo5/+hp1PLi+Vp7Imyssr/c3fkkcEPLXWxqbzkX00OUUYtvmq1jTvlGn/Fd92v0+43lwTf/Jz84MtINpvHOt7itdwWdWzkD92j21jmK9mRcUORDo4k1F3Va3OWCqgl0m/ZljjL//VnFOzTOWMeTBkj69d54Gnna6EEk57NlOgjs3C+BExSPT6Wfh4Sl8nku0ePA/gbByE3M3kaRbOJbJEfvZX2kXVKm1yrioH2wQzIsIx5kl/YT4NilnyQNglhOB0U9lWgYHRpPTWSu4cQnDI9kR81YBr/eFQmnM6N/OHHdBtBZaNU8CW9mDwwStAAANHATvIiWopN43/6tukDz+IGH6xPOqT7aVW9br2fL7P7lL926GjP/yVawZa5xPxXoC/wZw1pSCl4wNajAMwHpTFsdv4FQXYF9RmLX7GI+x5idtEoT6NRme4pRbYFi3qLJz1QMHoLVINBV/s7dtk9LMYsDHViOZJ+oPmVcidKRVt7RnzDGVeCjn69RXe9VUasGX32FYu2JO9NiZnYAM94xahMIiEw6MtTfOjpvBjGv/M9m/kZVvY6p6x6bPVvTpIRyPIyb5VLMUot/ww//4/ropGp8aRc83Z2ehl1/By/uS0Rfr8+mGHli28t35PLW9GIfZZWTkajrDpZmM4oqyqHrlYDJ8yJUzrGRlOyTDfymvrXXTZcS62jfJJTxEj1fysTaqvXWabEBDvcgh36kLPGrx6bqmzWRe5TFjVlmVwrYYo5MsnbSbU2JllXnan7663RKPPWxZPRqGGRhdN6kwaD1tdawlDu42tnITHagfzpBPk34PUDiX+B1E+ppi5EzrsecNtfAxj1VIy0FFS7r9z1lZCwQSzdjw9a5ax17V+NvAGm3uIbbQYukmueoJq62+RmS5ukt7TG1HPY5YcEtPzZgqjmYHrSBNEDaxDAQFxu5UOQJYiyAYy+RTTBGgQyhbR6Yp/qrcufXRPlf0GvQfTAGgQwEGcdnAdZgkhbxR/Sv5omWINAlHGrKaNGUDO4GYNAn+VGfcAt2ka1IVgVFMHkccHYDf3fSBaqrgRFt940msYYZrT01iHFP68e9YYyGK0bCipwLuH0Gx7TRb+gg6PdZgpaNE7LnPvFPdNgn/PSazKp2WuBlbjVftfrsI/jddmW96mJ6j4h5cpTpkCGdEpFXPlK5ScnYUKE8okrmTKC6bECWUiOaixlXxDSuEKZqxJ0RQnCGFLIrYCakGcwRuXImFFIZQuLBteUvZHVSsVCHloQY2YsSv2+ECStUSizElIFYPmbqCSpOjmYS6YYJcciV3RKAzE8UhIV/32OhHsSUBQoDgiFKUcaQgVNu64ID8uvUCmV2m4GImQS1UAl4I0UXyVgUiqp3B41twyqiOy4TyNWUswtHP1eMnKxmcusSF4imN0W0kghqRBSQY4j3fYuFQaJ+tR1IV0xjlCAop9y8QiDFpX79Vjn9WMD53kohYSwu0iYve6SWlmq7NHB9wmWSG2WJuhAyZUEQNEAsVzIJcjB1/W+n9Mz1jSKpc0FUiNRl5pTaP27ll9HH4gBQ0aMmTBlxpwFS2BWrNmwZceeA0dOnLlw5cadB09evPnw5cdfgEAQQYIJ/MfChIsQCSpKtBix4sRLkCgJDBwCEgoaBhYOHgERCRkFFQ0dAxMLGwdXMh4+gRRCImISUotmNGpy2LCXmnXrMGmL2Rna/anBgA8+6jKi1aqH3ltvwWeffLHRNuecsZ1Mql5yF6Q567wrLrrksr8pXHfVNUvSvdPnlhtuUvrXa20yZciSTSXHlFz58tzym8WKqJX4R6lyZSpUqbTPtBrVatV55Y0Dbtth2R0P3LXTLiv2Omm3PU5psdURR+dN23MyQkJCQq9b+Jz2/5CyvU/YNO2nAA==) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
    </style>
 */});

// 雨伞背景
const ADD_UMBRELLA_BACKGROUND = (callback) => {
    const SCRIPT = document.createElement('script');
    SCRIPT.src = '//s0.pstatp.com/cdn/expire-1-M/canvas-nest.js/2.0.4/canvas-nest.js';
    SCRIPT.opacity = '0.1';
    SCRIPT.zIndex = '-99';
    SCRIPT.count = '10';
    LOADED(SCRIPT, callback);
    document.body.appendChild(SCRIPT);
};

const ADD_IMGAGE_BACKGROUND = () => {
    const IMAGE = 'url()'
    const DIV = document.createElement('div');
    DIV.style.background = IMAGE;
    DIV.style.pointerEvents = 'none';
    DIV.style.backgroundRepeat = 'no-repeat';
    DIV.style.backgroundSize = 'cover';
    DIV.style.position = 'fixed';
    DIV.style.left = '0';
    DIV.style.top = '0';
    DIV.style.width = '100%';
    DIV.style.height = '100%';
    DIV.style.filter = 'blur(2px)';
    DIV.style.msFilter = 'blur(2px)';
    DIV.style.webkitFilter = 'blur(2px)';
    DIV.style.mozFilter = 'blur(2px)';
    DIV.style.oFilter = 'blur(2px)';
    DIV.style.opacity = '0.2';
    document.body.appendChild(DIV);
};

// 移除 README.md
const REMOVE_README = () => {
    const TBODY = document.querySelector('#list-table').querySelector('tbody');
    const TRS = TBODY.querySelectorAll('tr');
    let readme = null;
    TRS.forEach(TR => {
        const A = TR.querySelector('a');
        if (A && A.href.indexOf('README.md') >= 0) {
            readme = TR;
            return;
        }
    });
    readme ? TBODY.removeChild(readme) : null;
};

// 时间和 IP 居中显示，时间走动
const ADD_TIME_AND_IP = () => {
    // 居中并显示
    const CENTER = document.createElement('center');
    CENTER.style.paddingBottom = '40px';
    const FONT = document.body.querySelector('font');
    FONT.id = 'date';
    FONT.removeAttribute('color');
    CENTER.appendChild(FONT);
    document.body.insertBefore(CENTER, document.body.querySelector('#mask'));

    // 时间走动
    setInterval(() => {
        const ADDZERO = num => num < 10 ? '0' + num : num; const FUN_WEEK = week => '日一二三四五六'[week];

        const DATE = new Date();
        const YEAR = DATE.getFullYear();
        const MONTH = DATE.getMonth() + 1;
        const DAY = DATE.getDate();
        const HOURS = DATE.getHours();
        const MINUTES = DATE.getMinutes();
        const SECONDS = DATE.getSeconds();
        const WEEK = DATE.getDay();

        const ELEMENT = document.querySelector('#date');
        const IP = ELEMENT.innerHTML.split(' ').pop();
        ELEMENT.innerHTML = 'yyyy-mm-dd hh:MM:ss 星期w'
            .replace('yyyy', YEAR)
            .replace('mm', ADDZERO(MONTH))
            .replace('dd', ADDZERO(DAY))
            .replace('hh', ADDZERO(HOURS))
            .replace('MM', ADDZERO(MINUTES))
            .replace('ss', ADDZERO(SECONDS))
            .replace('w', FUN_WEEK(WEEK))
            + ' ' + IP;
    }, 1000);
};

// 其他 UI
const CHANGE_OHTER_UI = () => {
    // 标题
    document.head.innerHTML += FONT_PINGYONG
    const TITLE = document.body.querySelector('.title');
    TITLE.style.margin = '0';
    TITLE.style.lineHeight = '2em';
    TITLE.style.fontSize = '300%';
    TITLE.style.fontFamily = 'PinyonScript';

    // 语言选择框
    const LANGUAGES = document.body.querySelector('.changelanguage');
    if (screen.width < 800) {
        // 移动端隐藏
        LANGUAGES.style.display = 'none';
    } else {
        LANGUAGES.style.position = 'fixed';
        LANGUAGES.style.top = '5px';
        LANGUAGES.style.outline = 'none';
        LANGUAGES.style.borderRadius = '2em';
        LANGUAGES.style.height = '1.5em';
    }

    // 左上角管理
    const OPERATE = document.body.querySelector('.operate');
    if (OPERATE) {
        OPERATE.style.position = 'fixed';
        OPERATE.style.top = '5px';
        OPERATE.style.left = '5px';
        OPERATE.style.border = '1px #00000066 solid';
        OPERATE.style.borderRadius = '2em';
        OPERATE.style.background = 'white';
        OPERATE.style.minWidth = '3em';
        OPERATE.style.textAlign = 'center';
        OPERATE.style.lineHeight = '1.3em';
    }

    // BODY
    document.body.style = '';
    document.body.zIndex = '99';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    // 文件列表和 README 阴影
    const LIST_WRAPPERs = document.body.querySelectorAll('.list-wrapper');
    LIST_WRAPPERs.forEach(WRAPPER => {
        WRAPPER.style.boxShadow = '0 0 32px 0 rgba(128, 128, 128, 0.18)';
    });
    // 文件列表圆角
    const LTFILEs = document.body.querySelectorAll('.list-table .file');
    LTFILEs.forEach(FILE => {
        FILE.style.borderRadius = '25px 0px 0px 25px';
    });
    const LTSIZEs = document.body.querySelectorAll('.list-table .size');
    LTSIZEs.forEach(SIZE => {
        SIZE.style.borderRadius = '0px 25px 25px 0px';
    });
    // 文件路径行距
    const THEADER = document.body.querySelector('.list-header-container .table-header');
    THEADER.style.lineHeight = '1.3em';

    // 移动端隐藏修改时间
    if (screen.width < 800) {
        const LTUPDATEATs = document.body.querySelectorAll('.list-table .updated_at');
        LTUPDATEATs.forEach(UPDATEAT => {
            UPDATEAT.style.display = 'none';
        });
    }
    // 按钮
    const BUTTONs = document.body.querySelectorAll('button');
    BUTTONs.forEach(BUTTON => {
        BUTTON.style.border = '1px #00000066 solid';
        BUTTON.style.borderRadius = '2em';
        BUTTON.style.background = 'white';
    });
    const SUBMITs = document.body.querySelectorAll('input[type="submit" i]');
    SUBMITs.forEach(SUBMIT => {
        SUBMIT.style.border = '1px #00000066 solid';
        SUBMIT.style.borderRadius = '2em';
        SUBMIT.style.background = 'white';
        SUBMIT.style.minWidth = '5em';
    });
    const FILE_BUTTONs = document.body.querySelectorAll('input[type="button" i]');
    FILE_BUTTONs.forEach(FBUTTON => {
        FBUTTON.style.border = '1px #00000066 solid';
        FBUTTON.style.borderRadius = '2em';
        FBUTTON.style.background = 'white';
        FBUTTON.style.minWidth = '5em';
        FBUTTON.style.height = '1.9em';
    });
    // 输入框
    const PASSWORDs = document.body.querySelectorAll('input[type="password" i], input[type="file" i]');
    PASSWORDs.forEach(PASSWORD => {
        PASSWORD.style.outline = 'none';
        PASSWORD.style.textAlign = 'center';
        PASSWORD.style.lineHeight = '1.3em';
        PASSWORD.style.border = '1px #00000066 solid';
        PASSWORD.style.borderRadius = '2em';
        PASSWORD.style.background = 'white';
        PASSWORD.style.minWidth = '10em';
    });
    // URL
    const URL = document.body.querySelector('#url');
    if (URL) {
        URL.style.resize = 'none';
        URL.style.outline = 'none';
        URL.style.textAlign = 'center';
        URL.style.height = 'initial';
        URL.style.borderRadius = '2em';
    }
};

// 主函数
const MAIN_HANDLER = () => {
    IGNORE_EXCEPTION([
        ADD_IMGAGE_BACKGROUND,
        ADD_UMBRELLA_BACKGROUND,
        CHANGE_OHTER_UI,
        REMOVE_README,
        ADD_TIME_AND_IP
    ]);
    document.body.removeAttribute('hidden');
};

// 文档加载完毕执行主函数
document.addEventListener('DOMContentLoaded', MAIN_HANDLER);
