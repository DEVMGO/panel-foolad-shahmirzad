

export const BASE_URL = "https://bimeharman.faradns.ir/api/v1.0/cms";
export async function list(path){
    await fetch(BASE_URL + path, {
        headers: {
            'Content-Type': 'application/json',
            'cultureLcid': '1065'
        }
    })
    .then(data => {
        return data.json();
    })
    .then(post => {
        // console.log(post);
    });
};

const DataManager = (props) => {

    const {title,path, id} = props;

     const Post = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'cultureLcid': '1065'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    };

  

     const detail = () => {

    };

     const update = (id, data) => {
        fetch(BASE_URL + "/" + id, {
            method: 'PATCH',
            body: JSON.stringify({
                data
            })
        }).then((response) => {
            response.json().then((response) => {
                console.log(response);
            })
        }).catch(err => {
            console.error(err)
        })
    }

     const Delete = (id) => {
        fetch(BASE_URL + "/" + id, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
    }

     const put = () => {

    }

     const patch = () => {

    }

};

export default DataManager;