'use strict';

const PROGRAM = [
  {
    id: 'day1', number: 'روز ۱', weekday: 'شنبه', title: 'پایین‌تنه A', focus: 'پا، باسن، ساق و میان‌تنه',
    exercises: [
      { name: 'اسکوات با کش مقاومتی', tip: 'زانوها در راستای پنجه‌ها باشند. فقط تا جایی پایین برو که حرکت بدون درد و کنترل‌شده باشد.', options: {
        easy: { dose: '۲ تا ۳ ست × ۱۰ تا ۱۲ تکرار', description: 'از نیمکت نسبتاً بلند بنشین و بلند شو؛ بدون کش.' },
        main: { dose: '۳ ست × ۸ تا ۱۲ تکرار', description: 'اسکوات با کش مقاومتی.' },
        hard: { dose: '۳ ست × ۸ تا ۱۰ تکرار', description: 'اسکوات مکث‌دار انجام بده: با همان کش پایین برو، ۲ ثانیه مکث کن و با کنترل بالا بیا.' }
      }},
      { name: 'ددلیفت رومانیایی با کش', tip: 'کمر در وضعیت طبیعی بماند و حرکت از مفصل لگن انجام شود. اگر درد پشت بیشتر شد، حرکت را حذف کن.', options: {
        easy: { dose: '۲ ست × ۱۰ تکرار', description: 'بدون کش، باسن را به‌آرامی به سمت دیوار عقب ببر.' },
        main: { dose: '۳ ست × ۱۰ تا ۱۲ تکرار', description: 'ددلیفت رومانیایی با کش مقاومتی.' },
        hard: { dose: '۳ ست × ۸ تکرار برای هر پا', description: 'ددلیفت رومانیایی با حالت پاها یکی کمی جلوتر از دیگری انجام بده و برای تعادل تکیه‌گاه را بگیر؛ بدون کش هم قابل انجام است.' }
      }},
      { name: 'بالا رفتن از پله کوتاه', tip: 'فقط از پله کوتاه و ثابت استفاده کن؛ از صندلی یا سطح لغزنده استفاده نکن.', options: {
        easy: { dose: '۲ ست × ۸ تکرار برای هر پا', description: 'از پله کوتاه‌تر استفاده کن و نردهٔ محکم را بگیر. اگر زانو درد دارد، از نشستن و بلندشدن از نیمکت استفاده کن.' },
        main: { dose: '۲ ست × ۸ تکرار برای هر پا', description: 'با کنترل روی پلهٔ کوتاه و ثابت بالا برو و پایین بیا.' },
        hard: { dose: '۳ ست × ۸ تکرار برای هر پا', description: 'از پلهٔ کوتاه پایین‌آمدن را آهسته انجام بده؛ فقط اگر زانو و تعادل کاملاً راحت‌اند.' }
      }},
      { name: 'پل باسن', tip: 'در بالای حرکت کمر را بیش‌ازحد گود نکن.', options: {
        easy: { dose: '۲ ست × ۱۰ تا ۱۲ تکرار', description: 'پل باسن بدون کش.' },
        main: { dose: '۳ ست × ۱۲ تا ۱۵ تکرار', description: 'پل باسن معمولی با وزن بدن؛ در بالا باسن را منقبض کن و آرام پایین بیا.' },
        hard: { dose: '۲ ست × ۶ تا ۸ تکرار برای هر طرف', description: 'در حالت پل باسن، پاها را یکی‌یکی بلند کن؛ فقط اگر لگن ثابت می‌ماند.' }
      }},
      { name: 'خم‌کردن زانو برای پشت ران', tip: 'تنه و لگن ثابت بمانند و حرکت را بدون تاب‌دادن پا انجام بده.', options: {
        easy: { dose: '۲ ست × ۱۰ تکرار برای هر پا', description: 'با گرفتن تکیه‌گاه، زانو را بدون کش خم کن.' },
        main: { dose: '۲ ست × ۱۲ تکرار برای هر پا', description: 'با گرفتن تکیه‌گاه، زانو را خم کن و در بالای حرکت ۲ ثانیه مکث کن؛ بدون کش.' },
        hard: { dose: '۲ ست × ۶ تا ۸ تکرار', description: 'پل باسن را بالا نگه دار و پاشنه‌ها را چند قدم کوتاه از بدن دور و دوباره نزدیک کن.' }
      }},
      { name: 'ساق پا ایستاده', tip: 'حرکت را آرام انجام بده و برای بالا آمدن بدن را تاب نده.', options: {
        easy: { dose: '۲ ست × ۱۲ تکرار', description: 'با هر دو پا روی پنجه بیا و برای تعادل تکیه‌گاه را بگیر.' },
        main: { dose: '۳ ست × ۱۲ تا ۱۵ تکرار', description: 'با هر دو پا روی پنجه بیا و به‌آرامی پایین برو.' },
        hard: { dose: '۲ ست × ۸ تکرار برای هر پا', description: 'با یک پا و در حالی که تکیه‌گاه را گرفته‌ای انجام بده؛ پایین‌آمدن ۳ ثانیه طول بکشد.' }
      }},
      { name: 'بالا بردن پا از کنار', tip: 'تنه را صاف نگه دار و پا را با تاب دادن بالا نبر؛ تکیه‌گاه محکم کنار دستت باشد.', options: {
        easy: { dose: '۲ ست × ۸ تکرار برای هر پا', description: 'با گرفتن تکیه‌گاه، پا را کمی به کنار ببر و برگردان.' },
        main: { dose: '۲ تا ۳ ست × ۱۰ تکرار برای هر پا', description: 'با گرفتن تکیه‌گاه، پای صاف را آرام از کنار بالا ببر و پایین بیاور؛ بدون کش.' },
        hard: { dose: '۳ ست × ۱۰ تکرار برای هر پا', description: 'همان حرکت را با مکث ۲ ثانیه‌ای در بالاترین نقطهٔ بدون درد انجام بده.' }
      }},
      { name: 'ددباگ (حرکت میان‌تنه)', tip: 'کمر را تحت فشار قرار نده و سر را از زمین بلند نکن.', options: {
        easy: { dose: '۲ ست × ۸ تکرار برای هر پا', description: 'سر روی زمین بماند؛ یک پاشنه را آرام روی زمین به جلو ببر و برگردان.' },
        main: { dose: '۲ ست × ۸ تکرار برای هر طرف', description: 'دست و پای مخالف را در دامنهٔ راحت باز کن و برگردان.' },
        hard: { dose: '۲ ست × ۸ تکرار برای هر طرف', description: 'دست و پای مخالف را باز کن و ۲ ثانیه مکث کن.' }
      }}
    ]
  },
  {
    id: 'day2', number: 'روز ۲', weekday: 'دوشنبه', title: 'بالاتنه A', focus: 'سینه، پشت، بازو و کنترل شانه',
    exercises: [
      { name: 'پرس سینه با کش', tip: 'کش پشت قسمت بالایی تنه قرار بگیرد؛ شانه‌ها را بالا نبر و گردن را جلو نیاور.', options: {
        easy: { dose: '۳ ست × ۱۰ تا ۱۵ تکرار', description: 'شنای دیواری انجام بده.' },
        main: { dose: '۳ ست × ۸ تا ۱۲ تکرار', description: 'پرس سینه با کش مقاومتی.' },
        hard: { dose: '۳ ست × ۸ تا ۱۰ تکرار', description: 'به‌جای کش، شنای شیب‌دار روی نیمکت ثابت انجام بده؛ سطح را طوری انتخاب کن که فرم حرکت حفظ شود.' }
      }},
      { name: 'قایقی نشسته با کش', tip: 'می‌توانی کش را دور کف پاها بگذاری و با تنه تقریباً قائم بکشی. اتصال خارجی فقط اگر کاملاً مطمئن است.', options: {
        easy: { dose: '۲ ست × ۱۰ تا ۱۲ تکرار', description: 'بدون کش، کتف‌ها را آرام به هم نزدیک کن و ۲ ثانیه نگه دار.' },
        main: { dose: '۳ ست × ۱۰ تا ۱۵ تکرار', description: 'در حالت نشسته، همان یک کش را به سمت تنه بکش و آرام برگردان.' },
        hard: { dose: '۳ ست × ۱۰ تکرار برای هر دست', description: 'قایقی یک‌دست با همان کش انجام بده؛ دست دیگر برای ثبات روی پا قرار بگیرد.' }
      }},
      { name: 'بازکردن کش مقابل سینه', tip: 'دست‌ها تقریباً هم‌ارتفاع سینه باشند و شانه‌ها به سمت گوش‌ها بالا نروند.', options: {
        easy: { dose: '۲ ست × ۱۰ تکرار', description: 'بدون کش، کتف‌ها را آرام عقب و پایین ببر و رها کن.' },
        main: { dose: '۲ ست × ۱۲ تا ۱۵ تکرار', description: 'همان یک کش را جلوی سینه نگه دار و دست‌ها را به‌آرامی از هم باز کن.' },
        hard: { dose: '۲ ست × ۱۰ تا ۱۲ تکرار', description: 'بازکردن کش را با آرنج‌های کمی خم و حالت W انجام بده و انتهای حرکت ۲ ثانیه مکث کن.' }
      }},
      { name: 'جلو بازو با کش', tip: 'کش زیر پاها قرار بگیرد و آرنج‌ها کنار تنه ثابت بمانند.', options: {
        easy: { dose: '۲ ست × ۱۰ تکرار برای هر دست', description: 'یک دست را تمرین بده و کش را با شلی بیشتری بگیر تا شروع حرکت راحت باشد.' },
        main: { dose: '۳ ست × ۱۰ تا ۱۵ تکرار', description: 'با همان یک کش، هر دو دست را خم کن و آرام پایین بیاور.' },
        hard: { dose: '۳ ست × ۱۰ تکرار برای هر دست', description: 'جلو بازو یک‌دست با همان کش انجام بده و پایین‌آوردن دست را طی ۳ ثانیه انجام بده.' }
      }},
      { name: 'شنای دست‌جمع برای پشت بازو', tip: 'آرنج‌ها خیلی به بیرون باز نشوند. در صورت ناراحتی مچ، شانه یا گردن حرکت را متوقف کن.', options: {
        easy: { dose: '۲ ست × ۸ تا ۱۰ تکرار', description: 'نزدیک دیوار بایست و با دست‌ها فشار ملایم وارد کن.' },
        main: { dose: '۲ ست × ۸ تا ۱۲ تکرار', description: 'شنای دست‌جمع روی دیوار انجام بده.' },
        hard: { dose: '۳ ست × ۸ تا ۱۰ تکرار', description: 'شنای دست‌جمع را روی نیمکت ثابت انجام بده؛ فقط اگر فرم حرکت خوب است.' }
      }},
      { name: 'چرخش خارجی شانه با کش', tip: 'آرنج کنار بدن بماند و دامنهٔ حرکت بدون درد باشد.', options: {
        easy: { dose: '۵ نوبت × ۱۰ ثانیه برای هر دست', description: 'آرنج کنار بدن؛ پشت دست را بدون حرکت‌دادن مفصل، آرام به دیوار فشار بده.' },
        main: { dose: '۲ ست × ۱۲ تا ۱۵ تکرار برای هر دست', description: 'با همان یک کش و کمی شلی در شروع، ساعد را به‌آرامی به سمت بیرون بچرخان.' },
        hard: { dose: '۲ ست × ۱۰ تا ۱۲ تکرار برای هر دست', description: 'با همان کش، در انتهای چرخش ۳ ثانیه مکث کن و آرام برگردان.' }
      }},
      { name: 'سراندن دست‌ها روی دیوار', tip: 'دست‌ها را بالاتر از دامنهٔ راحت نبر و برای بالا بردن دست‌ها گردن را عقب نده.', options: {
        easy: { dose: '۲ ست × ۸ تکرار', description: 'دست‌ها را فقط در دامنهٔ کوتاه و راحت روی دیوار بالا و پایین ببر.' },
        main: { dose: '۲ ست × ۸ تا ۱۰ تکرار', description: 'دست‌ها را آرام روی دیوار به سمت بالا سر بده و پایین بیاور.' },
        hard: { dose: '۲ ست × ۸ تا ۱۰ تکرار', description: 'در بالاترین نقطهٔ بدون درد، ۲ ثانیه مکث کن.' }
      }},
      { name: 'برد داگ (تعادل دست و پا)', tip: 'سر در امتداد تنه بماند. اگر زانو یا مچ دست ناراحت است، این حرکت را انجام نده.', options: {
        easy: { dose: '۲ ست × ۸ تکرار برای هر طرف', description: 'در حالت چهاردست‌وپا فقط یک دست یا فقط پای مخالف را بالا ببر.' },
        main: { dose: '۲ ست × ۸ تکرار برای هر طرف', description: 'دست و پای مخالف را به‌آرامی باز کن و برگردان.' },
        hard: { dose: '۲ ست × ۸ تکرار برای هر طرف', description: 'دست و پای مخالف را هم‌زمان باز کن و ۳ ثانیه نگه دار.' }
      }}
    ]
  },
  {
    id: 'day3', number: 'روز ۳', weekday: 'چهارشنبه', title: 'پایین‌تنه B', focus: 'پا، باسن، پشت ران و تعادل',
    exercises: [
      { name: 'اسپلیت اسکوات با تکیه‌گاه', tip: 'یک دست روی تکیه‌گاه محکم باشد. زانو را به‌زور به دامنهٔ عمیق نبر.', options: {
        easy: { dose: '۲ ست × ۸ تکرار برای هر پا', description: 'اسکوات روی نیمکت یا اسپلیت اسکوات با دامنهٔ کوتاه انجام بده.' },
        main: { dose: '۳ ست × ۸ تکرار برای هر پا', description: 'در حالت پاها جلو و عقب، با گرفتن تکیه‌گاه کمی پایین برو و بالا بیا.' },
        hard: { dose: '۳ ست × ۸ تکرار برای هر پا', description: 'کمی عمیق‌تر پایین برو و پایین‌رفتن را طی ۳ ثانیه انجام بده؛ فقط بدون درد زانو یا لگن.' }
      }},
      { name: 'پل باسن', tip: 'اگر روز اول نسخهٔ سخت‌تر پل باسن را انجام دادی، امروز نسخهٔ معمولی را انتخاب کن.', options: {
        easy: { dose: '۲ ست × ۱۰ تکرار', description: 'پل باسن را با دامنهٔ کوتاه‌تر انجام بده.' },
        main: { dose: '۳ ست × ۱۲ تا ۱۵ تکرار', description: 'به پشت دراز بکش، باسن را بالا بیاور و آرام پایین ببر.' },
        hard: { dose: '۲ ست × ۸ تکرار برای هر پا', description: 'پل باسن تک‌پا با تکیهٔ پای دیگر روی زمین انجام بده؛ فقط اگر لگن ثابت می‌ماند.' }
      }},
      { name: 'بالا بردن پا از کنار', tip: 'حرکت را آهسته انجام بده و لگن را نچرخان.', options: {
        easy: { dose: '۲ ست × ۸ تکرار برای هر پا', description: 'ایستاده و با گرفتن تکیه‌گاه، پا را کمی به کنار ببر.' },
        main: { dose: '۲ ست × ۱۰ تا ۱۲ تکرار برای هر پا', description: 'به پهلو دراز بکش و پای بالایی را آرام بالا ببر و پایین بیاور؛ بدون کش.' },
        hard: { dose: '۳ ست × ۱۰ تکرار برای هر پا', description: 'به پهلو دراز بکش؛ پای بالایی را بالا ببر، ۲ ثانیه نگه دار و آرام پایین بیاور.' }
      }},
      { name: 'خم‌کردن زانو برای پشت ران', tip: 'تنه ثابت بماند و زانو را فقط در دامنهٔ راحت خم کن.', options: {
        easy: { dose: '۲ ست × ۱۰ تکرار برای هر پا', description: 'با گرفتن تکیه‌گاه، زانو را بدون کش خم کن.' },
        main: { dose: '۲ ست × ۱۲ تکرار برای هر پا', description: 'با گرفتن تکیه‌گاه، زانو را بدون کش خم کن و ۲ ثانیه بالا نگه دار.' },
        hard: { dose: '۲ ست × ۶ تا ۸ تکرار', description: 'پل باسن را بالا نگه دار و پاشنه‌ها را چند قدم کوتاه از بدن دور و دوباره نزدیک کن.' }
      }},
      { name: 'عقب‌بردن پا با تکیه‌گاه', tip: 'تنه را به جلو خم نکن و کمر را گود نکن. حرکت باید از لگن باشد.', options: {
        easy: { dose: '۲ ست × ۱۰ تکرار برای هر پا', description: 'با گرفتن تکیه‌گاه، یک پا را با دامنهٔ کوتاه به عقب ببر.' },
        main: { dose: '۲ ست × ۱۲ تکرار برای هر پا', description: 'ایستاده و بدون کش، پای صاف را آرام به عقب ببر، یک ثانیه مکث کن و برگردان.' },
        hard: { dose: '۲ ست × ۸ تا ۱۰ تکرار برای هر پا', description: 'چهاردست‌وپا، یک پا را با زانوی خم به عقب و بالا ببر؛ فقط اگر زانو و مچ دست راحت‌اند.' }
      }},
      { name: 'ساق پا ایستاده', tip: 'نسخهٔ سخت‌تر فقط وقتی انجام شود که تعادل خوبی داری.', options: {
        easy: { dose: '۲ ست × ۱۲ تکرار', description: 'با هر دو پا روی پنجه بیا و تکیه‌گاه را بگیر.' },
        main: { dose: '۲ تا ۳ ست × ۱۲ تا ۱۵ تکرار', description: 'با هر دو پا آرام روی پنجه بیا و پایین برو.' },
        hard: { dose: '۲ ست × ۸ تکرار برای هر پا', description: 'با یک پا و گرفتن تکیه‌گاه انجام بده؛ پایین‌آمدن ۳ ثانیه طول بکشد.' }
      }},
      { name: 'تعادل پاشنه و پنجه', tip: 'چشم‌ها باز باشند و تکیه‌گاه در دسترس بماند؛ برای سخت‌تر کردن چشم‌ها را نبند.', options: {
        easy: { dose: '۲ نوبت × ۲۰ ثانیه', description: 'پاها را کنار هم بگذار و تکیه‌گاه را بگیر.' },
        main: { dose: '۲ نوبت × ۲۰ تا ۳۰ ثانیه', description: 'یک پا را جلوی پای دیگر قرار بده، طوری که پاشنه و پنجه نزدیک هم باشند.' },
        hard: { dose: '۳ نوبت × ۲۰ ثانیه', description: 'یک پا را جلوی پای دیگر بگذار و فقط به‌تدریج فشار دست روی تکیه‌گاه را کمتر کن.' }
      }},
      { name: 'برد داگ (تعادل دست و پا)', tip: 'گردن در امتداد تنه باشد. اگر زانو یا مچ دست درد می‌گیرد، حرکت را حذف کن.', options: {
        easy: { dose: '۲ ست × ۸ تکرار برای هر طرف', description: 'فقط یک دست یا یک پا را در حالت چهاردست‌وپا بالا ببر.' },
        main: { dose: '۲ ست × ۸ تکرار برای هر طرف', description: 'دست و پای مخالف را به‌آرامی باز کن و برگردان.' },
        hard: { dose: '۲ ست × ۸ تکرار برای هر طرف', description: 'دست و پای مخالف را باز کن و ۳ ثانیه نگه دار.' }
      }}
    ]
  },
  {
    id: 'day4', number: 'روز ۴', weekday: 'جمعه', title: 'بالاتنه B', focus: 'سینه، پشت، بازو و پایداری شانه',
    exercises: [
      { name: 'شنای شیب‌دار روی نیمکت ثابت', tip: 'بدن را در یک خط نگه دار، سر را جلو نبر و فقط تا دامنهٔ بدون درد پایین برو.', options: {
        easy: { dose: '۳ ست × ۱۰ تا ۱۵ تکرار', description: 'شنای دیواری انجام بده.' },
        main: { dose: '۳ ست × ۸ تا ۱۲ تکرار', description: 'دست‌ها را روی نیمکت ثابت بگذار و شنا برو.' },
        hard: { dose: '۳ ست × ۸ تا ۱۰ تکرار', description: 'دست‌ها را روی سطح کمی پایین‌تر اما کاملاً ثابت بگذار.' }
      }},
      { name: 'قایقی با کش', tip: 'کش را می‌توانی دور کف پاها قرار بدهی و تنه را تقریباً قائم نگه داری. اتصال خارجی فقط در صورت اطمینان کامل.', options: {
        easy: { dose: '۲ ست × ۱۰ تا ۱۲ تکرار', description: 'بدون کش، کتف‌ها را آرام به هم نزدیک کن و ۲ ثانیه نگه دار.' },
        main: { dose: '۳ ست × ۱۰ تا ۱۵ تکرار', description: 'با همان یک کش، دست‌ها را به سمت تنه بکش و آرام برگردان.' },
        hard: { dose: '۳ ست × ۱۰ تکرار برای هر دست', description: 'قایقی یک‌دست با همان کش انجام بده و انتهای کشش ۲ ثانیه مکث کن.' }
      }},
      { name: 'پرس سینه با کش', tip: 'اگر پرس سینه در جلسهٔ قبلی باعث ناراحتی شانه شده، نسخهٔ راحت‌تر را انتخاب کن یا با متخصص مشورت کن.', options: {
        easy: { dose: '۲ ست × ۱۰ تا ۱۲ تکرار', description: 'شنای دیواری انجام بده.' },
        main: { dose: '۲ ست × ۱۰ تا ۱۲ تکرار', description: 'پرس سینه با کش مقاومتی.' },
        hard: { dose: '۲ تا ۳ ست × ۸ تا ۱۰ تکرار', description: 'شنای شیب‌دار روی نیمکت ثابت انجام بده؛ سطح را طوری انتخاب کن که شانه و گردن راحت بمانند.' }
      }},
      { name: 'بازکردن کش مقابل سینه', tip: 'حرکت را آرام انجام بده و شانه‌ها را بالا نبر.', options: {
        easy: { dose: '۲ ست × ۱۰ تکرار', description: 'بدون کش، کتف‌ها را آرام عقب و پایین ببر و رها کن.' },
        main: { dose: '۲ ست × ۱۲ تا ۱۵ تکرار', description: 'همان یک کش را جلوی سینه نگه دار و دست‌ها را از هم باز کن.' },
        hard: { dose: '۲ ست × ۱۰ تا ۱۲ تکرار', description: 'بازکردن کش را با آرنج‌های کمی خم و حالت W انجام بده و انتهای حرکت ۲ ثانیه مکث کن.' }
      }},
      { name: 'جلو بازو با مکث', tip: 'برای بالا آوردن دست‌ها تنه را تاب نده.', options: {
        easy: { dose: '۲ ست × ۱۰ تکرار برای هر دست', description: 'یک دست را با همان کش و شلی بیشتر در شروع تمرین بده؛ بالای حرکت مکث نکن.' },
        main: { dose: '۲ تا ۳ ست × ۱۰ تا ۱۲ تکرار', description: 'جلو بازو با کش؛ حرکت را کنترل‌شده انجام بده.' },
        hard: { dose: '۳ ست × ۱۰ تکرار', description: 'بالا ۱ ثانیه مکث کن و پایین‌آوردن دست را طی ۳ ثانیه انجام بده.' }
      }},
      { name: 'شنای دست‌جمع برای پشت بازو', tip: 'شانه و مچ باید راحت باشند؛ در صورت درد، حرکت را متوقف کن.', options: {
        easy: { dose: '۲ ست × ۸ تکرار', description: 'نزدیک دیوار بایست و فشار ملایمی وارد کن.' },
        main: { dose: '۲ ست × ۸ تا ۱۲ تکرار', description: 'شنای دست‌جمع روی دیوار انجام بده.' },
        hard: { dose: '۳ ست × ۸ تا ۱۰ تکرار', description: 'شنای دست‌جمع روی نیمکت ثابت انجام بده.' }
      }},
      { name: 'چرخش خارجی شانه با کش', tip: 'حرکت باید بدون درد باشد. اگر همین کش برای این حرکت زیادی سفت است، نسخهٔ راحت‌تر را انجام بده.', options: {
        easy: { dose: '۵ نوبت × ۱۰ ثانیه برای هر دست', description: 'پشت دست را بدون حرکت مفصل، آرام به دیوار فشار بده.' },
        main: { dose: '۲ ست × ۱۲ تا ۱۵ تکرار برای هر دست', description: 'با همان یک کش و کمی شلی در شروع، ساعد را به‌آرامی به سمت بیرون بچرخان.' },
        hard: { dose: '۲ ست × ۱۰ تا ۱۲ تکرار برای هر دست', description: 'با همان کش، در انتهای چرخش ۳ ثانیه مکث کن و آرام برگردان.' }
      }},
      { name: 'ددباگ (حرکت میان‌تنه)', tip: 'کمر و گردن را در وضعیت راحت نگه دار.', options: {
        easy: { dose: '۲ ست × ۸ تکرار برای هر پا', description: 'سر روی زمین بماند و پاشنه را آرام روی زمین به جلو ببر و برگردان.' },
        main: { dose: '۲ ست × ۸ تکرار برای هر طرف', description: 'دست و پای مخالف را در دامنهٔ راحت باز کن و برگردان.' },
        hard: { dose: '۲ ست × ۸ تکرار برای هر طرف', description: 'دست و پای مخالف را باز کن و ۲ ثانیه مکث کن.' }
      }}
    ]
  }
];

// همهٔ تصاویر داخل خود سایت هستند تا بدون اینترنت و بدون وابستگی به سایت دیگر نمایش داده شوند.
const REP_BASE = 'assets/repdb/';
// تصویر شروع و اوج حرکت از RepDB
const rep2 = id => ({ frames: [`${REP_BASE}${id}-start.webp`, `${REP_BASE}${id}-peak.webp`], source: 'repdb' });
// حرکت‌های «با مکث»: شروع حرکت پایه + حالت نگه‌داشتن
const repHold = (base, hold) => ({ frames: [`${REP_BASE}${base}-start.webp`, `${REP_BASE}${hold}-main.webp`], source: 'repdb' });
// تصاویر اختصاصی برنامه (شروع / پایان)
const local2 = id => ({ frames: [`assets/${id}-start.svg`, `assets/${id}-end.svg`], source: 'local' });
// عکس‌های جایگزین وکتورها: photo = عکس واقعی (free-exercise-db)، edb = تصویر سه‌بعدی (Gym visual / ExerciseDB)
const img2 = (id, source) => ({ frames: [`assets/img/${id}-start.webp`, `assets/img/${id}-end.webp`], source });
// حرکت‌هایی که فقط یک تصویر دارند
const rep1 = id => ({ frames: [`${REP_BASE}${id}-main.webp`], source: 'repdb' });

// عنوان و تصویر هر سطح مستقل است. اگر سطح عوض شود، نام حرکت، تصویر، توضیح و تعداد تکرار با هم عوض می‌شوند.
const VARIANT_META = {
  day1: [
    {
      easy: { title: 'نشستن و بلندشدن از نیمکت', media: rep2('box-squat') },
      main: { title: 'اسکوات با کش', media: img2('band-squat', 'photo') },
      hard: { title: 'اسکوات با کش و مکث', media: img2('band-squat', 'photo') }
    },
    {
      easy: { title: 'تمرین لولای لگن به سمت دیوار', media: rep2('bodyweight-good-morning') },
      main: { title: 'گودمورنینگ با کش', media: rep2('banded-good-morning'), description: 'کش را زیر هر دو پا قرار بده و دو سر آن را کنار شانه‌ها نگه دار. باسن را عقب ببر و با کمر طبیعی دوباره صاف شو.' },
      hard: { title: 'گودمورنینگ با کش و پایین‌رفتن آهسته', media: rep2('banded-good-morning'), dose: '۳ ست × ۸ تکرار', description: 'با همان یک کش، پایین‌رفتن را طی ۳ ثانیه انجام بده و بدون تاب‌دادن بدن بالا بیا.' }
    },
    {
      easy: { title: 'استپ‌آپ روی پله کوتاه با تکیه‌گاه', media: rep2('step-ups') },
      main: { title: 'استپ‌آپ روی پله کوتاه', media: rep2('step-ups') },
      hard: { title: 'استپ‌آپ با پایین‌آمدن آهسته', media: rep2('step-ups') }
    },
    {
      easy: { title: 'پل باسن کوتاه‌دامنه', media: rep2('glute-bridge') },
      main: { title: 'پل باسن', media: rep2('glute-bridge') },
      hard: { title: 'پل باسن تک‌پا', media: rep2('single-leg-glute-bridge'), description: 'یک پا روی زمین بماند و پای دیگر کشیده باشد. باسن را با پای تکیه‌گاه بالا بیاور؛ فقط اگر لگن صاف و بدون درد می‌ماند.' }
    },
    {
      easy: { title: 'خم‌کردن زانو ایستاده با تکیه‌گاه', media: img2('standing-hamstring-curl', 'edb') },
      main: { title: 'خم‌کردن زانو ایستاده با مکث', media: img2('standing-hamstring-curl', 'edb') },
      hard: { title: 'پل باسن با راه‌رفتن پاشنه‌ها', media: local2('bridge-walkout') }
    },
    {
      easy: { title: 'ساق دوپا با تکیه‌گاه', media: local2('calf-raise-support') },
      main: { title: 'ساق دوپا ایستاده', media: rep2('bodyweight-calf-raise') },
      hard: { title: 'ساق تک‌پا با تکیه‌گاه', media: rep2('single-leg-calf-raise') }
    },
    {
      easy: { title: 'بالا بردن پا از کنار، دامنه کوتاه', media: rep2('standing-hip-abduction') },
      main: { title: 'بالا بردن پا از کنار ایستاده', media: rep2('standing-hip-abduction') },
      hard: { title: 'بالا بردن پا از کنار با مکث', media: rep2('standing-hip-abduction') }
    },
    {
      easy: { title: 'ددباگ کوتاه‌دامنه', media: rep2('dead-bug'), description: 'دست و پای مخالف را فقط کمی از بدن دور کن و برگردان؛ کمر روی زمین بماند.' },
      main: { title: 'ددباگ', media: rep2('dead-bug') },
      hard: { title: 'ددباگ با مکث', media: repHold('dead-bug', 'dead-bug-hold') }
    }
  ],
  day2: [
    {
      easy: { title: 'شنای دیواری', media: rep2('wall-push-ups') },
      main: { title: 'پرس سینه با کش', media: img2('band-chest-press', 'edb') },
      hard: { title: 'شنای شیب‌دار روی نیمکت', media: rep2('incline-push-ups') }
    },
    {
      easy: { title: 'جمع‌کردن کتف‌ها بدون کش', media: local2('scapular-squeeze') },
      main: { title: 'قایقی نشسته با کش', media: rep2('seated-cable-row') },
      hard: { title: 'قایقی نشسته یک‌دست با کش', media: img2('band-one-arm-row', 'edb') }
    },
    {
      easy: { title: 'جمع‌کردن کتف‌ها بدون کش', media: local2('scapular-squeeze') },
      main: { title: 'بازکردن کش مقابل سینه', media: img2('band-pull-apart', 'photo') },
      hard: { title: 'بازکردن کش به شکل W', media: local2('band-w-pull-apart') }
    },
    {
      easy: { title: 'جلو بازو یک‌دست با کش', media: img2('band-one-arm-curl', 'edb') },
      main: { title: 'جلو بازو دو دست با کش', media: img2('band-biceps-curl', 'edb') },
      hard: { title: 'جلو بازو یک‌دست با پایین‌آمدن آهسته', media: img2('band-one-arm-curl', 'edb') }
    },
    {
      easy: { title: 'شنای دست‌جمع نزدیک دیوار', media: img2('wall-close-pushup', 'edb') },
      main: { title: 'شنای دست‌جمع روی دیوار', media: img2('wall-close-pushup', 'edb') },
      hard: { title: 'شنای دست‌جمع روی نیمکت', media: img2('incline-close-pushup', 'edb') }
    },
    {
      easy: { title: 'فشار ایزومتریک دست به دیوار', media: local2('shoulder-isometric-wall') },
      main: { title: 'چرخش خارجی شانه با کش', media: img2('band-external-rotation', 'photo'), description: 'آرنج‌ها کنار بدن و حدود ۹۰ درجه خم باشند. دو سر همان کش را بگیر و ساعدها را آرام از هم دور کن؛ دامنه کاملاً بدون درد باشد.' },
      hard: { title: 'چرخش خارجی شانه با کش و مکث', media: img2('band-external-rotation', 'photo'), description: 'همان حرکت را انجام بده و در انتهای دامنهٔ بدون درد ۳ ثانیه مکث کن.' }
    },
    {
      easy: { title: 'وال اسلاید کوتاه‌دامنه', media: local2('wall-slide') },
      main: { title: 'وال اسلاید', media: local2('wall-slide') },
      hard: { title: 'وال اسلاید با مکث بالا', media: local2('wall-slide') }
    },
    {
      easy: { title: 'برد داگ کوتاه‌دامنه', media: rep2('bird-dog'), description: 'دست و پای مخالف را فقط کمی باز کن و با کنترل برگردان؛ لگن ثابت بماند.' },
      main: { title: 'برد داگ', media: rep2('bird-dog') },
      hard: { title: 'برد داگ با مکث', media: repHold('bird-dog', 'bird-dog-hold') }
    }
  ],
  day3: [
    {
      easy: { title: 'اسپلیت اسکوات کوتاه با تکیه‌گاه', media: rep2('split-squat') },
      main: { title: 'اسپلیت اسکوات با تکیه‌گاه', media: rep2('split-squat') },
      hard: { title: 'اسپلیت اسکوات با پایین‌رفتن آهسته', media: rep2('split-squat') }
    },
    {
      easy: { title: 'پل باسن کوتاه‌دامنه', media: rep2('glute-bridge') },
      main: { title: 'پل باسن', media: rep2('glute-bridge') },
      hard: { title: 'پل باسن تک‌پا', media: rep2('single-leg-glute-bridge') }
    },
    {
      easy: { title: 'بالا بردن پا از کنار ایستاده', media: rep2('standing-hip-abduction') },
      main: { title: 'بالا بردن پا از کنار در حالت خوابیده', media: rep2('side-lying-hip-abduction'), description: 'به پهلو دراز بکش، لگن‌ها روی هم بمانند و پای بالایی را آرام بالا و پایین ببر.' },
      hard: { title: 'نگه‌داشتن پا از کنار در حالت خوابیده', media: repHold('side-lying-hip-abduction', 'side-lying-hip-abduction-hold'), description: 'به پهلو دراز بکش، پای بالایی را حدود ۳۰ تا ۴۵ درجه بالا ببر، ۲ ثانیه نگه دار و آرام پایین بیاور.' }
    },
    {
      easy: { title: 'خم‌کردن زانو ایستاده با تکیه‌گاه', media: img2('standing-hamstring-curl', 'edb') },
      main: { title: 'خم‌کردن زانو ایستاده با مکث', media: img2('standing-hamstring-curl', 'edb') },
      hard: { title: 'پل باسن با راه‌رفتن پاشنه‌ها', media: local2('bridge-walkout') }
    },
    {
      easy: { title: 'بردن پا به عقب، دامنه کوتاه', media: rep2('cable-kickback') },
      main: { title: 'اکستنشن لگن ایستاده', media: rep2('cable-kickback') },
      hard: { title: 'کیک‌بک باسن در حالت چهاردست‌وپا', media: rep2('glute-kickback') }
    },
    {
      easy: { title: 'ساق دوپا با تکیه‌گاه', media: local2('calf-raise-support') },
      main: { title: 'ساق دوپا ایستاده', media: rep2('bodyweight-calf-raise') },
      hard: { title: 'ساق تک‌پا با تکیه‌گاه', media: rep2('single-leg-calf-raise') }
    },
    {
      easy: { title: 'راه‌رفتن پاشنه‌به‌پنجه کنار تکیه‌گاه', media: rep1('heel-to-toe-walk'), description: 'کنار دیوار یا نرده آرام قدم بردار و پاشنهٔ هر پا را جلوی پنجهٔ پای دیگر بگذار؛ هر وقت لازم بود تکیه‌گاه را لمس کن.' },
      main: { title: 'راه‌رفتن پاشنه‌به‌پنجه', media: rep1('heel-to-toe-walk'), description: 'روی یک خط فرضی آرام قدم بردار و پاشنهٔ هر قدم را نزدیک پنجهٔ پای دیگر قرار بده.' },
      hard: { title: 'راه‌رفتن پاشنه‌به‌پنجه با مکث', media: rep1('heel-to-toe-walk'), description: 'همان حرکت را انجام بده و بعد از هر قدم ۲ ثانیه مکث کن؛ تکیه‌گاه در دسترس بماند و چشم‌ها باز باشند.' }
    },
    {
      easy: { title: 'برد داگ کوتاه‌دامنه', media: rep2('bird-dog'), description: 'دست و پای مخالف را فقط کمی باز کن و برگردان؛ لگن ثابت بماند.' },
      main: { title: 'برد داگ', media: rep2('bird-dog') },
      hard: { title: 'برد داگ با مکث', media: repHold('bird-dog', 'bird-dog-hold') }
    }
  ],
  day4: [
    {
      easy: { title: 'شنای دیواری', media: rep2('wall-push-ups') },
      main: { title: 'شنای شیب‌دار روی نیمکت', media: rep2('incline-push-ups') },
      hard: { title: 'شنای شیب‌دار روی سطح پایین‌تر', media: rep2('incline-push-ups') }
    },
    {
      easy: { title: 'جمع‌کردن کتف‌ها بدون کش', media: local2('scapular-squeeze') },
      main: { title: 'قایقی نشسته با کش', media: rep2('seated-cable-row'), description: 'روی زمین بنشین، کش را دور کف پاها بینداز و دو سر آن را به سمت پایین دنده‌ها بکش؛ کمر صاف و شانه‌ها دور از گوش‌ها.' },
      hard: { title: 'قایقی نشسته یک‌دست با کش و مکث', media: img2('band-one-arm-row', 'edb'), description: 'یک سر کش را با یک دست بکش و در انتهای کشش ۲ ثانیه مکث کن؛ سپس طرف دیگر را انجام بده.' }
    },
    {
      easy: { title: 'شنای دیواری', media: rep2('wall-push-ups') },
      main: { title: 'پرس سینه با کش', media: img2('band-chest-press', 'edb') },
      hard: { title: 'شنای شیب‌دار روی نیمکت', media: rep2('incline-push-ups') }
    },
    {
      easy: { title: 'جمع‌کردن کتف‌ها بدون کش', media: local2('scapular-squeeze') },
      main: { title: 'بازکردن کش مقابل سینه', media: img2('band-pull-apart', 'photo') },
      hard: { title: 'بازکردن کش به شکل W', media: local2('band-w-pull-apart') }
    },
    {
      easy: { title: 'جلو بازو یک‌دست با کش', media: img2('band-one-arm-curl', 'edb') },
      main: { title: 'جلو بازو دو دست با کش', media: img2('band-biceps-curl', 'edb') },
      hard: { title: 'جلو بازو با مکث و پایین‌آمدن آهسته', media: img2('band-biceps-curl', 'edb') }
    },
    {
      easy: { title: 'شنای دست‌جمع نزدیک دیوار', media: img2('wall-close-pushup', 'edb') },
      main: { title: 'شنای دست‌جمع روی دیوار', media: img2('wall-close-pushup', 'edb') },
      hard: { title: 'شنای دست‌جمع روی نیمکت', media: img2('incline-close-pushup', 'edb') }
    },
    {
      easy: { title: 'فشار ایزومتریک دست به دیوار', media: local2('shoulder-isometric-wall') },
      main: { title: 'چرخش خارجی شانه با کش', media: img2('band-external-rotation', 'photo'), description: 'آرنج‌ها کنار بدن بمانند. دو سر همان کش را بگیر و ساعدها را آرام از هم دور کن؛ فقط در دامنهٔ بدون درد.' },
      hard: { title: 'چرخش خارجی شانه با کش و مکث', media: img2('band-external-rotation', 'photo'), description: 'همان حرکت را انجام بده و در انتهای دامنهٔ بدون درد ۳ ثانیه مکث کن.' }
    },
    {
      easy: { title: 'ددباگ کوتاه‌دامنه', media: rep2('dead-bug'), description: 'دست و پای مخالف را فقط کمی از بدن دور کن و برگردان؛ کمر روی زمین بماند.' },
      main: { title: 'ددباگ', media: rep2('dead-bug') },
      hard: { title: 'ددباگ با مکث', media: repHold('dead-bug', 'dead-bug-hold') }
    }
  ]
};

function getVariant(dayId, index, choice, exercise) {
  const meta = VARIANT_META[dayId]?.[index]?.[choice] || VARIANT_META[dayId]?.[index]?.main || {};
  const option = exercise.options[choice] || exercise.options.main;
  return {
    title: meta.title || exercise.name,
    media: meta.media || local2('scapular-squeeze'),
    dose: meta.dose || option.dose,
    description: meta.description || option.description,
    tip: meta.tip || exercise.tip
  };
}

function demoMarkup(media, name) {
  const frames = (media?.frames || []).filter(Boolean);
  const a = frames[0] || '';
  const b = frames[1] || '';
  const src = media?.source || 'local';
  return `<div class="exercise-demo src-${src}${b ? ' has-two' : ''}" data-frame-a="${a}" data-frame-b="${b}" role="button" tabindex="0" aria-label="${name} - برای دیدن وضعیت شروع و پایان لمس کنید">
    <div class="demo-stage">
      <div class="demo-placeholder">در حال بارگذاری تصویر حرکت…</div>
      <img class="demo-frame demo-a on" src="${a}" alt="${name} - وضعیت شروع" decoding="async">
      ${b ? `<img class="demo-frame demo-b" src="${b}" alt="${name} - وضعیت پایان" decoding="async">` : ''}
      <span class="demo-step step-a"><b>۱</b> شروع</span>
      ${b ? '<span class="demo-step step-b"><b>۲</b> پایان</span>' : ''}
    </div>
  </div>`;
}

function setDemoFrame(box, showEnd) {
  box.classList.toggle('show-end', showEnd);
  box.querySelector('.demo-a')?.classList.toggle('on', !showEnd);
  box.querySelector('.demo-b')?.classList.toggle('on', showEnd);
}

function watchDemoImages(root) {
  root.querySelectorAll('.exercise-demo').forEach(box => {
    const img = box.querySelector('.demo-a');
    const ok = () => box.classList.add('ready');
    const fail = () => {
      box.classList.add('failed');
      box.querySelector('.demo-placeholder').textContent = 'تصویر این حرکت در دسترس نیست';
    };
    if (img.complete) { img.naturalWidth ? ok() : fail(); }
    else { img.addEventListener('load', ok, { once: true }); img.addEventListener('error', fail, { once: true }); }
  });
}

// هر ۲٫۵ ثانیه بین «شروع» و «پایان» جابه‌جا می‌شود؛ با لمس تصویر هم می‌توان فوراً جابه‌جا کرد.
let demoTick = false;
setInterval(() => {
  demoTick = !demoTick;
  document.querySelectorAll('.view:not([hidden]) .exercise-demo.has-two:not(.paused)').forEach(box => setDemoFrame(box, demoTick));
}, 2500);

function toggleDemo(box) {
  if (!box.classList.contains('has-two')) return;
  box.classList.add('paused');
  setDemoFrame(box, !box.classList.contains('show-end'));
  clearTimeout(box._resume);
  box._resume = setTimeout(() => box.classList.remove('paused'), 6000);
}

const OPTION_LABELS = { easy: 'راحت‌تر', main: 'اصلی', hard: 'سخت‌تر' };
let activeDayId = 'day1';
// انتخاب‌ها فقط در حافظهٔ همین صفحه می‌مانند و در دستگاه ذخیره نمی‌شوند.
const selectedOptions = Object.create(null);

const dayPicker = document.getElementById('dayPicker');
const dayContent = document.getElementById('dayContent');

function cardMarkup(day, exercise, index) {
  const key = `${day.id}-${index}`;
  const chosen = selectedOptions[key] || 'main';
  const variant = getVariant(day.id, index, chosen, exercise);
  const buttons = Object.entries(OPTION_LABELS).map(([id, label]) => `
    <button type="button" class="option-btn${chosen === id ? ' selected' : ''}" data-option="${id}" data-exercise="${key}" aria-pressed="${chosen === id}">${label}</button>
  `).join('');
  return `
    <article class="exercise-card" data-card="${key}" aria-labelledby="title-${key}">
      <div class="exercise-head">
        <span class="exercise-number" aria-hidden="true">${(index + 1).toLocaleString('fa-IR')}</span>
        <h3 id="title-${key}">${variant.title}</h3>
      </div>
      ${demoMarkup(variant.media, variant.title)}
      <span class="option-label">یک گزینه را انتخاب کن:</span>
      <div class="option-buttons" role="group" aria-label="انتخاب نسخه برای ${variant.title}">${buttons}</div>
      <div class="option-detail" aria-live="polite">
        <strong class="option-dose">${variant.dose}</strong>
        <p class="option-description">${variant.description}</p>
        <p class="exercise-tip"><strong>نکته:</strong> ${variant.tip}</p>
      </div>
    </article>
  `;
}

function currentDay() {
  return PROGRAM.find(item => item.id === activeDayId) || PROGRAM[0];
}

function renderDay() {
  const day = currentDay();
  dayPicker.querySelectorAll('[data-day]').forEach(button => {
    const isActive = button.dataset.day === day.id;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  const cards = day.exercises.map((exercise, index) => cardMarkup(day, exercise, index)).join('');

  dayContent.innerHTML = `
    <div class="day-heading">
      <div>
        <h2>${day.number} — ${day.title}</h2>
        <p>${day.weekday} · تمرکز: ${day.focus}</p>
      </div>
      <span class="exercise-count">۸ حرکت</span>
    </div>
    <details class="warmup" open>
      <summary>گرم‌کردن قبل از تمرین — ۷ تا ۱۰ دقیقه</summary>
      <ol>
        <li>۳ تا ۵ دقیقه آرام راه برو.</li>
        <li>کتف‌ها را آرام جمع کن، بدون بالا انداختن شانه‌ها؛ ۸ تا ۱۰ بار.</li>
        <li>دست‌ها را روی دیوار در دامنهٔ راحت بالا و پایین ببر؛ ۶ تا ۸ بار.</li>
        <li>چند بار آرام بنشین و بلند شو یا درجا قدم بزن؛ ۸ تا ۱۰ بار.</li>
      </ol>
      <p>گرم‌کردن نباید باعث درد یا کشش اجباری گردن شود.</p>
    </details>
    <p class="demo-hint">تصویر هر حرکت بین <strong>۱ شروع</strong> و <strong>۲ پایان</strong> عوض می‌شود. برای عوض‌کردن سریع، روی تصویر بزن.</p>
    <div class="exercise-list">${cards}</div>
  `;
  watchDemoImages(dayContent);
}

dayPicker.addEventListener('click', event => {
  const button = event.target.closest('[data-day]');
  if (!button) return;
  activeDayId = button.dataset.day;
  renderDay();
  document.getElementById('dayPickerTitle').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

dayContent.addEventListener('click', event => {
  const demo = event.target.closest('.exercise-demo');
  if (demo) { toggleDemo(demo); return; }
  const button = event.target.closest('[data-option][data-exercise]');
  if (!button) return;
  const key = button.dataset.exercise;
  selectedOptions[key] = button.dataset.option;
  const day = currentDay();
  const index = Number(key.split('-').pop());
  const oldCard = dayContent.querySelector(`[data-card="${key}"]`);
  if (!oldCard) { renderDay(); return; }
  const holder = document.createElement('div');
  holder.innerHTML = cardMarkup(day, day.exercises[index], index).trim();
  const newCard = holder.firstElementChild;
  oldCard.replaceWith(newCard);
  watchDemoImages(newCard);
  newCard.querySelector(`[data-option="${button.dataset.option}"]`)?.focus({ preventScroll: true });
});

dayContent.addEventListener('keydown', event => {
  const demo = event.target.closest('.exercise-demo');
  if (demo && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); toggleDemo(demo); }
});

renderDay();

// ---------------- بخش «آموزش حرکات با کش» ----------------
const LEVELS = { easy: 'آسان', medium: 'متوسط', hard: 'سخت' };
const partGrid = document.getElementById('partGrid');
const partContent = document.getElementById('partContent');
const faNum = n => n.toLocaleString('fa-IR');

function partTileMarkup(part) {
  const cover = (part.exercises.find(ex => ex.id === part.cover) || part.exercises[0]).media;
  const src = cover.frames[1] || cover.frames[0];
  return `<a class="part-tile src-${cover.source}" href="#/bands/${part.id}">
    <span class="part-thumb"><img src="${src}" alt="" loading="lazy" decoding="async"></span>
    <span class="part-info"><strong>${part.name}</strong><span>${part.hint}</span><em>${faNum(part.exercises.length)} حرکت</em></span>
  </a>`;
}

function libCardMarkup(ex, index) {
  const steps = ex.steps.map(step => `<li>${step}</li>`).join('');
  return `<article class="exercise-card lib-card" id="ex-${ex.id}" aria-labelledby="t-${ex.id}">
    <div class="exercise-head">
      <span class="exercise-number" aria-hidden="true">${faNum(index + 1)}</span>
      <div class="lib-head-text">
        <h3 id="t-${ex.id}">${ex.name}</h3>
        <span class="level level-${ex.level}">${LEVELS[ex.level]}</span>
      </div>
    </div>
    ${demoMarkup(ex.media, ex.name)}
    <p class="lib-muscles"><strong>عضلات درگیر:</strong> ${ex.muscles}</p>
    <div class="option-detail lib-detail">
      <h4>آماده‌سازی</h4>
      <p>${ex.setup}</p>
      <h4>اجرای حرکت</h4>
      <ol class="lib-steps">${steps}</ol>
      <strong class="option-dose">${ex.dose}</strong>
      <p class="exercise-tip"><strong>نکته:</strong> ${ex.tip}</p>
    </div>
  </article>`;
}

function renderPart(part) {
  const chips = BODY_PARTS.map(p => `<a class="part-chip${p.id === part.id ? ' active' : ''}" href="#/bands/${p.id}"${p.id === part.id ? ' aria-current="page"' : ''}>${p.name}</a>`).join('');
  partContent.innerHTML = `
    <nav class="part-chips" aria-label="عضله‌های دیگر">${chips}</nav>
    <div class="day-heading">
      <div>
        <h2>${part.name}</h2>
        <p>${part.about}</p>
      </div>
      <span class="exercise-count">${faNum(part.exercises.length)} حرکت</span>
    </div>
    <p class="demo-hint">تصویر هر حرکت بین <strong>۱ شروع</strong> و <strong>۲ پایان</strong> عوض می‌شود. برای عوض‌کردن سریع، روی تصویر بزن.</p>
    <div class="exercise-list">${part.exercises.map(libCardMarkup).join('')}</div>
    <a class="all-parts-link" href="#/bands">→ برگشت به فهرست عضله‌ها</a>
  `;
  watchDemoImages(partContent);
}

partGrid.innerHTML = BODY_PARTS.map(partTileMarkup).join('');

partContent.addEventListener('click', event => {
  const demo = event.target.closest('.exercise-demo');
  if (demo) toggleDemo(demo);
});
partContent.addEventListener('keydown', event => {
  const demo = event.target.closest('.exercise-demo');
  if (demo && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); toggleDemo(demo); }
});

// ---------------- مسیریابی بین صفحه‌ها ----------------
const VIEWS = ['viewHome', 'viewProgram', 'viewBands', 'viewPart'].map(id => document.getElementById(id));
const pageTitle = document.getElementById('pageTitle');
const pageSub = document.getElementById('pageSub');
const backBtn = document.getElementById('backBtn');
let backTarget = '#/';

function showView(id, title, sub, back) {
  VIEWS.forEach(view => { view.hidden = view.id !== id; });
  pageTitle.textContent = title;
  pageSub.textContent = sub;
  backBtn.hidden = !back;
  backTarget = back || '#/';
  document.title = id === 'viewHome' ? 'برنامه تمرین پدر' : `${title} · برنامه تمرین پدر`;
}

function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (parts[0] === 'program') {
    showView('viewProgram', 'برنامهٔ هفتگی', '۴ روز در هفته · یک کش مقاومتی و وزن بدن', '#/');
  } else if (parts[0] === 'bands' && parts[1] && BODY_PARTS.some(p => p.id === parts[1])) {
    const part = BODY_PARTS.find(p => p.id === parts[1]);
    renderPart(part);
    showView('viewPart', part.name, 'آموزش حرکات با کش', '#/bands');
  } else if (parts[0] === 'bands') {
    showView('viewBands', 'آموزش حرکات با کش', `${faNum(BODY_PARTS.length)} عضله · فقط حرکات با کش مقاومتی`, '#/');
  } else {
    showView('viewHome', 'برنامه تمرین', 'برنامهٔ هفتگی و آموزش حرکات با کش', null);
  }
  window.scrollTo(0, 0);
}

backBtn.addEventListener('click', () => { location.hash = backTarget; });
window.addEventListener('hashchange', route);
route();

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
