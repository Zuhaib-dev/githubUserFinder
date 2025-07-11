
    async function fetchUser() {
      const username = document.getElementById('usernameInput').value.trim();
      const card = document.getElementById('profileCard');
      if (!username) return alert('Please enter a username');

      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error('abyy chutiyay 😂User not found');
        const data = await res.json();

        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').textContent = data.name || 'No name';
        document.getElementById('username').textContent = '@' + data.login;
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('following').textContent = data.following;
        document.getElementById('repos').textContent = data.public_repos;
        card.classList.remove('hidden');
      } catch (err) {
        alert(' chutiya ha kaUser not found!');
        card.classList.add('hidden');
      }
    }
