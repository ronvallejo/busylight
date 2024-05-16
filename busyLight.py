import requests

IPaddress = '10.4.3.150:8000'
# color = 'brown'
# url = f'http://{IPaddress}/lights/on?color={color}'

still_running = True
# response = requests.get(url)

# if response.status_code == 200:
#     data = response.json()
#     print(data)
# else:
#     print(f'ErrorL API request failed with status code {response.status_code}')

# requests.get(url)

print('Update status with \n1. Availible\n2. Away\n3. Busy\n4. Do Not Disturb\n0. Bye!\nOr enter a supported color of your choice: ')
while still_running:
    choice = input()
    if choice == '1':
        color = 'green'
        requests.get(f'http://{IPaddress}/lights/on?color={color}')
    elif choice == '2':
        color = 'yellow'
        requests.get(f'http://{IPaddress}/lights/on?color={color}')
    elif choice == '3':
        color = 'red'
        requests.get(f'http://{IPaddress}/lights/on?color={color}')
    elif choice == '4':
        color = 'purple'
        requests.get(f'http://{IPaddress}/lights/on?color={color}')
    elif choice == '0':
        requests.get(f'http://{IPaddress}/lights/off')
        still_running = False
    else:
        color = choice
        requests.get(f'http://{IPaddress}/lights/on?color={color}')