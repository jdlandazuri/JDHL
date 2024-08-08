using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Aguadulce
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        
        private void Coordinate_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (int.TryParse(coordenadaX.Text, out int x) && int.TryParse(coordenadaY.Text, out int y))
            {
                Canvas.SetLeft(rectangulo, x);
                Canvas.SetTop(rectangulo, y);
            }
            else
            {
                Canvas.SetLeft(rectangulo, 0);
                Canvas.SetTop(rectangulo, 0);
            }
        }
 

    }
}
