// التنقل بين الصفحات
function showPage(pageId) {
    // إخفاء كل الصفحات
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // إظهار الصفحة المطلوبة
    document.getElementById(pageId).classList.add('active');
}

// نظام السلة البسيط
let cart = [];
function addToCart(name, price) {
    cart.push({name, price});
    updateCartUI();
    alert(name + " أضيف للسلة!");
}

function updateCartUI() {
    const cartContainer = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartContainer.innerHTML = "السلة فارغة";
        return;
    }
    
    let html = '<ul>';
    let total = 0;
    cart.forEach(item => {
        html += `<li>${item.name} - ${item.price} ريال</li>`;
        total += item.price;
    });
    html += `</ul><p><strong>المجموع: ${total} ريال</strong></p>`;
    cartContainer.innerHTML = html;
}
function filterProduct(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // تغيير شكل الزر النشط
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category) || (category === 'all' && btn.innerText === 'الكل')) {
            btn.classList.add('active');
        }
    });

    // إظهار وإخفاء المنتجات
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        }
    });
}

function searchProduct() {
    // 1. جلب النص المكتوب وتحويله لحروف صغيرة (لضمان دقة البحث)
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // 2. جلب كل كروت المنتجات
    let cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        // 3. جلب اسم المنتج من داخل الـ h3
        let productName = card.querySelector('h3').innerText.toLowerCase();

        // 4. إذا كان الاسم يحتوي على النص المكتوب، أظهره، وإلا أخفه
        if (productName.includes(input)) {
            card.style.display = "block";
            card.style.opacity = "1";
        } else {
            card.style.display = "none";
            card.style.opacity = "0";
        }
    });
}
