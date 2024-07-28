def http_status(status):
    match status:
        case 200:
            return "ok"
        
        case 404:
            return "not found"
        
print(http_status(404))