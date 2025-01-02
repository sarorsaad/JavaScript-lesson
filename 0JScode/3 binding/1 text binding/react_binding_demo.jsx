import React, { useState } from 'react';
import './styles.css';

const DataBindingDemo = () => {
    // 1. Text Binding - State
    const [name, setName] = useState('زائر');

    // 2. Attribute Binding - State
    const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/150');

    // 3. List Binding - State
    const [items, setItems] = useState(['عنصر 1', 'عنصر 2', 'عنصر 3']);
    const [newItem, setNewItem] = useState('');

    // Event Handlers
    const handleAddItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const handleDeleteItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div className="container" dir="rtl">
            <h1>ربط البيانات في React (Data Binding)</h1>

            {/* 1. Text Binding Section */}
            <section className="binding-section">
                <div className="demo-box">
                    <h2>1. ربط النصوص البسيط</h2>
                    <p>هذا المثال يوضح كيفية ربط قيمة متغير مع عنصر JSX:</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="أدخل اسمك"
                    />
                    <p>مرحباً، <span className="highlight">{name}</span>!</p>
                </div>
                <div className="code-box">
                    <pre>
                        <code>{`// React State Hook
const [name, setName] = useState('زائر');

// JSX
<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>
<p>مرحباً، {name}!</p>`}</code>
                    </pre>
                </div>
            </section>

            {/* 2. Attribute Binding Section */}
            <section className="binding-section">
                <div className="demo-box">
                    <h2>2. ربط خصائص العناصر</h2>
                    <p>هذا المثال يوضح كيفية ربط خصائص العناصر مثل الصور:</p>
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="أدخل رابط الصورة"
                    />
                    <div>
                        <img src={imageUrl} alt="معاينة" style={{ maxWidth: '150px' }} />
                    </div>
                </div>
                <div className="code-box">
                    <pre>
                        <code>{`// React State Hook
const [imageUrl, setImageUrl] = useState(
    'https://via.placeholder.com/150'
);

// JSX
<input
    value={imageUrl}
    onChange={(e) => setImageUrl(e.target.value)}
/>
<img src={imageUrl} alt="معاينة" />`}</code>
                    </pre>
                </div>
            </section>

            {/* 3. List Binding Section */}
            <section className="binding-section">
                <div className="demo-box">
                    <h2>3. ربط القوائم</h2>
                    <p>هذا المثال يوضح كيفية ربط مصفوفة مع قائمة:</p>
                    <div className="input-group">
                        <input
                            type="text"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            placeholder="أدخل عنصراً جديداً"
                        />
                        <button onClick={handleAddItem}>إضافة</button>
                    </div>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item}
                                <button onClick={() => handleDeleteItem(index)}>
                                    حذف
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="code-box">
                    <pre>
                        <code>{`// React State Hooks
const [items, setItems] = useState([
    'عنصر 1', 'عنصر 2', 'عنصر 3'
]);
const [newItem, setNewItem] = useState('');

// Event Handlers
const handleAddItem = () => {
    if (newItem.trim()) {
        setItems([...items, newItem]);
        setNewItem('');
    }
};

const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
};

// JSX
<ul>
    {items.map((item, index) => (
        <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>
                حذف
            </button>
        </li>
    ))}
</ul>`}</code>
                    </pre>
                </div>
            </section>
        </div>
    );
};

export default DataBindingDemo;
