# Fonts

`StackSansText-Variable.woff2` is the typeface the Quartz iOS app uses, so the
site and the app read as one product.

- **Source**: `boahlil/Fonts/StackSans-VariableFont_wght.ttf` in the app repo,
  originally from https://github.com/DylanYoungKoto/Stack-Sans
- **License**: SIL Open Font License 1.1 — full text in `OFL.txt`, which must
  stay alongside the font file.
- **Axis**: `wght` 200–700. The font's *default* instance is ExtraLight (200),
  which is why `app/layout.tsx` declares `weight: "200 700"` — without the
  range the browser clamps every weight to ExtraLight.

To regenerate the WOFF2 after updating the TTF:

```bash
pip3 install fonttools brotli
python3 -c "
from fontTools.ttLib import TTFont
f = TTFont('fonts/StackSans-VariableFont_wght.ttf'); f.flavor='woff2'
f.save('fonts/StackSansText-Variable.woff2')"
```

Do not convert it with `fonteditor-core` — that drops the `fvar`/`gvar` tables
and collapses the file to a single static ExtraLight weight.
