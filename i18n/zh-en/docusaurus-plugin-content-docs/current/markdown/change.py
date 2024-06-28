import os
import re

# 设置你的文档目录
documents_dir = r'G:\00001Github\新建文件夹\144inchina.help\新建文件夹\chialisp-web\docs\markdown'

# 遍历目录中的所有文件
for filename in os.listdir(documents_dir):
    if filename.endswith('.md'):  # 确保只处理 Markdown 文件
        file_path = os.path.join(documents_dir, filename)
        
        # 读取文件内容
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # 使用正则表达式匹配标题
        match = re.search(r'title: (.+)\n', content)
        if match:
            title = match.group(1).strip()
            # 生成 id 和 slug，这里可以根据需要调整生成逻辑
            # 例如，我们这里简单地将标题转换为小写并用连字符代替空格
            id = title.lower().replace(' ', '-')
            slug = f'/{id}'
            
            # 构建新的文件内容
            new_content = f"---\nid: {id}\ntitle: {title}\nslug: {slug}\n---\n\n{content.split('\n\n', 1)[1]}"
            
            # 如果内容已更改，则写回文件
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(new_content)
                print(f'Updated {filename}')
        else:
            print(f'Title not found in {filename}')