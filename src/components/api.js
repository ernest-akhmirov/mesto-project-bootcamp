

const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-8',
  headers: {
    authorization: '678ff3a4-cbd9-428a-bb2d-b4bcba0394e0',
    'Content-Type': 'application/json'
  }
}


export function checkResponse(res){
  if (res.ok){
    return res.json();
  }
  else return Promise.reject (`Ошибка ${res.status}`);
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } 
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };

  export function getUser() {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers
    })
    .then(checkResponse)
  };

  export function updateUserData(userName, userAbout) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            name: userName,
            about: userAbout,
        }),
    })
    .then(checkResponse);
}

export function addNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
          name,
          link,
      }),
  })
  .then(checkResponse);
}

export function removeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
    body: JSON.stringify({
    })
  })
    .then(checkResponse);
}

export function putLike(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    headers: config.headers,
    method: "PUT",
})
.then(checkResponse)
}

export function deleteLike(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    headers: config.headers,
    method: "DELETE",
})
.then(checkResponse)
}

export function patchAvatar(link) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(checkResponse);
}