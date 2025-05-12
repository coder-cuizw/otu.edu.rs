/**
 * 图片加载脚本，用于从网络加载免费图片资源
 * 使用的是Unsplash和Pexels等免费图片服务
 */

document.addEventListener('DOMContentLoaded', function() {
    // 图片资源URL映射
    const imageUrls = {
        // 轮播图片
        'campus': 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'students': 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'research': 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        
        // 关于OTU图片
        'about-otu': 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        
        // 专业课程图片
        'program-cs': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'program-cybersecurity': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'program-data-science': 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        
        // 学生证言图片
        'testimonial-1': 'https://randomuser.me/api/portraits/women/32.jpg',
        'testimonial-2': 'https://randomuser.me/api/portraits/men/45.jpg',
        'testimonial-3': 'https://randomuser.me/api/portraits/women/68.jpg',
        
        // 学校领导图片
        'leadership-1': 'https://randomuser.me/api/portraits/men/78.jpg',
        'leadership-2': 'https://randomuser.me/api/portraits/women/27.jpg',
        'leadership-3': 'https://randomuser.me/api/portraits/men/35.jpg',
        
        // 校园设施图片
        'campus-main': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'campus-innovation': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'campus-library': 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'campus-labs': 'https://images.unsplash.com/photo-1566165492041-a2158dabd82c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        
        // 合作伙伴logo（使用占位图）
        'partner-1': 'https://via.placeholder.com/150x80/cccccc/666666/?text=Partner+1',
        'partner-2': 'https://via.placeholder.com/150x80/cccccc/666666/?text=Partner+2',
        'partner-3': 'https://via.placeholder.com/150x80/cccccc/666666/?text=Partner+3',
        'partner-4': 'https://via.placeholder.com/150x80/cccccc/666666/?text=Partner+4',
        'partner-5': 'https://via.placeholder.com/150x80/cccccc/666666/?text=Partner+5',
        'partner-6': 'https://via.placeholder.com/150x80/cccccc/666666/?text=Partner+6',
        'partner-7': 'https://via.placeholder.com/150x80/cccccc/666666/?text=Partner+7',
        'partner-8': 'https://via.placeholder.com/150x80/cccccc/666666/?text=Partner+8'
    };

    // 将所有img标签中的src替换为实际的图片URL
    document.querySelectorAll('img').forEach(img => {
        const altText = img.getAttribute('alt');
        if (altText) {
            // 从alt文本中提取关键词
            const key = Object.keys(imageUrls).find(key => 
                altText.toLowerCase().includes(key.toLowerCase().replace('-', ' '))
            );
            
            if (key && imageUrls[key]) {
                // 检查是否已经是外部URL
                const currentSrc = img.getAttribute('src');
                if (currentSrc && currentSrc.startsWith('images/')) {
                    img.setAttribute('src', imageUrls[key]);
                    console.log(`替换图片: ${currentSrc} -> ${imageUrls[key]}`);
                }
            }
        }
    });
}); 