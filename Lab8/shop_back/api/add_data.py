import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from models import Product, Category

category1 = Category.objects.create(name='acoustic guitar')
category2 = Category.objects.create(name='electric guitar')
category3 = Category.objects.create(name='ukulele')
category4 = Category.objects.create(name='pick')


product1 = Product.objects.create(
    name='Гитара Yamaha F310 желтый, коричневый',
    price=63290,
    description='-Мензура: 25.0 дюйм.\n-Тип: акустическая\n-Количество струн: 6\n-Для левши: Нет\n-С подключением: Нет',
    count=1,
    is_active=True,
    category=category1  
)

product2 = Product.objects.create(
    name='Гитара YAMAHA C40 Natural',
    price=59190,
    description="-Мензура: 25.0 дюйм.\n-Тип: акустическая\n-Количество струн: 6\n-Для левши: Нет\n-С подключением: Нет",
    count=2,
    is_active=True,
    category=category1  
)

product3 = product2 = Product.objects.create(
    name='Электрогитара YAMAHA Pacifica112J BL Black',
    price=136090,
    description="-Тип: электрогитара\n-Количество струн: 6\n-Форма корпуса: double cutaway\n-Для левши: Нет",
    count=3,
    is_active=True,
    category=category2  
)

product4 = Product.objects.create(
    name='Электрогитара Ibanez GRG121DX-BKF Black',
    price=134990,
    description="-Тип: электрогитара\n-Количество струн: 6\n-Форма корпуса: superstrat\n-Для левши: Нет",
    count=4,
    is_active=True,
    category=category2  
)

product5 = Product.objects.create(
    name='Укулеле Fender 097-1610-557 Venice Soprano Surf Green',
    price=40800,
    description="-Мензура: 14(35 см)\n-Тип: сопрано\n-Количество ладов: 12\n-Цвет: зеленый",
    count=5,
    is_active=True,
    category=category3  
)

product6 = Product.objects.create(
    name='Укулеле Fender 097-1610-722 Venice Soprano Natural',
    price=42782,
    description="-Мензура: 14(35 см)\n-Тип: сопрано\n-Количество ладов: 12\n-Цвет: коричневый",
    count=6,
    is_active=True,
    category=category3  
)

product7 = Product.objects.create(
    name='Planet Waves 1CCB4 1 шт',
    price=140,
    description="-Материал: целлулоид\n-Тип: медиатор\n-Тип поверхности: полированная\n-Форма: классическая",
    count=7,
    is_active=True,
    category=category4  
)

product8 = Product.objects.create(
    name='Planet Waves 3NPR7',
    price=118,
    description="-Материал: нейлон\n-Тип: медиатор\n-Тип поверхности: полированная\n-Форма: классическая",
    count=7,
    is_active=True,
    category=category4  
)

print('Data added successfully!')