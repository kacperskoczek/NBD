from riak import RiakClient
from utils import delete_document, get_document, post_document, update_document


BUCKET_NAME = 's15532'
DOCUMENT = {
    'name': 'Kacper',
    'surname': 'Skoczek',
    'nationality': 'Poland',
    'age': 24,
    'married': False
}
NEW_VALUES = {
    'surname': 'Kowalski',
    'age': 38,
    'married': True
}


if __name__ == "__main__":
    client = RiakClient(pb_port=8087)

    post_document(client=client, bucket_name=BUCKET_NAME, document=DOCUMENT, key=DOCUMENT['name'])
    print(get_document(client=client, bucket_name=BUCKET_NAME, key=DOCUMENT['name']))
    update_document(client=client, bucket_name=BUCKET_NAME, key=DOCUMENT['name'], new_values=NEW_VALUES)
    print(get_document(client=client, bucket_name=BUCKET_NAME, key=DOCUMENT['name']))
    delete_document(client=client, bucket_name=BUCKET_NAME, key=DOCUMENT['name'])
    print(get_document(client=client, bucket_name=BUCKET_NAME, key=DOCUMENT['name']))

