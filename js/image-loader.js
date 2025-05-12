/**
 * 图片加载脚本，用于加载本地图片资源
 * 现在所有图片都已经保存在本地目录中，不再依赖外部网络资源
 */

document.addEventListener('DOMContentLoaded', function() {
    // 图片资源本地路径映射
    const imageUrls = {
        // 轮播图片
        'campus': 'images/campus/campus.jpg',
        'students': 'images/campus/students.jpg',
        'research': 'images/campus/research.jpg',
        
        // 关于OTU图片
        'about-otu': 'images/campus/about-otu.jpg',
        
        // 专业课程图片
        'program-cs': 'images/programs/cs.jpg',
        'program-cybersecurity': 'images/programs/cybersecurity.jpg',
        'program-data-science': 'images/programs/data-science.jpg',
        
        // 学生证言图片
        'testimonial-1': 'images/testimonials/testimonial-1.jpg',
        'testimonial-2': 'images/testimonials/testimonial-2.jpg',
        'testimonial-3': 'images/testimonials/testimonial-3.jpg',
        
        // 学校领导图片
        'leadership-1': 'images/leadership/leadership-1.jpg',
        'leadership-2': 'images/leadership/leadership-2.jpg',
        'leadership-3': 'images/leadership/leadership-3.jpg',
        
        // 校园设施图片
        'campus-main': 'images/facilities/campus-main.jpg',
        'campus-innovation': 'images/facilities/campus-innovation.jpg',
        'campus-library': 'images/facilities/campus-library.jpg',
        'campus-labs': 'images/facilities/campus-labs.jpg',
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
                // 检查是否已经是绝对路径
                const currentSrc = img.getAttribute('src');
                if (currentSrc && (currentSrc.startsWith('images/') || currentSrc.includes('http'))) {
                    img.setAttribute('src', imageUrls[key]);
                    console.log(`替换图片: ${currentSrc} -> ${imageUrls[key]}`);
                }
            }
        }
    });

    // 替换合作伙伴logo为本地文件
    document.querySelectorAll('img[alt*="Partner"]').forEach((img, index) => {
        // 使用新创建的合作伙伴logo
        img.setAttribute('src', 'images/partners/partner-logo.svg');
        
        // 添加合作伙伴编号
        const svgDoc = img.contentDocument;
        if (svgDoc) {
            // 如果SVG已加载，直接修改
            updatePartnerNumber(svgDoc, index + 1);
        } else {
            // 如果SVG尚未加载，等待加载完成后修改
            img.addEventListener('load', function() {
                if (img.contentDocument) {
                    updatePartnerNumber(img.contentDocument, index + 1);
                }
            });
        }
    });
    
    // 辅助函数：更新合作伙伴编号
    function updatePartnerNumber(svgDoc, number) {
        const textElement = svgDoc.getElementById('partnerNumber');
        if (textElement) {
            textElement.textContent = `LOGO ${number}`;
        }
    }
}); 