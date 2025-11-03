       function openModal(modalType) {
            const modalId = modalType === 'createGroup' ? 'createGroupModal' : 'joinGroupModal';
            document.getElementById(modalId).classList.add('active');
        }

        function closeModal(modalType) {
            const modalId = modalType === 'createGroup' ? 'createGroupModal' : 'joinGroupModal';
            document.getElementById(modalId).classList.remove('active');
        }

        function selectGroup(groupName) {
            alert(`Viewing ${groupName} group. This would filter the feed to show only posts from this group.`);
        }

        function createPost() {
            const content = document.getElementById('postContent').value;
            if (!content.trim()) {
                alert('Please write something before posting!');
                return;
            }

            const postsContainer = document.getElementById('postsContainer');
            const newPost = document.createElement('div');
            newPost.className = 'post';
            newPost.innerHTML = `
                <div class="post-header">
                    <div class="post-avatar">JS</div>
                    <div class="post-info">
                        <h3>John Smith (You)</h3>
                        <div class="post-time">Just now</div>
                    </div>
                </div>
                <div class="post-content">${content}</div>
                <div class="post-actions-bar">
                    <button class="action-btn">👍 0 Likes</button>
                    <button class="action-btn">💬 0 Comments</button>
                    <button class="action-btn">🗑️ Delete</button>
                </div>
            `;
            
            postsContainer.insertBefore(newPost, postsContainer.firstChild);
            document.getElementById('postContent').value = '';
            
            // Animate the new post
            newPost.style.opacity = '0';
            newPost.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                newPost.style.transition = 'all 0.5s';
                newPost.style.opacity = '1';
                newPost.style.transform = 'translateY(0)';
            }, 10);
        }

        function attachFile() {
            alert('File upload feature would open here. You could attach PDFs, images, or other study materials.');
        }

        function submitCreateGroup(event) {
            event.preventDefault();
            alert('Group created successfully! This would add the group to your sidebar.');
            closeModal('createGroup');
        }

        function searchGroups(query) {
            console.log('Searching for:', query);
            // Search functionality would filter the groups list
        }

        function toggleUserMenu() {
            alert('User menu would open here with options like Profile, Settings, and Logout.');
        }

        function showSection(section) {
            alert(`Navigating to ${section} section. This would update the main content area.`);
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.classList.remove('active');
            }
        }

        // Allow Enter key to post (Ctrl+Enter)
        document.getElementById('postContent').addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                createPost();
            }
        });