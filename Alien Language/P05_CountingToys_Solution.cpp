#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    string a, b, c; int x, y, z;
    cin >> a >> x >> b >> y >> c >> z; 
    if(x > y && x > z) {
        cout << a;
    } else if(y > z) {
        cout << b;
    } else cout << c; 
    return 0;
}
