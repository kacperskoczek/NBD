import sys


def post_document(client, bucket_name, document, key):
    try:
        client.bucket(bucket_name).new(key, document).store()
        print('Document has been added to bucket {0} for key {1}'.format(bucket_name, key))
    except:
        print(sys.exc_info())


def get_document(client, bucket_name, key):
    try:
        document = client.bucket(bucket_name).get(key).encoded_data
        if document is not None:
            return document.decode("utf-8")
        else:
            print('Document for key {0} not found.'.format(key))
    except:
        print(sys.exc_info())


def update_document(client, bucket_name, key, new_values):
    try:
        document = client.bucket(bucket_name).get(key)
        for k, v in new_values.items():
            document.data[k] = v
        document.store()
        print('Document with key {0} updated.'.format(key))
    except:
        print(sys.exc_info())


def delete_document(client, bucket_name, key):
    try:
        client.bucket(bucket_name).get(key).delete()
        print('Document for key {0} deleted.'.format(key))
    except:
        print(sys.exc_info())
